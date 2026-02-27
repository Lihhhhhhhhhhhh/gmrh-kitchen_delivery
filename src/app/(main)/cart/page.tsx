"use client";

import { useCart } from "@/context/cart-context";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">

        <h1 className="text-3xl font-bold text-gray-900 mb-10">
          Keranjang Belanja
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">
            Keranjang masih kosong.
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl bg-white p-6 shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>
                    <p className="text-orange-600 font-bold">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Hapus
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-between items-center border-t pt-6">
              <span className="text-lg font-semibold">
                Total:
              </span>
              <span className="text-2xl font-bold text-orange-600">
                Rp {total.toLocaleString("id-ID")}
              </span>
            </div>
          </>
        )}

      </div>
    </section>
  );
}