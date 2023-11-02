module.exports = {
  subdomain: "system",
  SECRET: "0xD58F835B69C317A76CA5FA4A70A1D0d4D79dAC64", // temporary...
  email: {
    host: "smtp.office365.com", // your sender-email smtp host
    port: 587, // smtp server port
    secure: false, // true for 465, false for other ports
    auth: {
      user: "your sender-email",
      pass: "your sender-email password", // generated ethereal password
    },
    secureConnection: false,
    tls: {
      ciphers: "SSLv3",
    },
  },
  logger: {
    file: {
      filename: "logs/application-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: false,
      maxSize: "20m",
      maxFiles: "2d",
      level: "info",
    },
    console: {
      level: "silly",
    },
  },
  ormconfig: {
    name: "default",
    type: "postgres",
    host: "postgres",
    port: 5432,
    database: "postgres",
    username: "postgres",
    password: "abcd1234",
    synchronize: true,
    logging: false,
  },
  scheduler: {
    /* Name to be used for setting client's "application" properties when registering a schedule */
    application: "seunghwa-ecs",
    /* Base endpoint to be used for setting "callback" properties when registering a schedule */
    callbackBase: "http://app:3000",
    /* 
        Scheduler service endpoint
        caution) endpoint for "localhost" has some problem. 
        https://github.com/node-fetch/node-fetch/issues/1624
      */
    endpoint: "http://scheduler:9902",
  },
  metalDetector: {
    mddh: {
      port: 9801,
    },
    depos: {
      port: 9802,
    },
  },
};
