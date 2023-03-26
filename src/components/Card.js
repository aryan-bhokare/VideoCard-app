import React, { useState } from 'react';

function Card(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);
  const [newContent, setNewContent] = useState(props.content);
  const [newVideoUrl, setNewVideoUrl] = useState(props.videoUrl);
  
  const videoId = props.videoUrl ? props.videoUrl.split('v=')[1] : null;

  const handleDelete = () => {
    props.onDelete();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.onEdit(newTitle, newContent, newVideoUrl);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(props.title);
    setNewContent(props.content);
    setNewVideoUrl(props.videoUrl);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter title"
            className="block w-full mb-2"
          />
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="Enter content"
            className="block w-full mb-2"
          />
          <input
            type="text"
            value={newVideoUrl}
            onChange={(e) => setNewVideoUrl(e.target.value)}
            placeholder="Enter YouTube video URL"
            className="block w-full mb-2"
          />
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
            Save
          </button>
          <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </>
      ) : (
        <>
          <h2 className="text-lg font-bold mb-2">{props.title}</h2>
          <div className="mb-2">
            {videoId !== null && (
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <p className="mb-2">{props.content}</p>
          <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Edit
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default Card;
