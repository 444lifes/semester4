"use client"

import { useEffect, useState } from "react";
import LaptopList from "./components/LaptopList";
import Search from "./components/Search";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLaptops = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/laptops");
        const data = await response.json();
        setLaptops(data.data);
        setFilteredLaptops(data.data);
      } catch (error) {
        console.error("Error fetching laptops:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  const handleSearch = (keyword) => {
    if (keyword === "") {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter((laptop) => {
        const searchIn = `${laptop.name} ${laptop.gpu} ${laptop.cpu}`.toLowerCase();
        return searchIn.includes(keyword.toLowerCase());
      });
      setFilteredLaptops(filtered);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 flex flex-col">
      <ThemeToggle />

      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          RTX 50 Series Gaming(GApai Mimpi dan rankING)Laptops
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          etalase laptop gaming terbaru dengan GPU RTX 50 Series:)
        </p>
      </header>

      {!isLoading && <Search onSearch={handleSearch} />}

      {isLoading && (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Loading laptops...
            </p>
          </div>
        </div>
      )}

      {!isLoading && (
        <div className="flex-1">
          {filteredLaptops.length > 0 ? (
            <>
              <div className="max-w-7xl mx-auto mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Menampilkan {filteredLaptops.length} dari {laptops.length} laptop
                </p>
              </div>
              <LaptopList laptops={filteredLaptops} />
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600 dark:text-gray-400">
                 raonok laptope
              </p>
              <p className="text-gray-500 dark:text-gray-500 mt-2">
                ganti coba jangan ini
              </p>
            </div>
          )}
        </div>
      )}

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
             RTX 50 Series Gaming Laptops
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            when ya laptop baru
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">
            ini footer gatau buat apaan tapi di sem 4 emang ada footer
          </p>
        </div>
      </footer>
    </div>
  );
}
