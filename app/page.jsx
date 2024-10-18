import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-[calc(60vh)]">
        <div className="card_container flex w-full gap-6 justify-center md:justify-start md:px-5">
          <Link href="/series">
            <div className=" w-36 h-60 mt-6">
              <div className="bg-gray-800 bg-center 
            bg-[url('/prueba-tecnica-react-developer-main/assets/placeholder.png')] w-full h-5/6 flex items-center justify-center">
                <h2 className="text-white text-3xl">SERIES</h2>
              </div>
              <h3>Popular series</h3>
            </div>
          </Link>
          <Link href="/movies">
          <div className=" w-36 h-60 mt-6">
            <div className="bg-gray-800 bg-center 
            bg-[url('/prueba-tecnica-react-developer-main/assets/placeholder.png')] w-full h-5/6 flex items-center justify-center">
              <h2 className="text-white text-3xl">MOVIES</h2>
            </div>
            <h3>Popular Movies</h3>
          </div>
          </Link>
          
        </div>
      </main>

    </>
  );
}
