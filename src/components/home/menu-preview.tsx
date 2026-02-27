import Link from "next/link";

export function MenuPreview() {
  const menus = [
    {
      id: 1,
      name: "Nasi Goreng",
      description: "Nasi goreng dengan telur, ayam, dan sayuran segar",
      price: 10000,
    },
    {
      id: 2,
      name: "Mie Goreng",
      description: "Mie goreng spesial dengan topping pilihan",
      price: 12000,
    },
    {
      id: 3,
      name: "Ayam Geprek",
      description: "Ayam crispy dengan sambal pedas khas GMRH",
      price: 15000,
    },
  ];

  return (
    <section className="bg-[#e9dfd3] py-20">
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Pilihan Menu Terbaik Kami
          </h2>
          <p className="mt-2 text-gray-600">
            Pilihlah Menu Yang Pelanggan Inginkan
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="rounded-3xl bg-white shadow-sm overflow-hidden transition hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-400">
                Gambar Menu
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {menu.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {menu.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">
                    Rp {menu.price.toLocaleString("id-ID")}
                  </span>

                  <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm text-white transition hover:bg-orange-600">
                    🛒 Keranjang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-xl bg-orange-500 px-8 py-4 text-white font-semibold transition hover:bg-orange-600">
            Lihat Semua Menu
          </Link>
        </div>

      </div>
    </section>
  );
}