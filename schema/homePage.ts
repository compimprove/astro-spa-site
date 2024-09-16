import { defineField, defineType } from "sanity";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";

export interface HomePageContent {
  _type: "homePageContent";
  _createdAt: string;
  news: PortableTextBlock[];
  hostParty: PortableTextBlock[];
  bookingLink: string;
  phoneNumber: string;
  whatsNewImage: ImageAsset;
}

export const homePageSchema = defineType({
  name: "homePageContent",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "whatsNewImage",
      title: "What's New Image",
      type: "image",
    }),
    defineField({
      name: "news",
      title: "What's New",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
        },
      ],
    }),
    defineField({
      name: "hostParty",
      title: "Host A Party",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
        },
      ],
    }),
    defineField({
      name: "bookingLink",
      title: "Booking Link",
      type: "url",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
  ],
  options: {
    singleton: true,
  },
});
