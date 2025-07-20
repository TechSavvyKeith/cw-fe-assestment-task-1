import SearchBox from "./SearchBox";
import { useIsMobile } from "../hooks/use-mobile";
import { useEffect } from "react";

function HeroSection() {
  const onSearch = (search: string) => {
    console.log("Search:", search);
    // Logic is intentionally omitted for this task
  };

  const isMobile = useIsMobile();

  useEffect(() => {
    console.log("Device type:", isMobile ? "Mobile" : "Desktop");
  }, [isMobile]);

  return (
    <section className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8 shadow-xl transition-all duration-300">
      <img
        src="/task1/hero-bg.png"
        alt="Bookshelf background"
        className="w-full h-96 object-cover brightness-110"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Search for words, phrases and meanings
        </h1>
        <div className="mt-4 w-full max-w-lg">
          <SearchBox initialValue="" onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
