import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemaTypes from "./schemas/schema";
import { myStructure } from "./deskStructure";

export default defineConfig({
  name: "default",
  title: "Hotel Management",
  projectId: "8974gpyo",
  dataset: "production",
  plugins: [
    deskTool({
      structure: myStructure,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});