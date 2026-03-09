"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const supabase = createClient();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/");
  };

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      {/* LOGO */}
      <div className="mb-6 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white">
          🍴
        </div>
      </div>

      <h1 className="text-center text-3xl font-bold text-gray-900">
        GMRH Kitchen & Delivery
      </h1>

      <p className="mb-8 text-center text-gray-600">
        Buat akun baru anda
      </p>

      <form onSubmit={handleRegister} className="space-y-5">

        {/* NAME */}
        <div>
          <label className="mb-2 block text-sm text-gray-800">
            Nama Lengkap
          </label>

          <input
            type="text"
            placeholder="Masukkan nama lengkap"
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:bg-gray-200"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-sm text-gray-800">
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
          <label className="mb-2 block text-sm text-gray-800">
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
          Daftar
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-700">
        Sudah punya akun?{" "}
        <Link href="/login" className="font-medium text-orange-500">
          Masuk di sini
        </Link>
      </p>
    </div>
  );
}