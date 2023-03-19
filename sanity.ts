import { createClient } from "next-sanity";
import createImageURLBuilder from "@sanity/image-url";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "production",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "default",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
export const urlFor = (source: any) =>
  createImageURLBuilder(config).image(source);
