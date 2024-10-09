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
  services: ServiceContent[];
}

export interface ServiceContent {
  enabled: boolean;
  title: string;
  description: PortableTextBlock[];
  image: ImageAsset;
  link: string;
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
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "enabled",
              title: "Enabled",
              type: "boolean",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                },
              ],
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "url",
            }),
          ],
          preview: {
            select: {
              title: "title",
              enabled: "enabled",
              media: "image",
            },
            prepare: ({ title, enabled, media }) => ({
              title: title,
              subtitle: enabled ? "Enabled" : "Disabled",
              media: media,
            }),
          },
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
