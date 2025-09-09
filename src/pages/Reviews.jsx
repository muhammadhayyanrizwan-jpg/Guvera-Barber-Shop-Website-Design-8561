import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { reviews } from '../data/reviews';

const { FiStar, FiUser, FiChevronLeft, FiChevronRight } = FiIcons;

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 6;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

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

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        >
          <SafeIcon
            icon={FiStar}
            className={`text-lg ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
            }`}
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6"
          >
            Customer Reviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Hear what our valued customers have to say about their experience at Guvera Barber Shop
          </motion.p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 mb-16 text-center"
        >
          <div className="text-black">
            <h2 className="text-3xl font-bold mb-4">Overall Rating</h2>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-6xl font-bold">5.0</span>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-3xl text-black fill-current" />
                ))}
              </div>
            </div>
            <p className="text-lg font-medium">Based on {reviews.length} reviews</p>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode="wait">
            {currentReviews.map((review, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-yellow-400/50"
                    >
                      <SafeIcon icon={FiUser} className="text-black text-lg" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white text-lg leading-tight">
                        {review.author}
                      </h3>
                      <p className="text-gray-400 text-sm">{review.date}</p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                {/* Review Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-300 leading-relaxed italic"
                >
                  "{review.review}"
                </motion.p>

                {/* Bottom Border Animation */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center items-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentPage === 0
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:shadow-lg hover:shadow-yellow-400/50'
              }`}
            >
              <SafeIcon icon={FiChevronLeft} />
            </motion.button>

            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(index)}
                  className={`w-10 h-10 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentPage === totalPages - 1
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:shadow-lg hover:shadow-yellow-400/50'
              }`}
            >
              <SafeIcon icon={FiChevronRight} />
            </motion.button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Experience the premium service that has earned us these amazing reviews. 
            Book your appointment today!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Your Appointment
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;