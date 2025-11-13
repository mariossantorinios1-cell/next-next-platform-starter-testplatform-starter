export default function ExplorePage() {
  const cards = [
    { title: "Amazing Places", img: "https://picsum.photos/500?random=1" },
    { title: "World News", img: "https://picsum.photos/500?random=2" },
    { title: "Art & Photos", img: "https://picsum.photos/500?random=3" },
    { title: "Sports Highlights", img: "https://picsum.photos/500?random=4" },
    { title: "Music & Pop Culture", img: "https://picsum.photos/500?random=5" },
    { title: "Viral Trends", img: "https://picsum.photos/500?random=6" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-6">Explore</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden cursor-pointer">
            <img src={c.img} alt={c.title} className="h-48 w-full object-cover" />
            <div className="p-4 font-semibold">{c.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
