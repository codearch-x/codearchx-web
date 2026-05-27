import { motion } from "motion/react";
import { GoChevronDown } from "react-icons/go";

const DownArrows = () => {
  return (
    <div
      aria-hidden="true"
      className="position-absolute bottom-0 start-50 translate-middle-x mb-5 d-flex flex-column align-items-center text-secondary-emphasis"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        className="d-flex flex-column align-items-center lh-1"
        transition={{ duration: 0.85, ease: "easeOut", repeat: Infinity, repeatDelay: 0.15 }}
      >
        <span className="d-flex">
          <GoChevronDown size={40} />
        </span>
        <span className="d-flex opacity-75" style={{ marginTop: "-1.6rem" }}>
          <GoChevronDown size={35} />
        </span>
        <span className="d-flex opacity-50" style={{ marginTop: "-1.4rem" }}>
          <GoChevronDown size={30} />
        </span>
      </motion.div>
    </div>
  );
};

export default DownArrows;
