import { useState } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/Footer";
import MiniMap from "../../components/MiniMap/MiniMap";



export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <section className="max-w-6xl !px-6 !py-12 text-white !mx-auto">
        
        <div className="!grid !grid-cols-1 !md:grid-cols-2 !gap-8">
          {/* Formulář */}
          <div className="backdrop-blur-lg bg-opacity-40 p-8 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white !mb-6 !py-4 text-center">
              Máte dotaz? Napište nám!
            </h3>

            {isSubmitted ? (
              <div className="text-center text-green-400">
                <h4 className="text-lg">
                  Děkujeme za vaši zprávu! Ozveme se vám co nejdříve.
                </h4>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Jméno
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Předmět
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option value="">Vyberte předmět</option>
                    <option value="Dotaz na produkt">Dotaz na produkt</option>
                    <option value="Reklamace">Reklamace</option>
                    <option value="Vrácení zboží">Vrácení zboží</option>
                    <option value="Obecný dotaz">Obecný dotaz</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Odeslat zprávu
                </button>
              </form>
            )}
          </div>

          {/* Kontakt. údaje */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-medium text-gray-300 mb-6">
              Kontaktní údaje
            </h3>
            <div className="mb-4">
              <p className="font-bold text-gray-300">Telefon</p>
              <p className="text-gray-400">+420 735 847 770</p>
            </div>

            <div className="mb-4">
              <p className="font-bold text-gray-300">E-mail</p>
              <p className="text-gray-400">watchtime@seznam.cz</p>
            </div>

            <div className="mb-4">
              <p className="font-bold text-gray-300">
                Adresa pro vrácení zboží
              </p>
              <p className="text-gray-400">Pařížská, 110 00 Praha 1</p>
            </div>

            <div className="!mb-4">
              <p className="font-bold text-gray-300">Otevírací doba</p>
              <p className="text-gray-400">Pondělí - Pátek: 10:00 - 18:00</p>
              <p className="text-gray-400">Sobota - Neděle: Zavřeno</p>
            </div>

            <div>
              <p className="font-bold text-gray-300 !mb-20">
                Sledujte nás na sociálních sítích
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-indigo-400 hover:text-indigo-500">
                  Facebook
                </a>
                <a href="#" className="text-indigo-400 hover:text-indigo-500">
                  Instagram
                </a>
                <a href="#" className="text-indigo-400 hover:text-indigo-500">
                  TikTok
                </a>
                <a href="#" className="text-indigo-400 hover:text-indigo-500">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MiniMap />
      <Footer />
    </>
  );
}