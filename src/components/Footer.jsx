import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiScissors, FiInstagram, FiFacebook, FiTwitter } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <SafeIcon icon={FiScissors} className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Guvera</h3>
                <p className="text-sm font-medium text-black/80">Barber Shop</p>
              </div>
            </div>
            <p className="text-black/80 leading-relaxed">
              Premium men's barber shop offering professional haircuts, styling, and grooming services. 
              Experience luxury and precision with every visit.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xl font-bold text-black">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Reviews', 'Gallery', 'Contact Us', 'About Us'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    whileHover={{ x: 5 }}
                    className="text-black/80 hover:text-black transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{link}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xl font-bold text-black">Contact Info</h4>
            <div className="space-y-3">
              <motion.a
                href="tel:+33622010219"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 text-black/80 hover:text-black transition-all duration-300"
              >
                <SafeIcon icon={FiPhone} className="text-black" />
                <span>+33 6 22 01 02 19</span>
              </motion.a>
              <div className="flex items-center space-x-3 text-black/80">
                <SafeIcon icon={FiMapPin} className="text-black" />
                <span>Near Saint Lazare Station, Paris</span>
              </div>
              <div className="flex items-center space-x-3 text-black/80">
                <SafeIcon icon={FiMail} className="text-black" />
                <span>info@guverabarber.com</span>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xl font-bold text-black">Business Hours</h4>
            <div className="space-y-2 text-black/80">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 - 16:00</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-yellow-400 hover:bg-black/80 transition-all duration-300"
                >
                  <SafeIcon icon={Icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-black/20 mt-12 pt-8 text-center space-y-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-black/80">
              © {currentYear} Guvera Barber Shop. All rights reserved.
            </p>
            <motion.p 
              whileHover={{ scale: 1.05 }}
              className="text-black/80"
            >
              Domain + Hosting + Design = 
              <motion.a
                href="https://www.account4web.ca"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "#000" }}
                className="font-semibold ml-1 transition-colors duration-300"
              >
                Account4Web Inc
              </motion.a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;