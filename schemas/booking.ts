
const booking = {
  name: 'booking',
  title: 'Booking',
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
      name: 'checkinDate',
      title: 'Check-in Date',
      type: 'date',
      validation: function(Rule) { return Rule.required(); },
    },
    {
      name: 'checkoutDate',
      title: 'Check-out Date',
      type: 'date',
      validation: function(Rule) { return Rule.required(); },
    },
    {
      name: 'numberOfDays',
      title: 'Number Of Days',
      type: 'number',
      initialValue: 1,
      validation: function(Rule) { return Rule.required().min(1); },
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      validation: function(Rule) { return Rule.required().min(0); },
    },
    {
      name: 'adults',
      title: 'Adults',
      type: 'number',
      initialValue: 1,
      validation: function(Rule) { return Rule.required().min(1); },
    },
    {
      name: 'children',
      title: 'Children',
      type: 'number',
      initialValue: 0,
      validation: function(Rule) { return Rule.required().min(0); },
    },
    {
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: function(Rule) { return Rule.required().min(0); },
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      description: 'Date and time when the booking was created',
      validation: function(Rule) { return Rule.required(); },
    },
  ],
};

export default booking;
