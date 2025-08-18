"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  currentSearch: string;
}

export default function SearchBar({ currentSearch }: SearchBarProps) {
  const [search, setSearch] = useState(currentSearch);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setSearch(currentSearch);
  }, [currentSearch]);

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }

    router.push(`/?${params.toString()}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(search);
  };

  const clearSearch = () => {
    setSearch("");
    handleSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex-1 max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search cakes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
        />
        {search && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </form>
  );
}
