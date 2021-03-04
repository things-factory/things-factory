module.exports = {
  useVirtualHostBasedDomain: true,
  subdomainOffset: 2,
  SECRET: '0xD58F835B69C217A76CA5FA7a70a1D0d4D79dAC63', // temporary...
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
  },
  marketplaceIntegrationLazada: {
    platform: 'lazada',
    application: 'operato-mms',
    appKey: '11111111',
    appSecret: '111111111111111111',
    callback: 'https://mms.myoperato.com/callback-lazada'
  },
  marketplaceIntegrationShopee: {
    platform: 'shopee',
    isUAT: false,
    application: 'Operato MMS',
    partnerId: 1111111,
    partnerKey: '11111111111111111'
  },
  fulfillmentIntegrationOperato: {
    host: 'things-factory.com:3000',
    platform: 'operato',
    application: 'operato-mms',
    appKey: '111111111-11111',
    appSecret: '1111111111111111',
    callback: 'https://mms.myoperato.com/callback-operato'
  }
}
