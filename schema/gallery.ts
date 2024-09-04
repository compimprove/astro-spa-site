import { defineType, type ImageAsset } from "sanity";

export interface GalleryImage {
  _type: "galleryImage";
  _id: string;
  images: ImageAsset & { alt: string }[];
}

export const gallerySchema = defineType({
  name: "galleryImage",
  type: "document",
  title: "Gallery Image",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  options: {
    singleton: true,
  },
});
