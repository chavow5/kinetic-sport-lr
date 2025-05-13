const instagramPosts = [
  {
    id: 1,
    imageUrl: "/images/insta1.jpg",
    caption: "Nueva sesión de rehabilitación 💪",
  },
  {
    id: 2,
    imageUrl: "/images/insta2.jpg",
    caption: "Charlas de nutrición deportiva 🥗",
  },
  {
    id: 3,
    imageUrl: "/images/insta3.jpg",
    caption: "Entrenamiento funcional 🏋️‍♂️",
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-12 bg-gray-100 text-center" id="instagram">
      <h2 className="text-3xl font-bold mb-6">Seguinos en Instagram</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {instagramPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded shadow hover:shadow-lg transition p-2"
          >
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="rounded w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="mt-2 text-sm text-gray-700">{post.caption}</p>
          </div>
        ))}
      </div>
      <a
        href="https://www.instagram.com/kineticsportlr/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-2 px-6 rounded-full font-semibold shadow hover:scale-105 transition-all animate-zoom-in"
      >
        Ver en Instagram
      </a>
    </section>
  );
};
export default InstagramFeed;