export default function DemonSlayer() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-6">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-4xl text-white font-bold text-center mb-4">Demon Slayer</h1>
                <img
                    src="/images/demonslayer.jpg"
                    alt="Demon Slayer"
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 text-lg mb-4">
                    Demon Slayer, also known as *Kimetsu no Yaiba*, is a Japanese anime based on the manga by Koyoharu Gotouge, first aired in 2019.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    The series follows Tanjiro Kamado, a young boy whose family is slaughtered by demons. His sister, Nezuko, is turned into a demon, but retains some human traits. Tanjiro sets out to become a Demon Slayer to avenge his family and find a cure for Nezuko.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    With its breathtaking animation, captivating storyline, and emotional depth, *Demon Slayer* has captured the hearts of anime fans worldwide. The series explores themes of family, resilience, and the battle between good and evil.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    The stunning action sequences and powerful character development make *Demon Slayer* a standout in the world of anime, and it continues to grow in popularity with each passing season.
                </p>
                <a href="https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba" target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                        Watch Now
                    </button>
                </a>
            </div>
        </div>
    );
}
