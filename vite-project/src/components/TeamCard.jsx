import { useState } from 'react';
import styles from './TeamCard.module.css';

export default function TeamCard({
    memberName = "John Doe",
    memberPosition = "V.P. of Janitorial Excellence",
    memberDescription = <p>I'm a third year in the General Janitorial program at Western University, and I'm excited to be a part of the team! My hobbies are cleaning, cleaning, and cleaning. I'm looking forward to working with all of you!</p>,
    memberImage = "https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0=",
}) {

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
        <div className="card w-96 shadow-xl relative">
            <div className="bg-blue-200 border-b-8 border-white rounded-tl-lg rounded-tr-lg shadow-md h-28 relative">
                <div className="absolute inset-x-0 -bottom-16 flex justify-center items-center">
                    <img
                        className="rounded-full border-4 border-white"
                        src={memberImage}
                        alt={memberName}
                        style={{ width: "120px", height: "120px" }}
                    />
                </div>
            </div>

            <div className="card-body text-center pt-16 bg-white rounded-bl-lg rounded-br-lg">
                <h2 className="card-title justify-center">{memberName}</h2>
                <p>{memberPosition}</p>
                <div className="card-actions justify-end mt-6 center">
                    <button onClick={handleMoreClick} className="btn btn-sm btn-outline btn-primary text-sm">More...</button>
                </div>
            </div>

            {isPopupOpen && (
                <Popup
                    memberName={memberName}
                    memberPosition={memberPosition}
                    memberDescription={memberDescription}
                    memberImage={memberImage}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
}

function Popup({ memberName, memberPosition, memberDescription, memberImage, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className={`bg-primary p-6 rounded-lg shadow-lg w-96 ${styles.popupContainer}`}>
                <div className="flex justify-center mb-4">
                    <img
                        className="rounded-full border-2 border-white"
                        src={memberImage}
                        alt={memberName}
                        style={{ width: "150px", height: "150px" }}
                    />
                </div>
                <h2 className="text-secondary text-xl font-bold">{memberName}</h2>
                <h3 className="text-accent text-m italic mb-4">{memberPosition}</h3>
                <div className="text-white text-center text-sm mb-4">{memberDescription}</div>
                <div className='text-center'>
                <button onClick={onClose} className="btn btn-sm btn-outline btn-secondary text-center">Close</button>

                </div>
            </div>
        </div>
    );
}


