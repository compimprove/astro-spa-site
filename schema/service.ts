import {
  defineField,
  defineType,
  type ImageAsset,
  type PortableTextBlock,
} from "sanity";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export interface Service {
  title: string;
  image: ImageAsset;
  isComingSoon?: boolean;
  enable: boolean;
  serviceList: {
    name: string;
    price?: string;
    note?: PortableTextBlock[];
  }[];
}

export const serviceSchema = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    orderRankField({ type: "service" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "isComingSoon",
      title: "Is Coming Soon",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "enable",
      title: "Enable",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "serviceList",
      title: "Service List",
      type: "array",
      of: [
        defineField({
          name: "service",
          title: "Service",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "string",
            }),
            defineField({
              name: "note",
              title: "Note",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      enable: "enable",
      media: "image",
      isComingSoon: "isComingSoon",
    },
    prepare({ title, enable, media, isComingSoon }) {
      const subtitle = enable
        ? isComingSoon
          ? "Coming Soon"
          : "Enabled"
        : "Disabled";
      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
