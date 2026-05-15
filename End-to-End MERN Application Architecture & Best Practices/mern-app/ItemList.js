import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/items/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="item-list">
      <h2>Item List</h2>
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item._id}>
              <strong>{item.name}</strong>
              {item.description && <p>{item.description}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">No items yet. Add some items using Postman or Insomnia!</p>
      )}
    </div>
  );
}

export default ItemList;
