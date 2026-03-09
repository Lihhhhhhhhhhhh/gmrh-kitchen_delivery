"use client";

import { menus } from "@/data/menu";
import { MenuCard } from "@/components/menu/menu-card";

export default function MenuPage() {
  return (
    <section className="bg-[#f3eee7] py-20">
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Daftar Menu GMRH Kitchen
          </h1>

          <p className="mt-3 text-gray-600">
            Pilih menu favorit Anda dan nikmati kelezatannya
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </div>

      </div>
    </section>
  );
}