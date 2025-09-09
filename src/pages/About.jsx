import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiScissors, FiAward, FiUsers, FiHeart, FiTarget, FiTrendingUp, FiStar, FiClock } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiScissors,
      title: 'Craftsmanship',
      description: 'Every cut is a work of art, executed with precision and passion for perfection.'
    },
    {
      icon: FiHeart,
      title: 'Customer Care',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver exactly what you want.'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'Staying ahead of trends while respecting classic techniques that never go out of style.'
    },
    {
      icon: FiStar,
      title: 'Excellence',
      description: 'We strive for excellence in every service, ensuring each client leaves feeling confident.'
    }
  ];

  const achievements = [
    {
      icon: FiAward,
      title: '500+ Happy Clients',
      description: 'Trusted by hundreds of satisfied customers'
    },
    {
      icon: FiClock,
      title: '5 Years Experience',
      description: 'Half a decade of professional service'
    },
    {
      icon: FiUsers,
      title: '100% Satisfaction',
      description: 'Committed to exceeding expectations'
    },
    {
      icon: FiTarget,
      title: 'Premium Location',
      description: 'Conveniently located near Saint Lazare'
    }
  ];

  const team = [
    {
      name: 'Master Guvera',
      role: 'Head Barber & Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'With over 5 years of experience, Guvera combines traditional barbering techniques with modern styling.'
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6"
          >
            About Guvera
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Where tradition meets innovation. We're not just a barber shop - we're craftsmen dedicated to the art of men's grooming, creating experiences that go beyond just a haircut.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20"
        >
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white"
            >
              Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              Founded with a passion for exceptional men's grooming, Guvera Barber Shop has been serving the Paris community with premium haircuts and styling services. Located conveniently near Saint Lazare Station, we've built our reputation on quality, consistency, and genuine care for our clients.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              Our journey began with a simple belief: every man deserves to look and feel his best. We combine time-honored barbering traditions with contemporary techniques, ensuring each client receives a personalized experience that exceeds expectations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              Today, we're proud to be a trusted destination for discerning gentlemen who appreciate quality craftsmanship, attention to detail, and an atmosphere where they can relax and be themselves.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Guvera Barber Shop Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl"
            >
              <SafeIcon icon={FiScissors} className="text-black text-3xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-8 text-center group hover:border-yellow-400 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-yellow-400/50"
                >
                  <SafeIcon icon={value.icon} className="text-black text-2xl" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-12 mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-black mb-12">Our Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center text-black"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <SafeIcon icon={achievement.icon} className="text-yellow-400 text-2xl" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-black/80">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-16">Meet Our Team</h2>
          
          <div className="max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-8 text-center hover:border-yellow-400 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-yellow-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Experience the Guvera Difference
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Join our community of satisfied clients and discover why we're Paris's trusted choice for premium men's grooming.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Your First Visit
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;