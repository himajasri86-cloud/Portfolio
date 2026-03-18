import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Himaja Sri Portfolio",
  description:
    "BBA Digital Technologies student at Mahindra University exploring product management, business and data analytics.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO / PORTFOLIO */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Himaja Sri</h1>
        <p className="mt-3 text-lg md:text-xl">
          BBA Digital Technologies Student
        </p>
        <p className="mt-4 max-w-xl text-gray-600">
          BBA Digital Technologies student at Mahindra University exploring product management,
          business and data analytics.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#"
            className="px-5 py-2 bg-black text-white rounded-lg"
          >
            Resume
          </a>
          <a
            href="#"
            className="px-5 py-2 border border-black rounded-lg"
          >
            Contact
          </a>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-2xl md:text-4xl font-semibold">Summary</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Brief overview will be added here.
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Personal introduction and academic background will be added here.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-2xl md:text-4xl font-semibold">Experience</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Professional experience and internships will be added here.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">Projects</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Selected academic and practical projects will be added here.
        </p>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-2xl md:text-4xl font-semibold">Certifications</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Relevant certifications will be added here.
        </p>
      </section>

      {/* ACTIVITIES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Extra Curricular Activities
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Activities and leadership roles will be added here.
        </p>
      </section>

      {/* RECOMMENDATIONS */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-2xl md:text-4xl font-semibold">Recommendations</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Professional recommendations will be added here.
        </p>
      </section>

    </main>
  );
}
