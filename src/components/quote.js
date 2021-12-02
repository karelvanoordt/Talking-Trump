import React, { useState, useEffect } from 'react';
import './quote.css';

export default function Quote() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random');

    const items = await data.json();
    setItems(items);

    return items;
  };

  const quoteText = items.message;

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="quote-container">
      <h3 className="quote-text">{ quoteText }</h3>
    </div>
  );
}