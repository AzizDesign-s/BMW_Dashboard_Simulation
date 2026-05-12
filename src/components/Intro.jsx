// src/components/Intro.jsx
import { motion, AnimatePresence } from "framer-motion";
import MBadge from "../assets/Mbadge.png";
import logo from "../assets/logo.svg";

const Intro = ({ onComplete }) => {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-50"
      style={{ background: "#020814" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }} // 👈 fade out when done
    >
      {/* Background radial glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(77,157,224,0.08) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0, 1, 0.5] }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Animated ring 1 */}
      <motion.div
        className="absolute rounded-full border border-[rgba(77,157,224,0.15)]"
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{ width: 280, height: 280, opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        style={{ borderRadius: "50%" }}
      />

      {/* Animated ring 2 */}
      <motion.div
        className="absolute rounded-full border border-[rgba(77,157,224,0.1)]"
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{ width: 340, height: 340, opacity: [0, 0.3, 0] }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        style={{ borderRadius: "50%" }}
      />

      {/* Animated ring 3 */}
      <motion.div
        className="absolute rounded-full border border-[rgba(77,157,224,0.05)]"
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{ width: 400, height: 400, opacity: [0, 0.2, 0] }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.7 }}
        style={{ borderRadius: "50%" }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-8 z-10">
        {/* BMW M Badge */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Glow behind logo */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 120,
              height: 120,
              background:
                "radial-gradient(circle, rgba(77,157,224,0.3) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo */}
          <motion.img
            src={MBadge}
            alt="BMW M"
            className="w-24 h-auto object-contain relative z-10"
            animate={{
              filter: [
                "drop-shadow(0 0 0px rgba(77,157,224,0))",
                "drop-shadow(0 0 20px rgba(77,157,224,0.8))",
                "drop-shadow(0 0 10px rgba(77,157,224,0.4))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* BMW text */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Shine line */}
          <motion.div
            className="h-[1px] bg-gradient-to-r from-transparent via-[#4D9DE0] to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          />

          <motion.p
            className="font-pirulen text-xs tracking-[0.5em] text-[#4D9DE0] uppercase"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Dashboard
          </motion.p>

          {/* Shine line */}
          <motion.div
            className="h-[1px] bg-gradient-to-r from-transparent via-[#4D9DE0] to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          />
        </motion.div>

        {/* Designed by text with shimmer effect */}
        <motion.div
          className="relative overflow-hidden w-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <p className="font-pirulen text-[10px] tracking-[0.3em] text-[rgba(255,255,255,0.3)] uppercase">
            Designed by
          </p>

          {/* Abdul Aziz with shimmer */}
          <div className="relative overflow-hidden ">
            <motion.img
              className="object-cover w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              src={logo}
              alt="Abdul Aziz"
            />

            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                width: "60%",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "250%" }}
              transition={{
                duration: 1,
                delay: 2.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom progress bar */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div
          className="w-40 h-[2px] rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #4D9DE0, #7EC8E3)",
            }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            onAnimationComplete={onComplete} // 👈 triggers when bar reaches 100%
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
