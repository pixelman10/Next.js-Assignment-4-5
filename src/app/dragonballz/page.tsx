export default function DragonBallZ() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-6">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-4xl text-white font-bold text-center mb-4">Dragon Ball Z</h1>
                <img
                    src="/images/dragonballz.jpg"
                    alt="Dragon Ball Z"
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 text-lg mb-4">
                    *Dragon Ball Z* is a classic anime series created by Akira Toriyama, first aired in 1989. The series follows the adventures of Goku and his friends as they defend Earth from powerful enemies.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    With its legendary battles, iconic characters, and thrilling power-ups, *Dragon Ball Z* became a worldwide phenomenon, introducing many fans to the world of anime.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    The story features Goku’s growth from a strong martial artist into a savior of the universe, with the help of the Dragon Balls and his allies. The series is known for its action-packed sequences and transformations, such as Goku turning into the Super Saiyan.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    *Dragon Ball Z* remains a cultural icon, inspiring generations of anime fans and leading to several sequel series and films.
                </p>
                <a href="https://www.crunchyroll.com/dragon-ball-z" target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                        Watch Now
                    </button>
                </a>
            </div>
        </div>
    );
}
