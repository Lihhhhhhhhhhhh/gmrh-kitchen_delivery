"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { useCart } from "@/context/cart-context";

export function Header() {
  const pathname = usePathname();
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        pathname === href
          ? "text-orange-600"
          : "text-gray-600 hover:text-orange-500"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-orange-600">
          GMRH Kitchen
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLink("/", "Beranda")}
          {navLink("/menu", "Menu")}
          {navLink("/contact", "Contact")}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <Link href="/cart" className="relative text-xl">
          🛒

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="rounded-lg bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600"
            >
              Masuk
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}