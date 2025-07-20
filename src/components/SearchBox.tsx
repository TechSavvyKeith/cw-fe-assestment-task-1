import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBoxProps {
  initialValue: string;
  onSearch: (search: string) => void;
}

function SearchBox({ initialValue, onSearch }: SearchBoxProps) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(innerValue);
    }, 500);

    return () => clearTimeout(delay);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center bg-black px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg"
    >
      <Search className="text-gray-400 mr-3" aria-hidden="true" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        aria-label="Search input"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
      />
      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white ml-4 rounded-full"
      >
        Search
      </Button>
    </form>
  );
}

export default SearchBox;