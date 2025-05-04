export type Position = "top" | "bottom";

export interface BannerConfig {
  position: Position;
  color: "green" | "blue" | "red" | "purple";
  bannerHeight: "sm" | "md" | "lg";
  title: string;
  content: string;
}

export interface CardsDemoData {
  id: string;
  cardTitle: string;
  cardDescription: string;
  frontImage: string;
  hoverImage?: string;
  externalLink: string;
  isExternal: boolean;
}

export const bannerDemoData: BannerConfig[] = [
  {
    position: "top",
    color: "green",
    bannerHeight: "md",
    title: "Welcome to the Reusable Components Website!",
    content: "This is a customizable banner.",
  },
  {
    position: "bottom",
    color: "blue",
    bannerHeight: "sm",
    title: "Banner! ",
    content: "Content goes here.",
  },
];
