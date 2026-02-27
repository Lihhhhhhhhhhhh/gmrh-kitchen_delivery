export default function MenuPage() {
  const menus = [
    {
      id: 1,
      name: "Nasi Goreng",
      description: "Nasi goreng spesial dengan ayam dan telur",
      price: 10000,
    },
    {
      id: 2,
      name: "Mie Goreng",
      description: "Mie goreng dengan topping lengkap",
      price: 12000,
    },
    {
      id: 3,
      name: "Ayam Geprek",
      description: "Ayam crispy dengan sambal pedas khas",
      price: 15000,
    },
    {
      id: 4,
      name: "Es Teh Manis",
      description: "Minuman segar untuk menemani makanan",
      price: 5000,
    },
  ];

  return (
    <section className="bg-[#f3eee7] py-20">
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Daftar Menu GMRH Food
          </h1>
          <p className="mt-3 text-gray-600">
            Pilih menu favorit Anda dan nikmati kelezatannya
          </p>
        </div>

        {/* Grid Menu */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="rounded-3xl bg-white shadow-sm overflow-hidden transition hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="h-56 bg-gray-300 flex items-center justify-center text-gray-500">
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
                  <span className="font-semibold text-orange-600">
                    Rp {menu.price.toLocaleString("id-ID")}
                  </span>

                  <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600 transition">
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}