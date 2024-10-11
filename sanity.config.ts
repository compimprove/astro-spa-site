// Different environments use different variables
const projectId = "wx9xhwt1";
const dataset = "production";

import { defineConfig } from "sanity";
import {
  structureTool,
  type StructureBuilder,
  type StructureResolverContext,
} from "sanity/structure";
import { schemaTypes } from "./schema";
import { singletonTools } from "sanity-plugin-singleton-tools";
import {
  singletonDocumentListItems,
  filteredDocumentListItems,
} from "sanity-plugin-singleton-tools";
import { RebuildWebsite } from "./tools/RebuildWebsite";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title("LavishNail")
    .items([
      // Create a list item for each singleton document in your schema that links directly to a document view
      ...singletonDocumentListItems({ S, context }),
      // Create a list item for a specific singleton
      S.divider(),
      // Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
      orderableDocumentListDeskItem({
        type: "service",
        S,
        context,
        title: "Services",
      }),
    ]);

export default defineConfig({
  name: "lavishnail",
  title: "LavishNail",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure,
    }),
    singletonTools(),
  ],
  tools: [RebuildWebsite()],
  schema: {
    types: schemaTypes,
  },
});
