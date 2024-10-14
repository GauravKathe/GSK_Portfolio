import React from "react";

const Modal = ({ isOpen, onClose, technology }) => {
  if (!isOpen || !technology) return null; // Ensure technology is defined

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-neutral-800 rounded-lg p-6 w-11/12 max-w-md">
        <h2 className="text-xl font-semibold text-teal-600">{technology.name}</h2>
        <p className="text-neutral-300 mt-2">{technology.info}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
