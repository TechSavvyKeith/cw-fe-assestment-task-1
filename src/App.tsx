import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import HeroSection from "./components/HeroSection";
import TagList from "./components/TagList";

function App() {
  const [search, setSearch] = useState("");
  const tags = [
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ];

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    document.title = "Wortionary";
  }, []);

  return (
    <div className="bg-black min-h-screen text-white m-0 p-0">
      <Header />
      <main className="px-4">
        <HeroSection search={search} onSearch={setSearch} />
        <TagList title="Trending" tags={filteredTags} />
        <TagList title="For you" tags={filteredTags} />
      </main>
    </div>
  );
}

export default App;
