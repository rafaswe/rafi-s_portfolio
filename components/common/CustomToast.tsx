import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

const toastTypeColors = {
  success: "bg-[#f9cb42] text-secondary",
  error: "bg-red-500 text-white ",
  info: "bg-blue-500 text-white",
};
const toastHoverCrossColors = {
  success: "hover:text-red-500",
  error: "hover:text-secondary",
  info: "hover:text-secondary",
};

const CustomToast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    visible && (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
        className={`fixed top-5 right-5 w-80  p-4 rounded-lg shadow-lg transition-colors duration-300  z-50 flex items-center justify-between ${toastTypeColors[type]}`}>
        <p>{message}</p>
        <button
          onClick={onClose}
          className={`ml-4 p-1 ${toastHoverCrossColors[type]}`}>
          &#x2715;
        </button>
      </motion.div>
    )
  );
};

export default CustomToast;
