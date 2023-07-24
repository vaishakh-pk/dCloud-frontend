import React from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import "./preview.css";
import Menu from "@/components/Menu/Menu";
import Tooltip from "@mui/material/Tooltip";

function Modal({setOpenModal, file}) {

    function formatDate(dateString) {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

    file.createdAt = formatDate(file.createdAt);

    const openInNewTab = () => {
        window.open(file.url, '_blank');
    }

    return (
        <div className="modalBackground">

            <div className="modalContainer">
                <div className="closeBtnContainer">
                    <Tooltip title="Close">
                        <CloseIcon
                            onClick={() => setOpenModal(false)}
                            style={{ cursor: 'pointer', marginRight: '10px'}}
                        />
                    </Tooltip>
                    <Tooltip title="Open in New Tab">
                        <OpenInNewIcon
                            onClick={openInNewTab}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
                        />
                    </Tooltip>
                </div>
                <div className="preview">

                    {file.type === "image" && <img src={file.url} alt="Preview"/>}
                    {file.type === "video" &&
                        <video style={{width: "100%", height: "100%"}} controls>
                            <source src={file.url} type="video/mp4"/>
                        </video>
                    }
                    {file.type === "audio" &&
                        <audio controls>
                            <source src={file.url}/>
                        </audio>
                    }
                    {file.type === "document" &&
                        // <div onClick={openDocuments}>click here to open documents</div>
                        <object data={file.url} type="application/pdf" width="100%" height="100%">
                        </object>
                    }


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
