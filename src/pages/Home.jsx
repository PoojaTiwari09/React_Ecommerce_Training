import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import { Search, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productsData = [
  { id: 1, title: "Precision Sneakers", price: 8999, category: "Fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Zenith Phone Pro", price: 74999, category: "Electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Nebula Ultrabook", price: 92999, category: "Electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Luxe Leather Bag", price: 12500, category: "Fashion", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Sonic Over-Ear", price: 28000, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Tailored Slim Suit", price: 18999, category: "Fashion", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800" },
  { id: 9, title: "Essential White Tee", price: 1200, category: "Fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800" },
  { id: 10, title: "Velvet Evening Dress", price: 6500, category: "Fashion", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" },
  { id: 11, title: "Studio Headphones", price: 42000, category: "Electronics", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800" },
  { id: 12, title: "Minimalist Desk Lamp", price: 3200, category: "Accessories", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800" },
  { id: 13, title: "Nordic Armchair", price: 24500, category: "Accessories", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800" },
  { id: 14, title: "Jewellery", price: 3800, category: "Fashion", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=800" }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(150000);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6; // To show more products initially

  const filtered = productsData.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? p.category === category : true) &&
    p.price <= price
  );

  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="home-page"
    >
      <section className="container products-wrapper" style={{ paddingTop: '2rem' }}>
        <div className="search-filter-bar">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input
              className="search-input"
              placeholder="Search premium products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <Filters setCategory={setCategory} setPrice={setPrice} />
        </div>

        <motion.div layout className="products-grid">
          <AnimatePresence mode="popLayout">
            {paginated.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length > itemsPerPage && (
          <Pagination
            total={filtered.length}
            perPage={itemsPerPage}
            currentPage={page}
            setPage={setPage}
          />
        )}
      </section>
    </motion.div>
  );
}