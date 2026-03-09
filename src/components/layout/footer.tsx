import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#e9dfd3] border-t border-gray-300">
      <div className="container mx-auto px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍽️</span>
              <div>
                <span className="text-2xl font-extrabold tracking-wide text-gray-900">
                  GMRH Kitchen
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Menyediakan makanan dan minuman berkualitas dengan cita rasa 
              terbaik serta layanan pengantaran yang cepat dan terpercaya 
              untuk pelanggan kami.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="mb-4 font-semibold text-black">Navigasi</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/" className="hover:text-orange-600 transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-orange-600 transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-600 transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="mb-4 font-semibold text-black">Kontak</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>📧 support@gmrhkitchen.id</li>
              <li>📞 +62 812-3456-7890</li>
              <li>📍 Sumedang, Jawa Barat</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} GMRH Food. All rights reserved.
        </div>

      </div>
    </footer>
  );
}