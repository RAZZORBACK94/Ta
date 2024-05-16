import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer className=" bg-sky-100 mt-10">
        <div className=" mx-40  max-w-screen-xl space-y-8 px-20 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-sky-400">
                <p>
                  BUKU <span className=" text-orange-400">KU</span>
                </p>
              </div>

              <p className="mt-4 max-w-xs text-gray-500">Toko Buku Sejak 1992</p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <button href="/" rel="noreferrer" target="_blank" className="text-sky-700 transition hover:opacity-75">
                    <span className="sr-only">Facebook</span>
                    <FaFacebook />
                  </button>
                </li>

                <li>
                  <button href="/" rel="noreferrer" target="_blank" className="text-sky-700 transition hover:opacity-75">
                    <span className="sr-only">Instagram</span>
                    <FaInstagram />
                  </button>
                </li>

                <li>
                  <button href="/" rel="noreferrer" target="_blank" className="text-sky-700 transition hover:opacity-75">
                    <span className="sr-only">Twitter</span>
                    <FaXTwitter />
                  </button>
                </li>

                <li>
                  <button href="/" rel="noreferrer" target="_blank" className="text-sky-700 transition hover:opacity-75">
                    <span className="sr-only">Youtube</span>
                    <FaYoutube />
                  </button>
                </li>

                <li>
                  <button href="/" rel="noreferrer" target="_blank" className="text-sky-700 transition hover:opacity-75">
                    <span className="sr-only">Dribbble</span>
                    <FaDribbble />
                  </button>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-sky-300">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      1on1 Coaching{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Company Review{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Accounts Review{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      HR Consulting{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      SEO Optimisation{" "}
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-sky-300">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      About{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Meet the Team{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Accounts Review{" "}
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-sky-300">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Contact{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      FAQs{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Live Chat{" "}
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-sky-300">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Accessibility{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Returns Policy{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Refund Policy{" "}
                    </button>
                  </li>

                  <li>
                    <button href="#" className="text-gray-700 transition hover:opacity-75">
                      {" "}
                      Hiring Statistics{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-sky-400">&copy; 2024. BUKU KU. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
