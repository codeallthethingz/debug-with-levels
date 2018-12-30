const log = require('.')('logging')
const debug = require('debug')

var value = null
debug.enable('logging:*')
debug.log = (msg) => {
  value = msg
}
test('test logger info', () => {
  log.info('something')
  expect(value).toMatch('logging:info  ')
  expect(value).toMatch('something')
})
test('test logger error', () => {
  log.error('something')
  expect(value).toMatch('logging:error ')
  expect(value).toMatch('something')
})
test('test logger trace', () => {
  log.trace('something')
  expect(value).toMatch('logging:trace ')
  expect(value).toMatch('something')
})
test('test logger warn', () => {
  log.warn('something')
  expect(value).toMatch('logging:warn  ')
  expect(value).toMatch('something')
})
test('test logger debug', () => {
  log.debug('something')
  expect(value).toMatch('logging:debug ')
  expect(value).toMatch('something')
})
