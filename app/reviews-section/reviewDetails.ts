import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Tapish Batoe",
    role: "Video Editor",
    company: "Video Editor Agency",
    profileImg: alex,
    testimonial:
      "Monu is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Tapish Batoe",
    role: "Video Editor",
    company: "Video Editor Agency",
    profileImg: alex,
    testimonial:
      "Monu is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Tapish Batoe",
    role: "Video Editor",
    company: "Video Editor Agency",
    profileImg: alex,
    testimonial:
      "Monu is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Tapish Batoe",
    role: "Video Editor",
    company: "Video Editor Agency",
    profileImg: alex,
    testimonial:
      "Monu is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Tapish Batoe",
    role: "Video Editor",
    company: "Video Editor Agency",
    profileImg: alex,
    testimonial:
      "Monu is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Tapish Batoe",
    role: "Video Editor",
    company: "Video Editor Agency",
    profileImg: alex,
    testimonial:
      "Monu is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  
];
