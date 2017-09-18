module.exports = {
    extend: 'apostrophe-pieces',
    name: 'tool',
    label: 'Tool',
    pluralLabel: 'Tools',
    addFields: [
      {
        name: 'title',
        label: 'Full Name',
        type: 'string',
        required: true
      },
      {
        name: '_technology',
        withType: 'technology',
        label: 'Technology',
        type: 'joinByOne',
        filters: {
          // Fetch just enough information
          projection: {
            title: 1,
            slug: 1,
            type: 1,
            tags: 1
          }
        }
      }
    ],
    arrangeFields: [
        {
          name: 'general',
          label: 'General',
          fields: [ 'title', '_technology']
        },
        {
          name: 'admin',
          label: 'Administrative',
          fields: [ 'slug', 'published', 'tags' ]
        }
    ],
    construct: function(self, options) {
        self.beforeSave = function(req, piece, options, callback) {
        //   piece.title = piece.firstName + ' ' + piece.lastName;
          return callback();
        };
      }
  };