import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <section className="py-10  sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 container">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <div className="flex items-center gap-4">
                <img className="w-32" src={logo} alt="Animal toy bunny" />
                <div className="space-y-2">
                  <h2 className="font-bold text-3xl">TSURUGI</h2>
                </div>
              </div>

              <p className="text-base leading-relaxed text-gray-600 mt-7">
                we invite you to stay connected with us and continue your
                martial arts journey beyond the website. Follow us on social
                media platforms to receive updates on upcoming events,
                promotions, and training tips. 
              </p>

              <ul className="flex items-center space-x-3 mt-9">
                <li>
                  <Link
                    target="_blank"
                    to="https://twitter.com/"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-secondary rounded-full w-7 h-7 hover:bg-primary focus:bg-primary"
                  >
                    <FaTwitter></FaTwitter>
                  </Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/nishad.islam.rip"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-secondary rounded-full w-7 h-7 hover:bg-primary focus:bg-primary"
                  >
                    <FaFacebook></FaFacebook>
                  </Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-secondary rounded-full w-7 h-7 hover:bg-primary focus:bg-primary"
                  >
                    <FaInstagram></FaInstagram>
                  </Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    to="https://github.com/nish4d"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-secondary rounded-full w-7 h-7 hover:bg-primary focus:bg-primary"
                  >
                    <FaGithub></FaGithub>
                  </Link>
                </li>
              </ul>
            </div>
            {/* help */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Help
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    to="/"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                    Customer Support{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                    Delivery Details{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Address
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <p>123 Playful Avenue</p>
                  <p>Toyland, Wonderland 56789</p>
                  <p>United States</p>
                </div>
              </div>
              <p className=" my-6 text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Extra Link
              </p>
              <div className=" space-y-2">
                <Link
                  to="/"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                >
                  Summer School Tour
                </Link>
                <Link
                  to="/"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                >
                  {" "}
                  Winter School Tour
                </Link>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-2 ">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Subscribe to newsletter
              </p>

              <form className="mt-6">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full p-2 text-primary placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                  />
                </div>

                <Link className="inline-flex items-center justify-center MBtn my-3">
                  Subscribe
                </Link>
              </form>
              <div className="mt-4">
                Gmail:{" "}
                <Link src="nishadise@gmail.com">nishadise@gmail.com</Link>
              </div>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-200" />

          <p className="text-sm text-center text-gray-600">
            © Copyright 2023, All Rights Reserved by TSURUGI
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
