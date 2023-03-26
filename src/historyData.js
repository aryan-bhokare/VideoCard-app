const fs = require('fs');

// Read the existing data from the JSON file
const data = fs.readFileSync('historyData.json');
const historyData = JSON.parse(data);

// Add a new history item to the array
const newHistoryItem = {
  cardName: 'My Card',
  videoDetails: {
    title: 'My Video',
    url: 'https://www.youtube.com/watch?v=123'
  },
  timePlayed: new Date()
};

historyData.history.push(newHistoryItem);

// Write the updated data back to the JSON file
fs.writeFileSync('historyData.json', JSON.stringify(historyData));
