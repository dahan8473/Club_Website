import { useState } from "react";
import styles from "./TeamCard.module.css";
import { style } from "@mui/system";

export default function TeamCard({ member }) {
  // State to manage the user information popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Event handlers for the "More..." button to open and close the popup
  const handleMoreClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="card w-80 shadow-xl relative">
      <div
        className="bg-blue-200 border-b-8 border-white rounded-tl-lg rounded-tr-lg shadow-md h-28 relative"
        style={{ backgroundColor: member.bgColor }}
      >
        <div className="absolute inset-x-0 -bottom-16 flex justify-center items-center">
          <img
            className="rounded-full border-4 border-white"
            src={member.image}
            alt={member.name}
            style={{ width: "120px", height: "120px" }}
          />
        </div>
      </div>

      <div className="card-body text-center pt-16 bg-white rounded-bl-lg rounded-br-lg">
        <h2 className="card-title justify-center">{member.name}</h2>
        <p>{member.position}</p>
        <div className="card-actions justify-end mt-6 center">
          <button
            onClick={handleMoreClick}
            className="btn btn-sm btn-outline btn-primary text-sm"
          >
            More...
          </button>
        </div>
      </div>
      {isPopupOpen && <Popup member={member} onClose={handleClosePopup} />}
    </div>
  );
}

function Popup({ member, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div
        className={`bg-primary p-6 rounded-lg shadow-lg w-8/12 sm:w-96 ${styles.popupContainer} overflow-y-auto max-h-[80vh]`}
      >
        <div className="flex justify-center mb-4">
          <img
            className="rounded-full border-2 border-white"
            src={member.image}
            alt={member.name}
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <h2 className="text-secondary text-xl font-bold">{member.name}</h2>
        <h3 className="text-accent text-m italic mb-4">{member.position}</h3>
        <div className="text-white text-center text-sm mb-4">
          {member.description}
        </div>
        <div className="text-center">
          <button
            onClick={onClose}
            className="btn btn-sm btn-outline btn-secondary text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
