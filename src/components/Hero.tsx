import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-secondary pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-light">
              Hi, I'm <span className="text-primary">Dimas Adi Putra Arifin</span>
            </h1>
            <p className="text-lg text-light/80">
              A passionate web developer and UI/UX designer with expertise in creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-yellow-light transition-colors font-medium"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-secondary transition-colors font-medium"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <img
                src="/images/profile.jpg"
                alt="Dimas Adi Putra Arifin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-navy p-4 rounded-lg shadow-lg border border-primary">
              <p className="text-sm text-primary font-medium">Web Developer & UI/UX Designer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 