import { Facebook, Twitter, Instagram } from "lucide-react";
import MiniMapFooter from "../MiniMapFooter/MiniMapFooter";

export default function Footer() {
  return (
    <>
    <footer className="!px-6 md:px-16 lg:px-28 !py-11 !w-full">
      <section className="container !mx-auto">
        <div className="flex justify-between gap-8 text-white">
          
          
          <div className="text-center md:text-left w-full">
            <h2 className="text-lg font-bold mb-4 text-center !py-5">WatchTime</h2>
            <div className="w-full flex !py-8 !ml-10">
          <MiniMapFooter />
      </div>
          </div>

          
          <div className="text-center w-full">
            <h2 className="text-lg font-bold !mb-12 !py-4">Useful links</h2>
            <ul className="!space-y-6">
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
            </ul>
          </div>

          
          <div className="w-full">
            <h2 className="text-lg font-bold !mb-20 text-center !py-4">Find us</h2>
            <ul className="flex !justify-around !space-y-3">
              <li>
                <a href="https://www.facebook.com" aria-label="Facebook">
                  <Facebook className="w-6 h-6 hover:text-gray-300" />
                </a>
              </li>
              <li>
                <a href="https://x.com" aria-label="Twitter">
                  <Twitter className="w-6 h-6 hover:text-gray-300" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" aria-label="Instagram">
                  <Instagram className="w-6 h-6 hover:text-gray-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      
      

      
      <div className="!pt-5 text-white text-center !mx-auto !mt-5 border-gray-500">
        <p>© 2025 WatchTime. All Rights Reserved.</p>
      </div>
      </section>
    </footer>
    </>
  );
};

