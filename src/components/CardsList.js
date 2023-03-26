import React, { useState } from "react";
import Card from './Card'

function CardsList() {
    const [cards, setCards] = useState([]);
  
    function handleAddCard() {
      const newCard = { id: Date.now(), title: "", content: "" };
      setCards([...cards, newCard]);
    }
  
    function handleDeleteCard(id) {
      const newCards = cards.filter((card) => card.id !== id);
      setCards(newCards);
    }
  
    function handleEditCard(id, newTitle, newContent,newVideoUrl) {
      const newCards = cards.map((card) => {
        if (card.id === id) {
          return { ...card, title: newTitle, content: newContent, videoUrl: newVideoUrl };
        } else {
          return card;
        }
      });
      setCards(newCards);
    }
  
    return (
      <div>
        <div className="mb-4">
          <button className="bg-green-500 text-white px-4 py-1 rounded-md" onClick={handleAddCard}>
            Add Card
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              videoUrl={card.videoUrl}
              onDelete={() => handleDeleteCard(card.id)}
              onEdit={(newTitle, newContent, newVideoUrl) => handleEditCard(card.id, newTitle, newContent, newVideoUrl)}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default function App() {
    return (
        <div className="container mx-auto p-4">
        <CardsList />
        </div>
    
    );
  }
  