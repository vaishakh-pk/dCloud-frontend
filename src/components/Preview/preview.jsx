import React from "react";
import "./preview.css";

function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="preview">
                    <div className="closeBtnContainer">
                        <button
                            className="closeBtn"
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    <img src="test.jpg" alt="Profile Photo" />
                </div>
                <div className="imgDetails">
                    <div className="imgInfo">
                        <p>IMG_1000</p>
                        <p className="date">June 16, 2023</p>
                    </div>
                        <div className="options">
                            <img src="mycloud/share.png" alt="share" />
                            <img src="mycloud/delete.png" alt="delete" />
                            <img src="mycloud/options.png" alt="options" />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
