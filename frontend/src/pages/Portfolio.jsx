import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [indices, setIndices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIndices = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/indices'); // Change URL if backend runs elsewhere
        setIndices(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch market data');
        setLoading(false);
      }
    };

    fetchIndices();
  }, []);

  if (loading) return <p>Loading market data...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Portfolio Page</h1>
      {indices.map(({ symbol, name, price, changePercent }) => (
        <div
          key={symbol}
          className="border rounded p-4 mb-4 shadow-md"
          style={{ backgroundColor: changePercent >= 0 ? '#d1fae5' : '#fee2e2' }} // green/red bg
        >
          <h2 className="text-xl font-semibold mb-2">
            {name} ({symbol})
          </h2>
          <p className="text-lg">
            Price: <span className="font-mono">₹{price !== null ? price.toFixed(2) : 'N/A'}</span>
          </p>
          <p className="text-lg">
            Change:{' '}
            <span style={{ color: changePercent >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>
              {changePercent !== null ? changePercent.toFixed(2) : 'N/A'}%
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
