var apos = require('apostrophe')({
  shortName: 'apostrophe-boilerplate',
  title: 'Apostrophe Boilerplate',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {
    // Add custom apostrophe-modules and their respective configuration here!
    'apostrophe-db': {
      // uri: 'mongodb://' + process.env.MONGODB_PORT_27017_TCP_ADDR + ':' + process.env.MONGODB_PORT_27017_TCP_PORT + '/mydb'
      uri: 'mongodb://mongodb:27017/apostrophe-ehealth'
    }
  }
});
