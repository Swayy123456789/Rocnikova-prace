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
      <section className="!mx-auto max-w-390 !rounded-lg">
        <section className="!max-w-320 !px-6 !py-25 text-white !mx-auto !my-15">
          <div className="!grid !grid-cols-1 !md:grid-cols-2 !gap-8">
            
            {/* formular */}
            <div className="!p-8 rounded-lg shadow-lg border border-white">
              <h3 className="text-xl font-bold text-white !mb-6 !py-4 text-center">
                Have a question? Do not hesitate to contact us!
              </h3>

              {isSubmitted ? (
                <div className="text-center text-green-400">
                  <h4 className="text-lg">
                    Thank you for your message! We will get back to you as soon as possible.
                  </h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="!w-full">
                  <div className="!mb-4">
                    <label
                      htmlFor="fullName"
                      className="!block text-sm font-bold text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="!w-full !px-4 !py-2 !mt-2 text-white border !border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="!w-full !px-4 !py-2 !mt-2 text-white border !border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="!block !text-sm font-bold text-white"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="!w-full !px-4 !py-2 !mt-2 text-white border border-gray-400 rounded-md !focus:ring-2 focus:ring-indigo-500 !outline-none"
                    >
                      <option className="text-black" value="">Select a subject</option>
                      <option className="text-black" value="Product Inquiry">Product Inquiry</option>
                      <option className="text-black" value="Complaint">Complaint</option>
                      <option className="text-black" value="Return">Return</option>
                      <option className="text-black" value="General Question">General Question</option>
                    </select>
                  </div>

                  <div className="!mb-4">
                    <label
                      htmlFor="message"
                      className="!block !text-sm font-bold text-white "
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="!w-full !px-4 !py-2 !mt-2 text-white border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="!w-full !py-4 !px-4 !bg-blue-500 !file:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 !focus:ring-white"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* veskere informace o kontaktovani */}
            <div className="!p-8 rounded-lg !shadow-lg border border-gray-400 !py-10 !my-20">
              <h3 className="text-center text-xl font-bold text-white !mb-6">
                Contact Information
              </h3>
              <div className="!mb-4">
                <p className="font-bold text-white">Phone</p>
                <p className="text-white">+420 735 847 770</p>
              </div>

              <div className="!mb-4">
                <p className="font-bold text-white">Email</p>
                <p className="text-white">watchtime@seznam.cz</p>
              </div>

              <div className="!mb-4">
                <p className="font-bold text-white">Return Address</p>
                <p className="text-white">Pařížská, 110 00 Prague 1</p>
              </div>

              <div className="!mb-6">
                <p className="font-bold text-white">Opening Hours</p>
                <p className="text-white">Monday - Friday: 10:00 AM - 6:00 PM</p>
                <p className="text-white">Saturday - Sunday: Closed</p>
              </div>

              <div>
                <p className="font-bold text-white !mb-17">
                  Follow us on social media
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
