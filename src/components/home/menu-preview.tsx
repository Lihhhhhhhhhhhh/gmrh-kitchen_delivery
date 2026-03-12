"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { MenuCard } from "@/components/menu/menu-card";
import { Product } from "@/types/product";

export function MenuPreview() {

  const supabase = createClient();

  const [menus,setMenus] = useState<Product[]>([]);

  useEffect(()=>{

    const fetchMenus = async () => {

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(3);   // hanya 3 menu

      if(error){
        console.error(error);
        return;
      }

      setMenus(data || []);
    };

    fetchMenus();

  },[]);

  return (

    <section className="bg-[#e9dfd3] py-20">

      <div className="container mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-black">
            Menu Pilihan
          </h2>
          <p className="text-gray-700">
            Beberapa menu terbaik dari GMRH Food
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">

          {menus.map((menu)=>(
            <MenuCard key={menu.id} menu={menu}/>
          ))}

        </div>

        <div className="mt-14 text-center">
          <Link
            href="/menu"
            className="rounded-xl bg-orange-500 px-8 py-4 text-white font-semibold hover:bg-orange-600"
          >
            Lihat Semua Menu
          </Link>
        </div>

      </div>

    </section>
  );
}