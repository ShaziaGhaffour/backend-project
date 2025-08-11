import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fffbf2] text-gray-800 py-10 px-6 border-b border-gray-300">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <img src="/logo.png.svg" alt="Logo" className="mb-4 w-32" />
          <p className="text-sm leading-relaxed">
            Jama is an established CCTV equipment distributor in Qatar with shipping locations nationwide. We test every product we sell to make sure it is worthy of our name.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-rss"></i></a>
          </div>
        </div>

        {/* My Account Links */}
        <div>
          <h3 className="font-semibold mb-4">MY ACCOUNT</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">My Account</a></li>
            <li><a href="#">User Document</a></li>
            <li><a href="#">Wish List</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Packages & Offers</a></li>
            <li><a href="#">Camera Solution</a></li>
            <li><a href="#">New Villa</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-lg">📍</span>
              <div>
                Al Juthay St, Doha <br />
                Located in Lozan Fashion
              </div>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> +974 1234 5678
            </li>
            <li className="flex items-center gap-2">
              <span>📧</span> info@jama.qa
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
