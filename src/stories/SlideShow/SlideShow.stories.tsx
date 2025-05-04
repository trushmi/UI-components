import images from "./dataImages";

export default function SlideShow() {
  return (
    <div className="mainContainer">
      <SlideShow
        images={images}
        isNavButtons={false}
        intervalInMilliseconds={2000}
      />
    </div>
  );
}
