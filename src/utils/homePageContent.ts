import { sanityClient } from "sanity:client";
import groq from "groq";
import type { HomePageContent } from "../../schema/homePage";
import type { Service } from "../../schema/service";

export async function getHomePageContent(): Promise<HomePageContent> {
  return await sanityClient.fetch(
    groq`*[_type == "homePageContent" && _id == "homePageContent"][0]`
  );
}

export async function getServices(): Promise<Service[]> {
  return await sanityClient.fetch(
    groq`*[_type == "service" && enable == true] | order(orderRank)`
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
