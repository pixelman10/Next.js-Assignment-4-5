import Image from "next/image";
import attackontitanphoto from "../../../public/images/attackontitan.jpeg"


export default function AttackOnTitan() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-6">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-4xl text-white font-bold text-center mb-4">Attack on Titan</h1>
                <Image 
                    src={attackontitanphoto}
                    alt="Attack on Titan"
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 text-lg mb-4">
                    Attack on Titan is a Japanese anime series based on the manga by Hajime Isayama, first aired in 2013.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    The series is set in a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans. The story follows Eren Yeager and his friends as they join the military to fight the Titans and uncover the mysteries surrounding their existence.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    As the plot unfolds, shocking revelations about the Titans and the world come to light, leading to intense battles, heartbreaking losses, and a deeper understanding of the human condition.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    Known for its breathtaking action sequences, intricate storytelling, and thought-provoking themes, Attack on Titan has become a cultural phenomenon in the world of anime.
                </p>
                <a href="https://www.crunchyroll.com/attack-on-titan" target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                        Watch Now
                    </button>
                </a>
            </div>
        </div>
    );
}
