"use client";
import './globals.css';
import Header from '@/pages/header';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-04-20T17:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-24 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/mohit-anu.jpg')" }}
      >
        <div className="absolute bottom-0 left-0 right-0 text-center pb-10 md:pb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-rose-600 mb-0.5">
            Mohit & Anushka
          </h1>
        </div>
      </section>

      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-black text-center mb-6">
            Event Details
          </h2>
          <p className="text-center text-gray-800 mb-16 max-w-2xl mx-auto">
            We're excited to celebrate our special day with you. Here's
            everything you need to know.
          </p>

          {/* Countdown Timer */}
          <div className="max-w-4xl mx-auto mb-16 bg-rose-50 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-serif text-gray-700 text-center mb-6">
              Counting Down To Our Big Day
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 w-24 text-center">
                <div className="text-3xl font-bold text-rose-500">
                  {countdown.days}
                </div>
                <div className="text-gray-600 text-sm">Days</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 w-24 text-center">
                <div className="text-3xl font-bold text-rose-500">
                  {countdown.hours}
                </div>
                <div className="text-gray-600 text-sm">Hours</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 w-24 text-center">
                <div className="text-3xl font-bold text-rose-500">
                  {countdown.minutes}
                </div>
                <div className="text-gray-600 text-sm">Minutes</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 w-24 text-center">
                <div className="text-3xl font-bold text-rose-500">
                  {countdown.seconds}
                </div>
                <div className="text-gray-600 text-sm">Seconds</div>
              </div>
            </div>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tilak Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-18 h-18 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-amber-400 text-2xl me-2"></i>
                <i className="fas fa-music  text-amber-400 text-2xl"></i>
              </div>
              <h3 className="text-xl text-gray-700 font-serif mb-2">Tilak</h3>
              <div className="w-12 h-1 bg-rose-200 mx-auto mb-4"></div>
              <p className="text-gray-700 mb-2">
                <i className="far fa-clock mr-2"></i> 6:00 PM Onwards
              </p>
              <p className="text-gray-700 mb-2">
                <i className="far fa-calendar mr-2"></i> April 18, 2025
              </p>
              <p className="text-gray-700 mb-4">
                <i className="fas fa-map-marker-alt mr-2"></i> Chhota Badheya
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Barauli, Gopalganj
              </p>
              <p className="text-gray-600 italic text-sm">Dinner </p>
            </div>

            {/* Matkor Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-18 h-18 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-praying-hands text-amber-400 text-2xl"></i>
              </div>
              <h3 className="text-xl text-gray-700 font-serif mb-2">Haldi&Matkor</h3>
              <div className="w-12 h-1 bg-rose-200 mx-auto mb-4"></div>
              <p className="text-gray-700 mb-2">
                <i className="far fa-clock mr-2"></i> 3:00 PM Onwards
              </p>
              <p className="text-gray-700 mb-2">
                <i className="far fa-calendar mr-2"></i> April 19, 2025
              </p>
              <p className="text-gray-700 mb-4">
                <i className="fas fa-map-marker-alt mr-2"></i> Chhota Badheya
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Barauli, Gopalganj
              </p>
              <p className="text-gray-600 italic text-sm">Dinner & Dancing</p>
            </div>

            {/* Wedding Party Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-18 h-18 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-tie  text-amber-400 text-2xl"></i>
                <i className="fas fa-heart  text-rose-500 text-xl"></i>
                <i className="fas fa-user  text-amber-400 text-2xl"></i>
              </div>
              <h3 className="text-xl text-gray-700 font-serif mb-2">Shubh Vivah </h3>
              <div className="w-12 h-1 bg-rose-200 mx-auto mb-4"></div>
              <p className="text-gray-700 mb-2">
                <i className="far fa-clock mr-2"></i> 7:00 PM Onwards
              </p>
              <p className="text-gray-700 mb-2">
                <i className="far fa-calendar mr-2"></i> April 20, 2025
              </p>
              <p className="text-gray-700 mb-4">
                <i className="fas fa-map-marker-alt mr-2"></i> Devapur
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Pashchim Tola, Devapur
              </p>
              <p className="text-gray-600 italic text-sm">
                Dinner & Dancing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-12" id="gallery">
        <div className="container mx-auto p-4">
          <section id="memories">
            <h2 className="text-4xl text-red-500 text-center font-bold mb-8">Our Memories</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 photos">
              <img src="/images/ma.jpg" alt="Wedding ceremony with family" />
              <img src="/images/ma2.jpg" alt="Bride wearing traditional attire" />
              <img src="/images/varmala.jpg" alt="Exchange of wedding garlands" />
              <img src="/images/sindur.jpg" alt="Application of sindur during wedding" />
              <img src="/images/abh.jpg" alt="Post-wedding celebration moments" />
              <img src="/images/fm.jpg" alt="Family gathering after the wedding" />
              <img src="/images/fm2.jpg" alt="Wedding reception dinner" />
              <img src="/images/fm3.jpg" alt="Group photo with friends and family" />
            </div>

            <div className="text-center mt-8">
              <a
                href="https://t.me/+d8wrfx0avssyOTQ1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-500 inline-block text-white px-4 py-2 rounded-md text-sm hover:bg-rose-600 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span className="mr-2">📷</span> Join For More
              </a>
            </div>
          </section>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-gray-600 font-serif text-center mb-6">Location</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Join us at these beautiful venues for our special day.
          </p>

          {/* Venue Information */}
          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-stretch gap-6">
            {/* Tilak Venue */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-1/3">
              <h3 className="text-xl font-serif text-rose-500 mb-2">
                Tilak Venue
              </h3>
              <h4 className="font-medium text-gray-600 mb-2">Chhota Badheya</h4>
              <p className="text-gray-600 mb-4">
                Barauli, Gopalganj, Bihar - 841405
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/9uMpcCGdtvbtqbscA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-rose-500 text-white px-4 py-2 rounded-md text-sm hover:bg-rose-600 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="fas fa-directions mr-2"></i> Get Directions
                </a>
              </div>
            </div>

            {/* Matkor Venue */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-1/3">
              <h3 className="text-xl font-serif text-rose-500 mb-2">
                Matkor Venue
              </h3>
              <h4 className="text-gray-600 mb-4">Chhota Badheya</h4>
              <p className="text-gray-600 mb-4">
                Barauli, Gopalganj, Bihar - 841405
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/9uMpcCGdtvbtqbscA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-rose-500 text-white px-4 py-2 rounded-md text-sm hover:bg-rose-600 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="fas fa-directions mr-2"></i> Get Directions
                </a>
              </div>
            </div>

            {/* Wedding Venue */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-1/3">
              <h3 className="text-xl font-serif text-rose-500 mb-2">
                Wedding Venue
              </h3>
              <h4 className="text-gray-600 mb-4">Devapur</h4>
              <p className="text-gray-600 mb-4">
                Pashchim Tola, Devapur, Bihar - 841405
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps?q=Devapur,+Bihar+841405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-rose-500 text-white px-4 py-2 rounded-md text-sm hover:bg-rose-600 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="fas fa-directions mr-2"></i> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      <footer className="bg-white text-rose-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Left Column: Message */}
            <div className="md:col-span-3 text-center md:text-left">
              <h3 className="text-2xl text-rose-600 font-bold mb-4">Mohit & Anushka</h3>
              <p className="mb-4">
                With love in our hearts and joy in our souls, we warmly invite you to be a part of a very special moment in our lives.
                As we take our first steps together on the beautiful journey of marriage, your presence would mean the world to us.
                Join us in celebrating not just a union of two people, but a bond of friendship, love, and shared dreams that will last a lifetime.
              </p>
            </div>

      {/* Right Column: Contact */}
      <div className="md:col-span-3 text-center md:text-right">
        <h3 className="text-2xl font-bold mb-4 text-rose-600">Warm Regards</h3>
        <p className="mb-2">
          Devendra Singh :
          <a href="tel:9939799729" className="mx-1 text-rose-400 hover:text-blue-700 transition-colors cursor-pointer">
            9939799729
          </a>
        </p>
        <p className="mb-2">
          Rohit Singh :
          <a href="tel:9650377118" className="mx-1 text-rose-400 hover:text-blue-700 transition-colors cursor-pointer">
            9650377118
          </a>
        </p>
        <p className="mb-2">
          Village: Chhota Badheya<br />
          Post: Barauli – 81405<br />
          District: Gopalganj
        </p>
      </div>
    </div>

          {/* Footer Bottom */}
          <div className="mt-12 text-center">
            <p className="text-gray-400">&copy; 2025 Abhijit Kumar Singh. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.instagram.com/abhijit__rajput_?igsh=anBpNmY1MTNxYnpq"
                className="cursor-pointer"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-2xl transition-transform duration-200 hover:scale-110"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abhijit-kumar-b73512332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="cursor-pointer"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-blue-400 text-2xl transition-transform duration-200 hover:scale-110"></i>
              </a>
              <a
                href="https://github.com/abhijitrajput103"
                className="cursor-pointer"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-gray-800 text-2xl transition-transform duration-200 hover:scale-110"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>


    </>
  );
}
