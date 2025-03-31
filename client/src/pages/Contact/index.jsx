import { useState } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/Footer";
import MiniMap from "../../components/MiniMap/MiniMap";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";



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
      <section className="backdrop-blur-lg bg-opacity-40 !mx-auto max-w-390 !rounded-lg">
      <section className="!max-w-320 !px-6 !py-25 text-white !mx-auto !my-15">
        
        <div className="!grid !grid-cols-1 !md:grid-cols-2 !gap-8">
          {/* Formulář */}
          <div className="backdrop-blur-lg bg-opacity-40 !p-8 rounded-lg shadow-lg border border-white ">
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
                <div className="!mb-4">
                  <label
                    htmlFor="fullName"
                    className="!block text-sm font-bold text-gray-400"
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
                    className="!w-full !px-4 !py-2 !mt-2 backdrop-blur-lg bg-opacity-40 text-white border !border-gray-500 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
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
                    className="!w-full !px-4 !py-2 !mt-2 backdrop-blur-lg bg-opacity-40 text-white border border-gray-500 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="!block !text-sm font-bold text-gray-400"
                  >
                    Předmět
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="!w-full !px-4 !py-2 !mt-2 backdrop-blur-lg bg-opacity-40 text-white border border-gray-500 rounded-md !focus:ring-2 focus:ring-indigo-500 !outline-none"
                  >
                    <option className="text-black" value="">Vyberte předmět</option>
                    <option className="text-black" value="Dotaz na produkt">Dotaz na produkt</option>
                    <option className="text-black" value="Reklamace">Reklamace</option>
                    <option className="text-black" value="Vrácení zboží">Vrácení zboží</option>
                    <option className="text-black" value="Obecný dotaz">Obecný dotaz</option>
                  </select>
                </div>

                <div className="!mb-4">
                  <label
                    htmlFor="message"
                    className="!block !text-sm font-bold text-gray-400"
                  >
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="!w-full !px-4 !py-2 !mt-2 backdrop-blur-lg bg-opacity-40 text-white border border-gray-500 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="!w-full !py-4 !px-4 !bg-indigo-500 text-white rounded-md !hover:bg-white focus:outline-none focus:ring-2 !focus:ring-white"
                >
                  Odeslat zprávu
                </button>
              </form>
            )}
          </div>

          {/* Kontakt. údaje */}
          <div className="backdrop-blur-lg bg-opacity-40 !p-8 rounded-lg !shadow-lg border border-gray-400 !py-10 !my-20">
            <h3 className="text-xl font-bold text-white !mb-6">
              Kontaktní údaje
            </h3>
            <div className="!mb-4">
              <p className="font-bold text-white">Telefon</p>
              <p className="text-gray-400">+420 735 847 770</p>
            </div>

            <div className="!mb-4">
              <p className="font-bold text-white">E-mail</p>
              <p className="text-gray-400">watchtime@seznam.cz</p>
            </div>

            <div className="!mb-4">
              <p className="font-bold text-white">
                Adresa pro vrácení zboží
              </p>
              <p className="text-gray-400">Pařížská, 110 00 Praha 1</p>
            </div>

            <div className="!mb-6">
              <p className="font-bold text-gray-300">Otevírací doba</p>
              <p className="text-gray-400">Pondělí - Pátek: 10:00 - 18:00</p>
              <p className="text-gray-400">Sobota - Neděle: Zavřeno</p>
            </div>

            <div>

              <p className="font-bold text-gray-300 !mb-17">
                Sledujte nás na sociálních sítích
              </p>

              <div className="!flex !space-x-20 !text-center">

                <a href="https://www.facebook.com/?locale=cs_CZ" className="text-indigo-400">
                <Facebook />
                </a>

                <a href="https://x.com/i/flow/login" className="text-indigo-400">
                <Twitter />
                </a>

                <a href="https://www.instagram.com/" className="text-indigo-400">
                <Instagram />
                </a>
            <div className="!mx-70 !-my-82"> 
                <MiniMap />
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      </section>
      
      <Footer />
    </>
  );
}