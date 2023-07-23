import React from "react";
import "./preview.css";
import Menu from "@/components/Menu/Menu";

function Modal({ setOpenModal, file }) {
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
                    <img src={file.url} alt="Preview" />
                </div>
                <div className="imgDetails">
                    <div className="imgInfo">
                        <p>{file.name}</p>
                        {/*<p className="date">June 16, 2023</p>*/}
                        <p className="date">{file.createdAt}</p>
                    </div>
                        <div className="options">
                            <Menu cid={file.cid}
                                  id={file._id}
                                  isFavorite={file.isFavorite}
                                  downloadMenu={true}
                                  shareMenu={true}
                                  deleteMenu={true}
                                  favoriteMenu={true}
                            />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
