/**
 * This is a file that will run before your test suit. 
 * 
 * You may need to do some mocking or another work here.
 */
window.matchMedia = window.matchMedia || (() => { return { matches: false, addListener: () => { }, removeListener: () => { } } })
