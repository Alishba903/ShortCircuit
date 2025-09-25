import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: './fonts/Poppins-ExtraBold.ttf',
  variable: '--font-poppins',
  display: 'swap',
  weight: '100 900',
});

export default function Home() {
  return (
  <main className="bg-gray-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
          The best URL Shortener in the Market.
          </p>
          <p className="text-lg text-gray-600 text-center px-10">
            We are the most straightforward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
          </p>
          <div className="flex gap-3">
          <Link href="/generate"><button className="bg-gray-800 shadow-lg p-3 rounded-lg py-1 font-bold text-white">Try Now</button></Link>
          <Link href="/github"><button className="bg-gray-800 shadow-lg p-3 rounded-lg py-1 font-bold text-white">GitHub</button></Link>
        </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" fill={true} alt="An Image of a vector" src="/vector.jpg"/>

        </div>

      </section>
    </main>
  );
}
