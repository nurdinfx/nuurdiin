
const user = {
  name: 'user',
  title: 'user',
  type: 'document',
  fields: [
    {
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean',
      description: 'Check if the user is admin',
      initialValue: false,
      validation: function(Rule) { return Rule.required(); },
      //   readOnly: true,
      //   hidden: true,
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the user',
      readOnly: true,
      validation: function(Rule) { return Rule.required(); },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'url',
    },
    {
      name: 'password',
      type: 'string',
      hidden: true,
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'emailVerified',
      type: 'datetime',
      hidden: true,
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
      description: 'A brief dsecription about the user',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      description: 'Date and time when the user was created',
      validation: function(Rule) { return Rule.required(); },
    },
  ],
};

export default user;
