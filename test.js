const bunyan = require('bunyan');
// Set up a logger
const getLogger = (serviceName, serviceVersion, level) =>
  bunyan.createLogger({ name: `${serviceName}:${serviceVersion}`, level });
getLogger().info('HELLLOOOOOOOOOOOOOOO');
