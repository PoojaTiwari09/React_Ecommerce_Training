import { Filter, SlidersHorizontal } from "lucide-react";

export default function Filters({ setCategory, setPrice }) {
  const categories = ["Fashion", "Electronics", "Accessories"];

  return (
    <div className="filters-container" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div className="select-wrapper glass" style={{ position: 'relative', borderRadius: '12px', padding: '0 0.75rem' }}>
        <Filter size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <select 
          onChange={e => setCategory(e.target.value)}
          className="glass-select"
          style={{ 
            background: 'none', 
            border: 'none', 
            padding: '0.75rem 2rem 0.75rem 2.25rem', 
            color: 'var(--text)', 
            outline: 'none',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat} style={{ background: 'var(--card-bg)' }}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="price-filter glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 1.25rem', borderRadius: '12px' }}>
        <SlidersHorizontal size={16} color="var(--text-muted)" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 'bold' }}>Max Price</span>
          <input
            type="range"
            min="0"
            max="150000"
            defaultValue="150000"
            onChange={e => setPrice(e.target.value)}
            style={{ accentColor: 'var(--primary)', width: '100px' }}
          />
        </div>
      </div>
    </div>
  );
}
