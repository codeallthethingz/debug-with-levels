const debug = require('debug')

class Logger {
  constructor (name) {
    this.trace = debug(name).extend('trace')
    this.debug = debug(name).extend('debug')
    this.info = debug(name).extend('info ')
    this.warn = debug(name).extend('warn ')
    this.error = debug(name).extend('error')
  }
}
module.exports = (name) => {
  return new Logger(name)
}
