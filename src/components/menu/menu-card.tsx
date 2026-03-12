  "use client";

  import { useState } from "react";
  import { Product } from "@/types/product"
  import { useCart } from "@/context/cart-context";
  



  export function MenuCard({ menu }: { menu: Product }) {

    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {

      
      addToCart({
        id: menu.id,
        name: menu.name,
        price: menu.price,
      });

      setAdded(true);

      setTimeout(() => {
        setAdded(false);
      }, 1500);
    };

    return (

      <div className="rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-lg transition">

        {/* Image */}
        <div className="h-56 bg-gray-200 overflow-hidden">

    {menu.image? (
      <img
        src={menu.image}
        alt={menu.name}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="flex items-center justify-center h-full text-gray-400">
        No Image
      </div>
    )}

  </div>

        <div className="p-5">

          <h3 className="font-semibold text-lg text-black">
            {menu.name}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {menu.description}
          </p>

          <div className="mt-4 flex items-center justify-between">

            <span className="font-semibold text-orange-600">
              Rp {menu.price.toLocaleString("id-ID")}
            </span>

  {menu.stock === 0 ? (
    <button
      className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"
      disabled
    >
      Stok Habis
    </button>
  ) : (
    <button
      onClick={handleAdd}
      className={`rounded-lg px-4 py-2 text-sm text-white transition ${
        added
          ? "bg-green-500"
          : "bg-orange-500 hover:bg-orange-600"
      }`}
    >
      {added ? "✔ Ditambahkan" : "🛒 Keranjang"}
    </button>
  )}



          </div>

        </div>

      </div>
    );
  }