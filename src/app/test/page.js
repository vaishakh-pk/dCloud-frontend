"use client"
import React, { useState } from "react";
import "./test.css";
import Modal from "../../components/Preview/preview";

function Test() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="Test">
            <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                Open
            </button>

            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    );
}

export default Test;