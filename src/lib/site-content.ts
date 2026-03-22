import {
  Clock3,
  Coffee,
  Crown,
  MapPin,
  Music4,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import coffeeLatteImg from "@/assets/coffee-latte.jpg";
import couscousImg from "@/assets/couscous.jpg";
import espressoMachineImg from "@/assets/espresso-machine.jpg";
import groupDiningImg from "@/assets/group-dining.jpg";
import liveMusicImg from "@/assets/live-music.jpg";

export const navItems = [
  { label: "Notre histoire", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Galerie", href: "#gallery" },
  { label: "VIP", href: "#vip" },
  { label: "Nous trouver", href: "#visit" },
];

export const heroStats = [
  { value: "12+", label: "Origines de cafe" },
  { value: "5.0", label: "Avis Google" },
  { value: "7j/7", label: "Ouvert a Bouskoura" },
];

export const storyPillars = [
  {
    icon: Coffee,
    eyebrow: "Signature coffee",
    title: "Every cup is treated like a first impression.",
    description:
      "Slow-crafted espresso, mint tea rituals, and a service flow designed to feel polished from the first hello.",
  },
  {
    icon: Users,
    eyebrow: "Social atmosphere",
    title: "A stop that feels elevated, not crowded.",
    description:
      "Thoughtful seating, warmer lighting, and clear circulation turn the station-side address into a destination instead of a shortcut.",
  },
  {
    icon: Crown,
    eyebrow: "Private moments",
    title: "VIP hosting with hospitality at the center.",
    description:
      "Business breakfasts, private dinners, and intimate celebrations feel composed, calm, and distinctly premium.",
  },
];

export const signatureMoments = [
  {
    icon: Sparkles,
    title: "Morning signature",
    description: "A polished breakfast service with warm pastries, precise coffee, and calm energy.",
  },
  {
    icon: Clock3,
    title: "All-day rhythm",
    description: "Built for quick pauses, long conversations, and reliable service from early morning to evening.",
  },
  {
    icon: Music4,
    title: "Memorable evenings",
    description: "Live ambiance and subtle theatricality give the brand emotional presence after sunset.",
  },
];

export const menuHighlights = [
  {
    title: "Breakfast ritual",
    description:
      "A generous morning set with pastries, eggs, fresh bread, and coffee service that feels complete.",
    meta: "Most requested",
  },
  {
    title: "Market cuisine",
    description:
      "Seasonal Moroccan and Mediterranean plates built around freshness and comforting presentation.",
    meta: "Daily rotation",
  },
  {
    title: "Coffee and tea bar",
    description:
      "Espresso, latte art, mint tea, and cold beverages prepared with the same attention to detail.",
    meta: "House crafted",
  },
  {
    title: "VIP menu",
    description:
      "Private-service selections for reserved gatherings, client meetings, and elevated celebrations.",
    meta: "By reservation",
  },
];

export const galleryMoments = [
  {
    image: espressoMachineImg,
    alt: "Coffee preparation at Cafe Resto LGV",
    label: "Precision",
    title: "Craft behind the counter",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: couscousImg,
    alt: "Signature dish plated at Cafe Resto LGV",
    label: "Cuisine",
    title: "Comfort with presence",
    className: "",
  },
  {
    image: coffeeLatteImg,
    alt: "Latte art served at Cafe Resto LGV",
    label: "Coffee",
    title: "Visual warmth",
    className: "",
  },
  {
    image: groupDiningImg,
    alt: "Group dining setting inside the VIP lounge",
    label: "Hosting",
    title: "Private gatherings",
    className: "md:col-span-2",
  },
  {
    image: liveMusicImg,
    alt: "Evening live music moment at the restaurant",
    label: "Atmosphere",
    title: "Night energy",
    className: "",
  },
];

export const testimonials = [
  {
    name: "Ali Abouarab",
    quote: "Cuisine excellente, service impeccable, and a place that always feels welcoming.",
  },
  {
    name: "TGV CAR",
    quote: "The atmosphere, the quality, the consistency. It feels like the best address in the area.",
  },
  {
    name: "Samine Brothers",
    quote: "The VIP experience makes the venue feel refined and perfect for family or business moments.",
  },
];

export const trustNotes = [
  { icon: Star, value: "5-star", label: "Guest perception" },
  { icon: MapPin, value: "Front of station", label: "Prime location" },
  { icon: Crown, value: "VIP ready", label: "Private hosting" },
];
