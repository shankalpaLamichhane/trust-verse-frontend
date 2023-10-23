// pages/index.js

import Image from 'next/image'


export default function Home() {
  return (

    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="h-34" />
            <span className="text-xl font-semibold"> Dashboard</span>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        {/* Dashboard Sections */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Add your content for Section 1 here */}
            <div className="bg-white p-4 rounded shadow-md">
            <img src="https://fastly.picsum.photos/id/991/200/300.jpg?hmac=BdTxfK2wHhsGppraQzb5puxPKb5mPVzDaZPz8IiC44Q" alt="Logo" className="h-34" />

            </div>
            <div className="bg-white p-4 rounded shadow-md">
            <img src="https://fastly.picsum.photos/id/108/200/300.jpg?hmac=66ukSMLRNm61ayt092vMAdSgvIRE5opr1Dj3kxCkC2c" alt="Logo" className="h-34" />

            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <img src="https://fastly.picsum.photos/id/513/200/300.jpg?hmac=KcBD-M89_o9rkxWW6PS2yEfAMCfd3TH9McppOsf3GZ0" alt="Logo" className="h-34"></img>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
          Steps

          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Add your content for Section 2 here */}
            <div className="bg-white p-4 rounded shadow-md">
            <img src="https://fastly.picsum.photos/id/641/200/300.jpg?hmac=TpiMIigzR3rlnmP84Df902LYzuV4pApn7Tq6lCYic0A" alt="Logo" className="h-34" />

            </div>
            <div className="bg-white p-4 rounded shadow-md">            <img src="https://fastly.picsum.photos/id/924/200/300.jpg?hmac=9Zu3ewQYhI2ltbuwGQk-Ed6PjR87O-zdiPty45pJS6g" alt="Logo" className="h-34" />
</div>
            <div className="bg-white p-4 rounded shadow-md">            <img src="https://fastly.picsum.photos/id/513/200/300.jpg?hmac=KcBD-M89_o9rkxWW6PS2yEfAMCfd3TH9McppOsf3GZ0" alt="Logo" className="h-34" />
</div>
          </div>
        </section>

        {/* Add more sections as needed */}
      </main>
    </div>
  )
}
