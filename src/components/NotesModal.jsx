import React, { useState } from 'react';

const NotesModal = ({ onSave, onClose, initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes);

  const handleSave = () => {
    onSave(notes);
    onClose();
  };

  return (
    <div className="notes-modal">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default NotesModal;