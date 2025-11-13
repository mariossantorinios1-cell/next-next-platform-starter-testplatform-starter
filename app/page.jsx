export default function Home() {
  const items = [
    { title: "Amazing Places on Earth", img: "https://source.unsplash.com/random/800x600?nature" },
    { title: "Trending Travel Destinations", img: "https://source.unsplash.com/random/800x600?travel" },
    { title: "Beautiful Cities Around the World", img: "https://source.unsplash.com/random/800x600?city" },
    { title: "Top Beaches to Visit", img: "https://source.unsplash.com/random/800x600?beach" },
    { title: "Epic Mountains", img: "https://source.unsplash.com/random/800x600?mountains" },
    { title: "Wildlife Wonders", img: "https://source.unsplash.com/random/800x600?animals" },
  ];

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🌍 Discover Amazing Things</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition cursor-pointer bg-white">
            <img src={item.img} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
