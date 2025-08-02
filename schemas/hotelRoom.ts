const roomTypes = [
  { title: 'Basic', value: 'basic' },
  { title: 'Luxury', value: 'luxury' },
  { title: 'Suite', value: 'suite' },
];

const hotelRoom = {
  name: 'hotelRoom',
  title: 'Hotel Room',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: function(Rule) {
        return Rule.required().max(50).error('Maximum 50 Characters');
      },
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: function(Rule) { return Rule.required(); },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: function(Rule) {
        return Rule.required().min(100).error('Minimum 100 Characters');
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: function(Rule) {
        return Rule.required().min(100).error('Minimum 100 Characters');
      },
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      validation: function(Rule) { return Rule.min(0); },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'file', type: 'file', title: 'File' },
          ],
        },
      ],
      validation: function(Rule) {
        return Rule.required().min(3).error('Minimum of 3 images required');
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'object',
      fields: [
        { name: 'url', type: 'url', title: 'URL' },
        { name: 'file', type: 'file', title: 'File' },
      ],
      validation: function(Rule) { return Rule.required().error('Cover Image is required'); },
    },
    {
      name: 'type',
      title: 'Room Type',
      type: 'string',
      options: {
        list: roomTypes,
      },
      validation: function(Rule) { return Rule.required(); },
      initialValue: 'basic',
    },
    {
      name: 'specialNote',
      title: 'Special Note',
      type: 'text',
      validation: function(Rule) { return Rule.required(); },
      initialValue:
        'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.',
    },
    {
      name: 'dimension',
      title: 'Dimension',
      type: 'string',
    },
    {
      name: 'numberOfBeds',
      title: 'Number Of Beds',
      type: 'number',
      validation: function(Rule) { return Rule.min(1); },
      initialValue: 1,
    },
    {
      name: 'offeredAmenities',
      title: 'Offered Amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'amenity', title: 'Amenity', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'isBooked',
      title: 'Is Booked',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{ type: 'review' }],
    },
  ],
};

export default hotelRoom;
