import cardsDemoData from "./cardsDemoData";

export default function Card() {
  return (
    <div className="mainPage">
      <div className="componentWrapper">
        {cardsDemoData.map((card, id) => (
          <Card key={id} {...card} />
        ))}
      </div>
    </div>
  );
}
