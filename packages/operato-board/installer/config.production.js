var licenseKey = require('./license').Key

module.exports = {
  subdomain: 'system',
  licenseKey: licenseKey,
  SECRET: '0xD58F835B69B207A76CA5F84a70a1D0d4C79dAC97', // temporary...
  email: {
    host: 'smtp.office365.com', // your sender-email smtp host
    port: 587, // smtp server port
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your sender-email',
      pass: 'your sender-email password' // generated ethereal password
    },
    secureConnection: false,
    tls: {
      ciphers: 'SSLv3'
    }
  },
  logger: {
    file: {
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: false,
      maxSize: '20m',
      maxFiles: '2d',
      level: 'info'
    },
    console: {
      level: 'silly'
    }
  },
  //   ormconfig: {
  //     name: 'default',
  //     type: 'sqlite',
  //     database: 'db.sqlite',
  //     synchronize: false,
  //     logging: true,
  //     logger: 'debug'
  //   },
  ormconfig: {
    name: 'default',
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'abcd1234',
    synchronize: true,
    logging: true
  }
}
