export const metadata = {
  title: "EverythingNow",
  description: "The world's most visual discovery platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Navigation */}
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold cursor-pointer">🌐 EverythingNow</div>

            <div className="hidden md:flex gap-6 font-medium">
              <a href="/" className="hover:text-blue-500">Home</a>
              <a href="/explore" className="hover:text-blue-500">Explore</a>
              <a href="/trending" className="hover:text-blue-500">Trending</a>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 rounded-lg border"
              />
              <div className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer"></div>
            </div>
          </div>
        </nav>

        {/* Push content below navbar */}
        <div className="pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}
