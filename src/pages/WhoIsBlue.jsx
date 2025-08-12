/** @format */
import "./styles/whoisblue.css";
import { motion } from "framer-motion";

function WhoIsBlue() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-3xl mx-auto py-20 px-6 text-gray-300 dark:text-gray-100">
      <div className="page-container">
        <h2 className="text-4xl font-bold mb-6 text-teal-400 text-center">
          Who is Blue?
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Blue is not just a name—it’s a rhythm. A vibe. A quiet hum beneath the
          surface of syntax.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Blue is more than a color—it’s a mindset. Calm, curious, and quietly
          confident. This page is a tribute to the people and moments that
          shaped my journey.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          From manufacturing floors to cloud development, every pivot taught me
          resilience. Every challenge deepened my empathy. Blue is the thread
          that ties it all together.
        </p>

        <p className="text-lg leading-relaxed mt-6">
          So, who is Blue? Blue is me—Darien. A systems thinker with a soul for
          storytelling, navigating the world one line of code at a time.
        </p>
      </div>
    </motion.section>
  );
}

export default WhoIsBlue;
