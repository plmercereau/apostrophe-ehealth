// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'default',
      label: 'Default'
    },{
      name: 'home',
      label: 'Home'
    },{
      name: 'toolCollection',
      label: 'Tool Collection Page'
    },{
      name: 'tool',
      label: 'Tool'
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ],
  filters: {
      // Grab our ancestor pages, with two levels of subpages
      ancestors: {
        children: {
          depth: 2
        }
      },
      // We usually want children of the current page, too
      children: true
  }
};
