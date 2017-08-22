/**
 * This is a file that will run before your test suit. 
 * 
 * You may need to do some mocking or another work here.
 */
window.matchMedia = window.matchMedia || (() => { return { matches: false, addListener: () => { }, removeListener: () => { } } })
class LocalStorageMock {

  store = {}

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key]
  }

  setItem(key, value) {
    this.store[key] = value.toString()
  }

  removeItem(key) {
    delete this.store[key]
  }
}
declare var global
global.localStorage = new LocalStorageMock()
