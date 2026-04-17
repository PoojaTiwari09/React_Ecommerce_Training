import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Pagination({ total, perPage, currentPage, setPage }) {
  const pages = Math.ceil(total / perPage);

  if (pages <= 1) return null;

  return (
    <div className="pagination">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="page-btn glass"
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        <ChevronLeft size={20} />
      </motion.button>

      {[...Array(pages)].map((_, i) => (
        <motion.button
          key={i}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setPage(i + 1)}
          className={`page-btn ${currentPage === i + 1 ? 'active' : 'glass'}`}
        >
          {i + 1}
        </motion.button>
      ))}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="page-btn glass"
        disabled={currentPage === pages}
        onClick={() => setPage(currentPage + 1)}
        style={{ opacity: currentPage === pages ? 0.5 : 1 }}
      >
        <ChevronRight size={20} />
      </motion.button>
    </div>
  );
}
