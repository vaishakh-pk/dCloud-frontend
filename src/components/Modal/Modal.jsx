"use client";
import React, {FunctionComponent, useEffect, useRef} from "react";


const Modal = ({open = false, children, onClose}) => {

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    },);


    return (
        <>
            <style jsx>{`
              .modalContainer {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                display: ${open ? 'flex' : 'none'};
                justify-content: center;
                align-items: center;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 50;
              }

              .modalContent {
                background-color: #f7f7f7;
                border: 1px solid #e1e1e1;
              }
            `}</style>

            <div className={`${open ? 'block' : 'hidden'}`}>
                <div className="modalContainer">
                    <div ref={modalRef} className="modalContent">
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Modal;
