import Image from "next/image";
import myheroacademiaphoto from "../../../public/images/myheroacademia.jpg"


export default function MyHeroAcademia() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-6">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-4xl text-white font-bold text-center mb-4">My Hero Academia</h1>
                <Image
                    src={myheroacademiaphoto}
                    alt="My Hero Academia"
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 text-lg mb-4">
                    *My Hero Academia* is a Japanese anime based on the manga by Kōhei Horikoshi, first aired in 2016.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    The series is set in a world where nearly everyone has superpowers, known as "Quirks." It follows Izuku Midoriya, a Quirkless boy who dreams of becoming a hero. Despite his lack of powers, Izuku inherits the powerful Quirk "One For All" and trains to become the greatest hero.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    *My Hero Academia* explores themes of heroism, friendship, and the challenges of self-discovery. With intense action, dynamic characters, and emotional depth, the series has become a major hit in the anime world.
                </p>
                <p className="text-gray-300 text-lg mb-4">
                    The journey of Izuku and his classmates at U.A. High School is filled with struggles, victories, and emotional moments, making *My Hero Academia* a must-watch for fans of the superhero genre.
                </p>
                <a href="https://www.crunchyroll.com/my-hero-academia" target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors">
                        Watch Now
                    </button>
                </a>
            </div>
        </div>
    );
}
