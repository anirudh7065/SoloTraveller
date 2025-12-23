import {prisma} from "@/lib/db";
export type DataType = "locations" | "blogs" | "guide";

export type data = {
  title: string;
  image ?: string ;
  content: string ;
  id: number;
}
export async function getData(type: DataType) {

  let data: data[];
  switch (type) {
    case "locations":
      data = await prisma.locations.findMany();
      break;
    case "blogs":
      data = await prisma.blogs.findMany();
      break;
    case "guide":
      data = await prisma.guide.findMany();
      break;
  }

  return data
}
