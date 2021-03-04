module.exports = {
  subdomain: 'system',
  SECRET: '0xD58F835B69D207A76CC5F84a70a1D0d4C79dAC95', // temporary...
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
  },
  vision: {
    streamingPort: 3001,
    camera: {
      cameraCalibrator: {
        program: ['python3', '/app/object-tracker-python/object_tracker/calibcamera_engine.py']
      },
      handEyeCalibrator: {
        program: ['python3', '/app/object-tracker-python/object_tracker/calibhandeye_engine.py']
      },
      ROIDetector: {
        program: ['python3', '/app/object-tracker-python/object_tracker/roi_engine.py']
      }
    },
    robotArm: {
      markerOffsetCalibrator: {
        program: ['python3', '/app/object-tracker-python/object_tracker/objecttracking_engine.py']
      }
    },
    objectTracker: {
      program: ['python3', '/app/object-tracker-python/object_tracker/objecttracking_engine.py']
    }
  }
}
