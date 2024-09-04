import { sanityClient } from "sanity:client";
import groq from "groq";
import type { Project } from "../../schema/project";

export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(
    groq`*[_type == "project" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}
