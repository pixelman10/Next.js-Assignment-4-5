import Image from "next/image";
import narutophoto from "../../../public/images/Naruto.jpg"

export default function Naruto() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-6">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-4xl text-white font-bold text-center mb-4">Naruto</h1>
                <Image
                    src={narutophoto}
                    alt="Naruto"
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 text-lg mb-4">
                    Naruto is a Japanese anime series based on the manga by Masashi Kishimoto, first aired in 2002.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    The story follows Naruto Uzumaki, a young ninja seeking recognition and aspiring to become the Hokage, the village leader. Along his journey, he encounters various challenges, forms bonds with friends and foes, and discovers the importance of teamwork and perseverance.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    The series explores themes of friendship, rivalry, and the pursuit of dreams. Naruto's journey from a lonely outcast to a respected hero is both inspiring and heartwarming.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    With its engaging characters and compelling storyline, Naruto has become a beloved classic in the world of anime and continues to capture the hearts of fans around the globe.
                </p>
                <a href="https://www.crunchyroll.com/naruto" target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                        Watch Now
                    </button>
                </a>
            </div>
        </div>
    );
}
