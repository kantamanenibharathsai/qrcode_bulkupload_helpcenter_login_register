import { Avatar, Box, Button, IconButton, Typography } from "@mui/material"
import navbarStyles from "./Navbar.Styles"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useEffect, useRef, useState } from "react";
import extendedLogo from "../assets/extendedLogo.png"
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { useNavigate } from "react-router-dom";



interface IState {
    isDrawerOpened: boolean
}

interface Props {
    setPathFunc: (pathName: string) => void
}

const Navbar = ({ setPathFunc }: Props) => {
    const navigate = useNavigate()
    const helpCenterHandler = () => {
        setPathFunc("help-center")
    }

    const bulkUploadHandler = () => {
        setPathFunc("bulk-upload")
    }

    const qrCodeHandler = () => {
        setPathFunc("qr-code")
    }


    const [isDrawerOpened, setIsDrawerOpened] = useState<IState["isDrawerOpened"]>(false)

    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                setIsDrawerOpened(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleDrawer = () => {
        setIsDrawerOpened(prevValue => !prevValue)
    }

    const logoutEventHandler = () => {
        navigate("/login")
    }

    return (
        <>
            <Box sx={navbarStyles.navbarContainer}>
                <Box sx={navbarStyles.navbarChildContainer}>
                    <IconButton disableFocusRipple disableRipple disableTouchRipple onClick={handleDrawer}>
                        <MenuOutlinedIcon sx={navbarStyles.menuIcon} />
                    </IconButton>

                    <Button disableFocusRipple disableElevation disableTouchRipple disableRipple sx={navbarStyles.logoutButton} variant="contained" onClick={logoutEventHandler}>Logout</Button>
                </Box>
            </Box>
            {isDrawerOpened && (
                <Box ref={drawerRef} sx={{ ...navbarStyles.leftContainer, width: isDrawerOpened ? { xs: "85%", sm: "55%", md: "40%" } : "0px" }} onClick={handleDrawer}>
                    <Box sx={navbarStyles.leftChildContainer}>
                        <Box component="img" alt="extended-logo" sx={navbarStyles.extendedLogo} src={extendedLogo} />
                        <Box sx={navbarStyles.profileContentContainer}>
                            <Avatar sx={navbarStyles.userProfileDrawerImage} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Typography sx={navbarStyles.userNameText}>Bharath Sai</Typography>
                            <Typography sx={navbarStyles.sellerText}>kantamanenibharath21@gmail.com</Typography>
                        </Box>
                        <Box component="ul" sx={navbarStyles.unorderedList}>
                            <Box component="li" sx={navbarStyles.listItem} onClick={helpCenterHandler}>
                                <Box sx={navbarStyles.iconTextContainer}>
                                    <QuestionMarkOutlinedIcon sx={navbarStyles.listItemIcon} />
                                    <Typography sx={navbarStyles.listItemText}>Help Center</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={navbarStyles.rightArrowIcon} />
                            </Box>
                            <Box component="li" sx={navbarStyles.listItem} onClick={bulkUploadHandler}>
                                <Box sx={navbarStyles.iconTextContainer}>
                                    <CloudUploadOutlinedIcon sx={navbarStyles.listItemIcon} />
                                    <Typography sx={navbarStyles.listItemText}>Bulk Upload</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={navbarStyles.rightArrowIcon} />
                            </Box>
                            <Box component="li" sx={navbarStyles.listItem} onClick={qrCodeHandler}>
                                <Box sx={navbarStyles.iconTextContainer}>
                                    <QrCode2OutlinedIcon sx={navbarStyles.listItemIcon} />
                                    <Typography sx={navbarStyles.listItemText}>QR Code</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={navbarStyles.rightArrowIcon} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    )
}


export default Navbar