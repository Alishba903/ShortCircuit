import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2">
        <div className="bg-green-50">
          <p>
          The best URL Shortener in the Market.
          </p>
          <p>
            We are the most straightforward URL Shortener in the world.
          </p>
        </div>
        <div className="bg-red-500">
          <Image alt="An Image of a vector" src="vector.img"/>

        </div>

      </section>
    </main>
  );
}
