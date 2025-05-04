export interface BannerProps {
  theme: "green" | "blue" | "red" | "purple";
  size: "sm" | "md" | "lg";
  position: "top" | "bottom";
  children: React.ReactNode;
  onClose: () => void;
  isVisible: boolean;
}
