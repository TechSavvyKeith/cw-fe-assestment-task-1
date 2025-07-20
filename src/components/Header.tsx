import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Wortionary logo" className="w-10 h-10" />
        <div className="text-white font-semibold text-lg">Wortionary</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-2.5 text-gray-400 text-sm" />
          <Input
            type="text"
            placeholder="Search"
            aria-label="Header search"
            className="pl-9 bg-gray-800 text-white border-none focus:ring-0 rounded-full"
          />
        </div>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.jpg" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}