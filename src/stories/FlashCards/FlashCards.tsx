import { flashCardsData } from "./flashcardsData";

export default function App() {
  return (
    <div className="mainContainer">
      <FlashCards flashCardsData={flashCardsData} />
    </div>
  );
}
