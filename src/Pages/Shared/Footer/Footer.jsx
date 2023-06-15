import { FaFacebook,  FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <img className="w-12" src={logo} alt="Logo" />
          <h2 className="text-2xl font-bold ml-2">ExtraLearn</h2>
        </div>
        
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link to="https://twitter.com/" target="_blank">
                <FaTwitter className="text-gray-600 hover:text-primary" />
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/" target="_blank">
                <FaFacebook className="text-gray-600 hover:text-primary" />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/" target="_blank">
                <FaInstagram className="text-gray-600 hover:text-primary" />
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-6 text-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">About Us</h3>
            <p>Join us at ExtraLearn and embark on a path of continuous learning, personal enrichment, and endless possibilities. Together, lets unleash your potential and shape a brighter future.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Contact</h3>
            <p>Email: contact@us.com</p>
            <p>Phone: +1 123 456 7890</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Help</h3>
            <ul>
              <li>
                <Link to="/">Customer Support</Link>
              </li>
              <li>
                <Link to="/">Delivery Details</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p>Subscribe to our newsletter to receive updates and special offers.</p>
            <form className="mt-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 text-primary placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
              />
              <button className="mt-2 py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-light transition-all duration-200">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} ExtraLearn. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
