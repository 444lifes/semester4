import Image from "next/image";

export default function LaptopList({ laptops }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {laptops.map((laptop, index) => (
        <div
          key={laptop.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fadeIn"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
            <Image
              src={laptop.image}
              alt={laptop.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-4">
            <div className="mb-2">
              <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {laptop.gpu}
              </span>
            </div>

            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
              {laptop.name}
            </h3>

            <div className="space-y-1 mb-4 text-sm text-gray-600 dark:text-gray-400">
              <p> {laptop.display}</p>
              <p> {laptop.cpu}</p>
              <p> {laptop.ram} • {laptop.storage}</p>
            </div>

            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {laptop.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
