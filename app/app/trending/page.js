export default function TrendingPage() {
  const trends = [
    { title: "Breaking News", img: "https://picsum.photos/600?random=7" },
    { title: "Global Events", img: "https://picsum.photos/600?random=8" },
    { title: "Most Viewed Today", img: "https://picsum.photos/600?random=9" },
    { title: "Top Viral Videos", img: "https://picsum.photos/600?random=10" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-6">Trending Now</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {trends.map((t, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden cursor-pointer">
            <img src={t.img} alt={t.title} className="h-56 w-full object-cover" />
            <div className="p-4 font-semibold text-xl">{t.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
