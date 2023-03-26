import React, { useEffect, useState } from 'react';
import historyData from '../historyData.json';

const History = () => {
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    setHistoryItems(historyData.history);
  }, []);

  return (
    <div>
      <h1>History</h1>
      {historyItems.length > 0 ? (
        <ul>
          {historyItems.map((item, index) => (
            <li key={index}>
              <p>Card name: {item.cardName}</p>
              <p>
                Video details: {item.videoDetails.title} ({item.videoDetails.url})
              </p>
              <p>Time played: {new Date(item.timePlayed).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No history items to display</p>
      )}
    </div>
  );
};

export default History;
