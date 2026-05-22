import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DailySpecial from "./components/DailySpecial";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="app-root" className="min-h-screen bg-bg-custom text-text-dark font-sans selection:bg-green-pale selection:text-green-deep">
      {/* Upper Navigation bar stickiness */}
      <Header />

      {/* Main interactive layouts */}
      <main id="main-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
          <DailySpecial />
          <Menu />
          <Reviews />
          <Contact />
        </motion.div>
      </main>

      {/* Visual footer details */}
      <Footer />
    </div>
  );
}
