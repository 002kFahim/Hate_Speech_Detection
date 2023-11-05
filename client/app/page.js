import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="bg-purple-700 min-h-screen flex">
      <Nav />
      <div className="bg-purple-300 flex-grow mt-2 mr-2 mb-2 rounded-lg p-4"></div>
    </div>
  );
}
