import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";
import PhotoSections, { type PhotoSection } from "../_components/PhotoSections";

const sections: PhotoSection[] = [
  {
    title: "Getting Ready",
    photos: [
      { src: "/images/giakassneaks.devstroudphoto-2.jpg", alt: "Iron" },
      { src: "/images/giakassneaks.devstroudphoto-8.jpg", alt: "Makeup" },
      { src: "/images/giakassneaks.devstroudphoto-5.jpg", alt: "Makeup B&W" },
      { src: "/images/giakassneaks.devstroudphoto-1.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-6.jpg", alt: "Winnie" },
      { src: "/images/giakassneaks.devstroudphoto-7.jpg", alt: "Hair" },
      { src: "/images/giakassneaks.devstroudphoto-3.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-9.jpg", alt: "Zip Dress" },
      { src: "/images/giakassneaks.devstroudphoto-4.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-10.jpg", alt: "Steps" },

      //  { src: "/images/IMG_1681.HEIC", alt: "Sneak Peak" },
      //  { src: "/images/IMG_1681.HEIC", alt: "Sneak Peak" },
    ],
  },
  {
    title: "Ceremony",
    photos: [
      { src: "/images/giakassneaks.devstroudphoto-11.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-12.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-13.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-14.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-15.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-16.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-17.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-18.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-19.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-20.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-21.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-22.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-23.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-24.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-25.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-26.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-27.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-28.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-29.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-30.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-31.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-32.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-33.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-34.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-35.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-36.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-37.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-38.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-39.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-40.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-41.jpg", alt: "Sneak Peak" },
    ],
  },
  {
    title: "The After Party",
    photos: [
      { src: "/images/giakassneaks.devstroudphoto-42.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-43.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-44.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-45.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-46.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-47.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-48.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-49.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-50.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-51.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-52.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-53.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-54.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-55.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-56.jpg", alt: "Sneak Peak" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Wedding Photos"
        subtitle="Julian & Shelby"
        variant="rose"
      />

      <div className="max-w-5xl mx-auto px-6 pt-10">
        <Divider className="mb-6" />
      </div>

      <PhotoSections
        sections={sections}
        emptyNote="Check back closer to the wedding"
      />
    </>
  );
}
