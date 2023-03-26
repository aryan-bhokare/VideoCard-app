import React, { useState } from "react";
import CardList from "./CardsList";
import { v4 as uuidv4 } from "uuid";

function Buckets() {
  const [bucketTitle, setBucketTitle] = useState("");
  const [buckets, setBuckets] = useState([]);

  const handleBucketTitleChange = (e) => {
    setBucketTitle(e.target.value);
  };

  const handleAddBucket = (e) => {
    e.preventDefault();
    const newBucket = {
      id: uuidv4(),
      title: bucketTitle,
      cards: []
    };
    setBuckets([...buckets, newBucket]);
    setBucketTitle("");
  };

  const handleDeleteBucket = (bucketId) => {
    setBuckets(buckets.filter((bucket) => bucket.id !== bucketId));
  };

  return (
    <div>
      <form onSubmit={handleAddBucket}>
        <input
          type="text"
          placeholder="Enter bucket title"
          value={bucketTitle}
          onChange={handleBucketTitleChange}
        />
        <button className="p-1 m-2
         bg-blue-500 rounded-md text-white px-2" type="submit">Add Bucket</button>
      </form>
      {buckets.map((bucket) => (
        <div key={bucket.id}>
          <h2 className="font-bold py-2 text-2xl">{bucket.title}</h2>
          <button className="p-1 m-2
         bg-red-500 rounded-md text-white px-2" onClick={() => handleDeleteBucket(bucket.id)}>Delete Bucket</button>
          <CardList bucketId={bucket.id} cards={bucket.cards} />
        </div>
      ))}
    </div>
  );
}

export default Buckets;
