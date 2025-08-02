const review = {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: function(Rule) { return Rule.required(); },
    },
    {
      name: 'hotelRoom',
      title: 'Hotel Room',
      type: 'reference',
      to: [{ type: 'hotelRoom' }],
      validation: function(Rule) { return Rule.required(); },
    },
    {
      name: 'text',
      title: 'Review Text',
      type: 'text',
      validation: function(Rule) { return Rule.required(); },
    },
    {
      name: 'userRating',
      title: 'User Rating',
      type: 'number',
      validation: function(Rule) { return Rule.required().min(1).max(5).error('Rating must be between 1 and 5'); },
    },
  ],
};

export default review;
