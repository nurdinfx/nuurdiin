export default {
  name: "booking",
  type: "document",
  title: "Booking",
  fields: [
    {
      name: "user",
      type: "reference",
      to: [{ type: "user" }],
      title: "User",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "hotelRoom",
      type: "reference",
      to: [{ type: "hotelRoom" }],
      title: "Hotel Room",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "checkinDate",
      type: "datetime",
      title: "Check-in Date",
      description: "Date and time of check-in",
      validation: (Rule: any) => Rule.required(),
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 60,
      },
    },
    {
      name: "checkoutDate",
      type: "datetime",
      title: "Check-out Date",
      description: "Date and time of check-out",
      validation: (Rule: any) => Rule.required(),
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 60,
      },
    },
    {
      name: "numberOfDays",
      type: "number",
      title: "Number of Days",
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "adults",
      type: "number",
      title: "Number of Adults",
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "children",
      type: "number",
      title: "Number of Children",
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: "totalPrice",
      type: "number",
      title: "Total Price",
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: "discount",
      type: "number",
      title: "Discount Amount",
      validation: (Rule: any) => Rule.min(0),
      initialValue: 0,
    },
    {
      name: "status",
      type: "string",
      title: "Booking Status",
      options: {
        list: [
          { title: "Confirmed", value: "confirmed" },
          { title: "Pending", value: "pending" },
          { title: "Cancelled", value: "cancelled" },
          { title: "Completed", value: "completed" },
        ],
      },
      initialValue: "pending",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "paymentStatus",
      type: "string",
      title: "Payment Status",
      options: {
        list: [
          { title: "Paid", value: "paid" },
          { title: "Pending", value: "pending" },
          { title: "Failed", value: "failed" },
          { title: "Refunded", value: "refunded" },
        ],
      },
      initialValue: "pending",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "paymentMethod",
      type: "string",
      title: "Payment Method",
      options: {
        list: [
          { title: "Credit Card", value: "credit_card" },
          { title: "Debit Card", value: "debit_card" },
          { title: "PayPal", value: "paypal" },
          { title: "Cash", value: "cash" },
          { title: "Somali Payment", value: "somali_payment" },
        ],
      },
    },
    {
      name: "specialRequests",
      type: "text",
      title: "Special Requests",
      description: "Any special requests or notes for the booking",
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "updatedAt",
      type: "datetime",
      title: "Updated At",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: "hotelRoom.name",
      user: "user.name",
      checkin: "checkinDate",
      checkout: "checkoutDate",
      status: "status",
    },
    prepare(selection: any) {
      const { title, user, checkin, checkout, status } = selection;
      const checkinDate = new Date(checkin).toLocaleDateString();
      const checkoutDate = new Date(checkout).toLocaleDateString();
      
      return {
        title: `${title || 'Unknown Room'} - ${user || 'Unknown User'}`,
        subtitle: `${checkinDate} to ${checkoutDate} (${status})`,
      };
    },
  },
};