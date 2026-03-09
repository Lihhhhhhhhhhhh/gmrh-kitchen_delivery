"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/");
  };

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      <div className="mb-6 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white">
          🍴
        </div>
      </div>


      <h1 className="text-center text-3xl font-bold text-gray-900">
        GMRH Kitchen & Delivery
      </h1>

      <p className="mb-8 text-center text-gray-600">
        Masuk ke akun Anda
      </p>

      <form onSubmit={handleLogin} className="space-y-5">

        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-800">
            Email
          </label>

          <input
            type="email"
            placeholder="Masukkan email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:bg-gray-200"
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-800">
            Password
          </label>

          <input
            type="password"
            placeholder="Masukkan password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:bg-gray-200"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-xl bg-orange-500 py-3 text-lg font-semibold text-white hover:bg-orange-600"
        >
          Masuk
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-700">
        Belum punya akun?{" "}
        <Link href="/register" className="font-medium text-orange-500">
          Daftar di sini
        </Link>
      </p>
    </div>
  );
}