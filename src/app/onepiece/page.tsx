import Image from "next/image";
import onepiecephoto from "../../../public/images/onepiece.jpg"
import Link from "next/link"; 


export default function OnePiece() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-6">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-4xl text-white font-bold text-center mb-4">One Piece</h1>
                <Image
                    src={onepiecephoto}
                    alt="One Piece"
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 text-lg mb-4">
                One Piece is a Japanese anime series based on the manga by Eiichiro Oda, first aired in 1999.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                The story follows Monkey D. Luffy, a young pirate with the ability to stretch like rubber after eating the Gum-Gum Fruit. Luffy sets off on a journey to find the legendary treasure known as &quot;One Piece&quot; and become the Pirate King.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                Along his adventure, Luffy assembles a diverse crew of pirates known as the Straw Hat Pirates. Together, they face formidable foes, navigate treacherous seas, and uncover ancient mysteries while chasing their dreams.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                One Piece is known for its epic world-building, emotional storytelling, and unforgettable characters, making it one of the most popular and longest-running anime series in history.
                </p>

                
                
                <Link href={"https://www.crunchyroll.com/one-piece"} target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                        Watch Now
                    </button>
                </Link>
            </div>
        </div>
    );
}
