import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';
import GradeIcon from '@mui/icons-material/Grade';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import {baseUrl} from "@/app/api/api";
import {toast} from "react-hot-toast";
import {useRouter} from 'next/navigation';
import Modal from "@/components/Modal/Modal";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function AccountMenu({
                                        cid,
                                        id,
                                        isFavorite,
                                        downloadMenu,
                                        shareMenu,
                                        favoriteMenu,
                                        deleteMenu,
                                        removeShareMenu
                                    }) {

    const router = useRouter()

    const [favorite, setFavorite] = React.useState(isFavorite);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [shareEmail, setShareEmail] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onDownloadClick = () => {
        const url = `${baseUrl}api/file/download/${cid}/`;
        window.open(url, '_blank');
    }

    const onFavotireClick = () => {
        fetch(`${baseUrl}api/file/addtofavorite/${id}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    setFavorite(!favorite)
                    if(window.location.pathname === "/favourites")
                        window.location.reload()
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error(err)
            })
    }

    const onDeleteClick = () => {
        fetch(`${baseUrl}api/file/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    window.location.reload()
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error(err)
            })
    }

    const onShareClick = () => {
        setOpenModal(true)
    }

    const confirmShare = () => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!emailRegex.test(shareEmail)) {
            toast.error("Invalid email")
            return;
        } else {
            console.log(shareEmail)
            fetch(`${baseUrl}api/file/share/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({shareEmail: shareEmail})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.success) {
                        toast.success(`File shared with ${shareEmail}`)
                        setShareEmail("")
                        setOpenModal(false)
                    } else {
                        toast.error(data.message)
                    }
                })
                .catch((err) => {
                    console.error(err);
                    toast.error(err)
                })
        }
    }

    const onRemoveShareClick = () => {
        fetch(`${baseUrl}api/file/shared/remove/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success("Removed from favorites")
                    window.location.reload()
                } else {
                    toast.error(data.message)
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error(err)
            })
    }

    return (
        <React.Fragment>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box
                    sx={{
                        width: 600,
                        maxWidth: '100%',
                        padding: 1
                    }}
                >
                    <TextField value={shareEmail}
                               type={"email"}
                               onChange={(e) => setShareEmail(e.target.value)}
                               fullWidth label="Enter the email"
                               id="fullWidth"/>
                    <Button onClick={confirmShare}>Share</Button>

                </Box>
            </Modal>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="More options">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <MoreVertIcon/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                {downloadMenu && <MenuItem onClick={onDownloadClick}>
                    <ListItemIcon>
                        <DownloadIcon/>
                    </ListItemIcon>
                    Download
                </MenuItem>}
                {favoriteMenu && <MenuItem onClick={onFavotireClick}>
                    <ListItemIcon>
                        <GradeIcon/>
                    </ListItemIcon>
                    {favorite ? 'Remove from Favorite' : 'Add to Favorite'}
                </MenuItem>}
                {shareMenu && <MenuItem onClick={onShareClick}>
                    <ListItemIcon>
                        <ShareIcon/>
                    </ListItemIcon>
                    Share
                </MenuItem>}
                {deleteMenu && <MenuItem onClick={onDeleteClick}>
                    <ListItemIcon>
                        <DeleteIcon/>
                    </ListItemIcon>
                    Delete
                </MenuItem>}
                {removeShareMenu && <MenuItem onClick={onRemoveShareClick}>
                    <ListItemIcon>
                        <ShareIcon/>
                    </ListItemIcon>
                    Remove from Share
                </MenuItem>}
            </Menu>
        </React.Fragment>
    );
}
