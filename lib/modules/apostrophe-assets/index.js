// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default:

module.exports = {
  stylesheets: [
    // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">
    {
      name: 'material.min'
    },
    {
      name: 'md-icons'
    },
    {
      name: 'md-fonts'
    },
    {
      name: 'style'
    }
  ],
  scripts: [
    {
      name: 'popper'
    },
    {
      name: 'material'
    }
  ]
};
