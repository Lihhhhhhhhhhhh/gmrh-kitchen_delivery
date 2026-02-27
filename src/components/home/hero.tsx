export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#e9dfd3] py-32">

      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-300 blur-3xl opacity-40"></div>
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-yellow-200 blur-3xl opacity-40"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">

        <p className="text-sm font-medium tracking-widest text-orange-700 uppercase">
          Cita Rasa Khas & Berkualitas
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Sajian Lezat untuk <br />
          Setiap Momen Istimewa
        </h1>

        <p className="mt-8 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          GMRH Food menghadirkan hidangan pilihan dengan bahan berkualitas 
          dan rasa autentik yang siap memanjakan selera Anda.
        </p>

      </div>
    </section>
  );
}