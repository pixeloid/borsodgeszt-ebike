import React from 'react';
import { Bike, Calendar, MapPin, Phone, Clock, Shield, Mountain, Users } from 'lucide-react';
import BookingForm from './components/BookingForm';
import BikeCard from './components/BikeCard';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1622089891131-9b754791ec55?auto=format&fit=crop&q=80"
            alt="Bükk hegység"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Fedezd fel a Bükköt e-biciklivel!</h1>
            <p className="text-xl mb-8">Borsodgeszti e-bike kölcsönző és túraszervezés</p>
            <a href="#booking" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Foglalj Most
            </a>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
              <Shield className="w-10 h-10 text-green-600" />
              <div>
                <h3 className="font-semibold text-lg">Biztonságos</h3>
                <p className="text-gray-600">Minőségi felszerelés és védőeszközök</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
              <Mountain className="w-10 h-10 text-green-600" />
              <div>
                <h3 className="font-semibold text-lg">Vezetett túrák</h3>
                <p className="text-gray-600">Helyi túravezetőkkel</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
              <Users className="w-10 h-10 text-green-600" />
              <div>
                <h3 className="font-semibold text-lg">Kezdőknek is</h3>
                <p className="text-gray-600">Alapos betanítás</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bikes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Választható e-bike modellek</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BikeCard
              name="Trek Rail 9.8 XT"
              image="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80"
              price={15000}
              features={["250W Bosch motor", "625Wh akkumulátor", "150mm teleszkóp"]}
            />
            <BikeCard
              name="Specialized Turbo Levo"
              image="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80"
              price={12000}
              features={["250W Brose motor", "500Wh akkumulátor", "140mm teleszkóp"]}
            />
            <BikeCard
              name="Giant Stance E+"
              image="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80"
              price={10000}
              features={["250W SyncDrive motor", "500Wh akkumulátor", "130mm teleszkóp"]}
            />
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Foglalás</h2>
          <BookingForm />
        </div>
      </section>

      {/* Contact */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Kapcsolat</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <span>3426 Borsodgeszt, Fő út 42.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span>+36 30 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span>H-V: 8:00 - 18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Nyitvatartás</h3>
              <p className="mb-4">Egész évben várjuk a természet szerelmeseit!</p>
              <p>Előzetes bejelentkezés szükséges.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;