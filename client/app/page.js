import Card from "./components/Card";

const cardData = [
  {
    title: "Card 1",
    description: "Description for Card 1",
    image: "/hate.png",
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
    image: "/hate.png",
  },
];

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card data={cardData} />
    </div>
  );
}
