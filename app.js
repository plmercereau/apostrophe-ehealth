var apos = require('apostrophe')({
  shortName: 'apostrophe-boilerplate',
  title: 'Apostrophe Boilerplate',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {
    // 'apostrophe-templates': { viewsFolderFallback: __dirname + '/views' },
    'apostrophe-db': {
      // uri: 'mongodb://' + process.env.MONGODB_PORT_27017_TCP_ADDR + ':' + process.env.MONGODB_PORT_27017_TCP_PORT + '/mydb'
      uri: 'mongodb://mongodb:27017/apostrophe-ehealth'
    },
    'link-widgets': {}
  }
});
