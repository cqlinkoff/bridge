export default class Bridge {
  constructor (namespace) {
    this.namespace = namespace
    this.native = window[namespace]
  }

  events = {}

  genFuncName = () => {
    return `$$${this.namespace}_callback_${Math.floor(Math.random() * 1000)}_${Date.now()}`
  }

  call = (funcName, arg) => {
    if (!this.native) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`call ${this.namespace}[${funcName}]`)
        console.log(arg)
      }
      return
    }

    if (!funcName) {
      return
    }

    if (!this.native[funcName]) {
      return
    }

    if (typeof arg === 'object') {
      const { success, fail, ...params } = arg

      let successCallBack
      let failCallBack

      if (success) {
        successCallBack = this.genFuncName()
        window[successCallBack] = (arg) => {
          try {
            arg = JSON.parse(arg)
          } catch (error) {}

          success(arg)
        }
      }

      if (fail) {
        failCallBack = this.genFuncName()
        window[failCallBack] = (arg) => {
          try {
            arg = JSON.parse(arg)
          } catch (error) {}

          fail(arg)
        }
      }

      const param = {
        ...params,
        success: successCallBack,
        fail: failCallBack
      }
      let result
      if (/android/img.test(navigator.userAgent)) {
        result = this.native[funcName](JSON.stringify(param))
      } else {
        result = this.native[funcName](param)
      }
      try {
        return JSON.parse(result)
      } catch (error) {
        return result
      }
    } else {
      let result
      if (arg) {
        result = this.native[funcName](arg)
      } else {
        result = this.native[funcName]()
      }
      try {
        return JSON.parse(result)
      } catch (error) {
        return result
      }
    }
  }

  addEventListener = (eventName, handler) => {
    const handlerName = this.genFuncName()
    this.events[eventName] = handlerName
    window[handlerName] = (arg) => {
      try {
        arg = JSON.parse(arg)
      } catch (error) {}

      handler(arg)
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`add event listener to ${this.namespace}: ${handlerName}`)
    }
    if (this.native && this.native.addEventListener) {
      this.native.addEventListener(eventName, handlerName)
    }
  }

  removeEventListener = (eventName, handler) => {
    if (this.events[eventName]) {
      if (window[this.events[eventName]]) {
        delete window[this.events[eventName]]
      }
      if (this.native && this.native.removeEventListener) {
        this.native.removeEventListener(eventName, this.events[eventName])
      }
      delete this.events[eventName]
    }
  }
}
