import Bridge from '../src'

describe('Bridge', () => {
  beforeEach(() => {
    window.test = {
      test: (arg) => arg,
      addEventListener: () => {},
      removeEventListener: () => {}
    }
  })

  afterEach(() => {
    delete window.test
  })

  test('create instance', () => {
    const bridge = new Bridge('test')

    expect(bridge).toBeInstanceOf(Bridge)
    expect(typeof bridge.call).toBe('function')
    expect(typeof bridge.addEventListener).toBe('function')
    expect(typeof bridge.removeEventListener).toBe('function')
  })

  test('call function', () => {
    const bridge = new Bridge('test')

    const result = bridge.call('test', 'test')
    const result1 = bridge.call('test1', 'test1')
    const result2 = bridge.call('', 'test2')
    const result3 = bridge.call('test', {
      params: {
        'test': 'test'
      },
      success: () => {},
      fail: () => {}
    })

    expect(result).toBe('test')
    expect(result1).toBeUndefined()
    expect(result2).toBeUndefined()
    expect(typeof window[result3.success]).toBe('function')
    expect(typeof window[result3.fail]).toBe('function')
    expect(result3.params).toEqual({
      'test': 'test'
    })
  })

  test('addEventListener and removeEventListener', () => {
    const bridge = new Bridge('test')

    const test = () => {
      bridge.addEventListener('test', () => {})
      bridge.removeEventListener('test', () => {})
    }

    expect(test).not.toThrowError()
  })

  test('no native present', () => {
    window.test = null
    const bridge = new Bridge('test')

    const result = bridge.call('test', 'test')
    expect(result).toBeUndefined()
  })
})
