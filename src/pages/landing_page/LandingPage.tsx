import { Avatar, Box, Button, Typography } from "@mui/material"
import Navbar from "../../navbar/Navbar"
import extendedLogo from "../../assets/extendedLogo.png"
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { CiSearch } from "react-icons/ci";
import landingPageStyles from "./LandingPage.Styles";
import { useState } from "react";
import HelpCenter from "../help_center/HelpCenter";
import BulkUpload from "../bulk_upload/BulkUpload";
import GenerateQrCode from "../qr_code/QrCode";
import { useNavigate } from "react-router-dom";



const LandingPage = () => {
    const [path, setPath] = useState<string>("help-center")
    const navigate = useNavigate()

    const helpCenterHandler = () => {
        setPath("help-center")
    }

    const bulkUploadHandler = () => {
        setPath("bulk-upload")
    }

    const qrCodeHandler = () => {
        setPath("qr-code")
    }

    const setPathFunc = (pathName: string) => {
        setPath(pathName)
    }

    const renderComponent = () => {
        switch (true) {
            case path === "help-center":
                return <HelpCenter />
            case path === "bulk-upload":
                return <BulkUpload />
            default:
                return <GenerateQrCode />
        }
    }

    const logoutEventHandler = () => {
        navigate("/login")
    }

    return (
        <Box sx={landingPageStyles.mainContainer}>
            <Box sx={landingPageStyles.childContainer}>
                <Navbar setPathFunc={setPathFunc} />
                <Box sx={landingPageStyles.leftContainer}>
                    <Box sx={landingPageStyles.leftChildContainer}>
                        <Box component="img" alt="extended-logo" sx={landingPageStyles.extendedLogo} src={extendedLogo} />
                        <Box sx={landingPageStyles.profileContentContainer}>
                            <Avatar sx={landingPageStyles.userProfileImage} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Typography sx={landingPageStyles.userNameText}>Bharath Sai</Typography>
                            <Typography sx={landingPageStyles.sellerText}>kantamanenibharath21@gmail.com</Typography>
                        </Box>
                        <Box component="ul" sx={landingPageStyles.unorderedList}>
                            <Box component="li" sx={landingPageStyles.listItem} onClick={helpCenterHandler}>
                                <Box sx={landingPageStyles.iconTextContainer}>
                                    <QuestionMarkOutlinedIcon sx={landingPageStyles.listItemIcon} />
                                    <Typography sx={landingPageStyles.listItemText}>Help Center</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={landingPageStyles.rightArrowIcon} />
                            </Box>
                            <Box component="li" sx={landingPageStyles.listItem} onClick={bulkUploadHandler}>
                                <Box sx={landingPageStyles.iconTextContainer}>
                                    <CloudUploadOutlinedIcon sx={landingPageStyles.listItemIcon} />
                                    <Typography sx={landingPageStyles.listItemText}>Bulk Upload</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={landingPageStyles.rightArrowIcon} />
                            </Box>
                            <Box component="li" sx={landingPageStyles.listItem} onClick={qrCodeHandler}>
                                <Box sx={landingPageStyles.iconTextContainer}>
                                    <QrCode2OutlinedIcon sx={landingPageStyles.listItemIcon} />
                                    <Typography sx={landingPageStyles.listItemText}>QR Code</Typography>
                                </Box>
                                <ChevronRightOutlinedIcon sx={landingPageStyles.rightArrowIcon} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={landingPageStyles.rightContainer}>
                    <Box sx={landingPageStyles.rightChildContainer}>
                        <Box sx={landingPageStyles.rightNavContainer}>
                            <Box sx={landingPageStyles.profileIconContainer}>
                                <Button disableFocusRipple disableElevation disableTouchRipple disableRipple sx={landingPageStyles.logoutButton} variant="contained" onClick={logoutEventHandler}>Logout</Button>
                                <Typography sx={landingPageStyles.chatText}>{path}</Typography>
                            </Box>
                            <Box sx={landingPageStyles.searchInputNotificationContainer}>
                                <Box sx={landingPageStyles.searchInputContainer}>
                                    <CiSearch className="search-icon" />
                                    <Box component="input" sx={landingPageStyles.inputElement} placeholder="Search" />
                                </Box>
                                <NotificationsOutlinedIcon sx={landingPageStyles.notificationIcon} />
                            </Box>

                        </Box>
                        {renderComponent()}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage