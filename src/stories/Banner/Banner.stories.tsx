import { useState } from "react";
import { bannerDemoData, BannerConfig, Position } from "./bannerDemoData";

export default function BannerStory() {
  const [activeBanner, setActiveBanner] = useState<Position | "">("");
  const [bannerVisible, setBannerVisible] = useState<boolean>(false);

  const showLowerBanner = () => {
    setActiveBanner("bottom");
    setBannerVisible(true);
  };

  const showUpperBanner = () => {
    setActiveBanner("top");
    setBannerVisible(true);
  };

  const getBannerData = (position: Position): BannerConfig | undefined => {
    return bannerDemoData.find((banner) => banner.position === position);
  };

  const activeBannerData = getBannerData(activeBanner as Position);

  const closeBanner = () => {
    setBannerVisible(false);
  };

  return (
    <div className="component-wrapper">
      <button onClick={showUpperBanner} aria-label="Show upper banner">
        Show upper banner
      </button>
      <button onClick={showLowerBanner} aria-label="Show lower banner">
        Show lower banner
      </button>
      {activeBannerData && (
        <Banner
          theme={activeBannerData.color}
          size={activeBannerData.bannerHeight}
          position={activeBannerData.position}
          onClose={closeBanner}
          isVisible={bannerVisible}
        >
          <div>
            <h2>{activeBannerData.title}</h2>
            <p>{activeBannerData.content}</p>
          </div>
        </Banner>
      )}
    </div>
  );
}
