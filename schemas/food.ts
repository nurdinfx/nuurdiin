export default {
  name: "food",
  type: "document",
  title: "Food Item",
  fields: [
    { name: "name", type: "string", title: "Food Name" },
    { name: "price", type: "number", title: "Price" },
    { name: "category", type: "string", title: "Category" },
    { name: "available", type: "boolean", title: "Available" },
  ],
};