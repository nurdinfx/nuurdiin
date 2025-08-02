export default {
  name: "room",
  type: "document",
  title: "Room",
  fields: [
    { name: "number", type: "string", title: "Room Number" },
    { name: "type", type: "string", title: "Room Type" },
    { name: "price", type: "number", title: "Price per Night" },
    { name: "available", type: "boolean", title: "Available" },
  ],
};