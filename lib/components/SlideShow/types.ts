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
