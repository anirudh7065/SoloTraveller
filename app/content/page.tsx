import ContentPage from "@/components/ContentPage"
import { getData, data as dataType } from "@/lib/getPrismaData"
import { Suspense } from "react"

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Content",
  description: "Content Page of SoloTraveler.in",
}
const Content = async () => {
  const locations: dataType[] = await getData("locations");
  const blogs: dataType[] = await getData("blogs");
  const guide: dataType[] = await getData("guide");

  return (
    <Suspense fallback={null}>
    <ContentPage locations={locations} blogs={blogs} guide={guide} />
    </Suspense>
  )
}

export default Content
