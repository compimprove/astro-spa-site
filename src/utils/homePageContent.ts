import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";
import type { HomePageContent } from "../../schema/homePage";

export async function getHomePageContent(): Promise<HomePageContent> {
  return await sanityClient.fetch(
    groq`*[_type == "homePageContent" && _id == "homePageContent"][0]`
  );
}

export async function getBookingLink(): Promise<string> {
  const homePageContent = await getHomePageContent();
  return homePageContent.bookingLink;
}

export async function getPhoneNumber(): Promise<string> {
  const homePageContent = await getHomePageContent();
  return homePageContent.phoneNumber;
}
