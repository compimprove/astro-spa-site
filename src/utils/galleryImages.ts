import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";
import type { GalleryImage } from "../../schema/gallery";

export async function getGalleryImages(): Promise<GalleryImage> {
  return await sanityClient.fetch(
    groq`*[_type == "galleryImage" && _id == "galleryImage"][0]`
  );
}
