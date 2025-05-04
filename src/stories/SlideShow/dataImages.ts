export interface ImageData {
  id: string;
  img: string;
  alt: string;
}

export interface SlideShowProps {
  images: ImageData[];
  isNavButtons: boolean;
  intervalInMilliseconds: number;
}

const imageDemoData: ImageData[] = [
  {
    id: "1",
    img: "https://picsum.photos/id/100/1440/900",
    alt: "Ocean waves crashing on a sandy beach",
  },
  {
    id: "2",
    img: "https://picsum.photos/id/120/1440/900",
    alt: "Starry night sky",
  },
  {
    id: "3",
    img: "https://picsum.photos/id/237/1440/900",
    alt: "Dog looking intently at the camera with curious eyes",
  },
  {
    id: "4",
    img: "https://picsum.photos/id/13/1440/900",
    alt: "Beach with calm ocean waves",
  },
  {
    id: "5",
    img: "https://picsum.photos/id/14/1440/900",
    alt: "Ocean and large rocks along the coast",
  },
  {
    id: "6",
    img: "https://picsum.photos/id/15/1440/900",
    alt: "Waterfall cascading down rocks surrounded by lush green forest",
  },
  {
    id: "7",
    img: "https://picsum.photos/id/16/1440/900",
    alt: "Ocean view with fog rolling in over the horizon",
  },
  {
    id: "8",
    img: "https://picsum.photos/id/27/1440/900",
    alt: "Man standing on a beach casting a fishing line into the ocean",
  },
  {
    id: "9",
    img: "https://picsum.photos/id/37/1440/900",
    alt: "Colorful flowers in bloom with a view of the ocean in the background",
  },
  {
    id: "10",
    img: "https://picsum.photos/id/43/1440/900",
    alt: "New York City skyline with skyscrapers",
  },
  {
    id: "11",
    img: "https://picsum.photos/id/70/1440/900",
    alt: "Tree-lined road with a foggy sky",
  },
];

export default imageDemoData;
