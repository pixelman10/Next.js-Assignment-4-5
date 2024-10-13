// pages/about.js
export default function About() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center py-12 px-4">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-4xl w-full">
          <div className="text-white">
            <h1 className="text-5xl font-extrabold text-center mb-6">About Me</h1>
            <ul className="space-y-6">
              <li className="flex items-center">
                <span className="text-3xl font-semibold mr-4">Name:</span>
                <span className="text-xl">Muhammad Usman Khan</span>
              </li>
              <li className="flex items-center">
                <span className="text-3xl font-semibold mr-4">Profession:</span>
                <span className="text-xl">Web Developer</span>
              </li>
              <li className="flex items-center">
                <span className="text-3xl font-semibold mr-4">Email:</span>
                <span className="text-xl">muk200710@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-3xl font-semibold mr-4">Contact:</span>
                <span className="text-xl">+923003978468</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  