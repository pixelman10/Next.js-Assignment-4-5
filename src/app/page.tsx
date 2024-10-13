
import Image from "next/image";
import Link from "next/link"; 

import narutophoto from "../../public/images/Naruto.jpg"
import onepiecephoto from "../../public/images/onepiece.jpg"
import attackontitanphoto from "../../public/images/attackontitan.jpeg"
import demonslayerphoto from "../../public/images/demonslayer.jpg"
import myheroacademiaphoto from "../../public/images/myheroacademia.jpg"
import dragonballzphoto from "../../public/images/dragonballz.jpg"




export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 py-12 px-4">
            <h1 className="text-center text-white text-4xl font-bold mb-10">Exploring the World of Anime</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Anime Card 1 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-gray-700">
                    <Image 
                        src={narutophoto}
                        alt="Naruto"
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        
                    />
                    <h2 className="text-xl font-semibold text-white">Naruto</h2>
                    <p className="text-gray-300 mt-2">
                        Naruto is a Japanese anime series based on the manga by Masashi Kishimoto, first aired in 2002.
                    </p>
                    <Link href="/naruto">
                        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                            Read More
                        </button>
                    </Link>
                </div>

                {/* Anime Card 2 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-gray-700">
                    <Image
                        src={onepiecephoto}
                        alt="One Piece"
                        className="w-full h-40 object-cover rounded-lg mb-4"

                    />
                    <h2 className="text-xl font-semibold text-white">One Piece</h2>
                    <p className="text-gray-300 mt-2">
                        One Piece is a long-running anime series based on the manga by Eiichiro Oda, first aired in 1999.
                    </p>
                    <Link href={"/onepiece"}>
                        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                            Read More
                        </button>
                    </Link>
                </div>

                {/* Anime Card 3 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-gray-700">
                    <Image
                        src={attackontitanphoto}
                        alt="Attack on Titan"
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        
                    />
                    <h2 className="text-xl font-semibold text-white">Attack on Titan</h2>
                    <p className="text-gray-300 mt-2">
                        Attack on Titan is a popular anime based on the manga by Hajime Isayama, first aired in 2013.
                    </p>
                    <Link href={"/attackontitan"}>
                        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                            Read More
                        </button>
                    </Link>
                </div>

                {/* Anime Card 4 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-gray-700">
                    <Image
                        src={demonslayerphoto}
                        alt="Demon Slayer"
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        
                    />
                    <h2 className="text-xl font-semibold text-white">Demon Slayer</h2>
                    <p className="text-gray-300 mt-2">
                        Demon Slayer is a recent hit anime based on the manga by Koyoharu Gotouge, first aired in 2019.
                    </p>
                    <Link href={"/demonslayer"}>
                        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                            Read More
                        </button>
                    </Link>
                </div>

                {/* Anime Card 5 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-gray-700">
                    <Image
                        src={myheroacademiaphoto}
                        alt="My Hero Academia"
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        
                    />
                    <h2 className="text-xl font-semibold text-white">My Hero Academia</h2>
                    <p className="text-gray-300 mt-2">
                        My Hero Academia is a Japanese anime based on the manga by Kōhei Horikoshi, first aired in 2016.
                    </p>
                    <Link href={"/myheroacademia"}>
                        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                            Read More
                        </button>
                    </Link>
                </div>

                {/* Anime Card 6 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-gray-700">
                    <Image
                        src={dragonballzphoto}
                        alt="Dragon Ball Z"
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        
                    />
                    <h2 className="text-xl font-semibold text-white">Dragon Ball Z</h2>
                    <p className="text-gray-300 mt-2">
                        Dragon Ball Z is a classic anime series created by Akira Toriyama, first aired in 1989.
                    </p>
                    <Link href={"/dragonballz"}>
                        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

