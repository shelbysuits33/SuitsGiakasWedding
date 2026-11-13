import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";
import PhotoSections, { type PhotoSection } from "../_components/PhotoSections";

/*
  Drop photos into /public/images/ and add them here, grouped into sections.
  Example:
    {
      title: "Travels",
      photos: [{ src: "/images/your-photo.jpg", alt: "Description" }],
    },
  While this list is empty, the page shows a "coming soon" message.
*/
const sections: PhotoSection[] = [];

export default function MemoryLanePage() {
  return (
    <>
      <PageHeader
        title="Memory Lane"
        subtitle="Julian & Shelby"
        variant="rose"
      />

      <div className="max-w-5xl mx-auto px-6 pt-10">
        <Divider className="mb-6" />
      </div>

      <PhotoSections sections={sections} emptyNote="More photos on the way" />
    </>
  );
}
