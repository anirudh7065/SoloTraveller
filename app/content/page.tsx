import ContentPage from "@/components/ContentPage"
import { Suspense } from "react"
import { fetchData } from "@/lib/supabase/db";
import Loader from "@/components/loader";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Content",
  description: "Content Page of SoloTraveler.in",
}
const Content = async () => {
  const locations = await fetchData("locations");
  const blogs = await fetchData("blogs");
  const guide = await fetchData("guide");

  return (
    <Suspense fallback={<Loader />}>
    <ContentPage locations={locations} blogs={blogs} guide={guide} />
    </Suspense>
  )
}

export default Content
