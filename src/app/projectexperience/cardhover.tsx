import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Innovillage",
    description:
      "SiPePOm: Sistem Pemberi Pakan Otomatis",
    link: "https://youtu.be/oxSWRJUBj_o",
  },
  {
    title: "MBC LAB Landing Page",
    description:
      "A Prototype Landing Page Website for MBC LAB Company",
    link: "https://mbclab-landingpage.site/",
  },
  {
    title: "Practicum Assistant",
    description:
      "A practiccum lab assistant in the 'DASKOM' Laboratory",
    link: "https://instagram.com/telu.daskom",
  },
];
