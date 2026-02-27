export function Features() {
  const features = [
    {
      id: 1,
      icon: "🍲",
      title: "Menu Berkualitas",
      description:
        "Masakan rumahan dengan bahan segar dan kualitas terbaik untuk kepuasan pelanggan.",
    },
    {
      id: 2,
      icon: "🛵",
      title: "Pengiriman Cepat",
      description:
        "Pesanan Anda akan kami antar dengan cepat dan aman langsung ke lokasi tujuan.",
    },
    {
      id: 3,
      icon: "💰",
      title: "Harga Terjangkau",
      description:
        "Nikmati makanan lezat dengan harga bersahabat untuk semua kalangan.",
    },
  ];

  return (
    <section className="bg-[#f3eee7] py-24">
      <div className="container mx-auto px-6">

        <div className="grid gap-12 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-white p-10 text-center shadow-sm transition duration-300 hover:shadow-lg"
            >
              {/* Icon Circle */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl transition group-hover:bg-orange-500 group-hover:text-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}