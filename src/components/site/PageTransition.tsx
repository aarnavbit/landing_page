import { motion } from "motion/react";
import { ReactNode } from "react";

export function PageTransition({ children, keyId }: { children: ReactNode; keyId: string }) {
  return (
    <motion.div
      key={keyId}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
