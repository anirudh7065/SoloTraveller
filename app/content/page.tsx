import ContentPage from "@/components/ContentPage"
import { getData,data as dataType } from "@/lib/getdata"

export const metadata = {
  title: "Content",
  description: "Content Page of SoloTraveler.in",
}
const Content = async() => {
  const locations: dataType[] = await getData("locations");
  const blogs: dataType[] = await getData("blogs");
  const guide: dataType[] = await getData("guide");

  return (
    <ContentPage locations={locations} blogs={blogs} guide={guide} />
  )
}

export default Content
