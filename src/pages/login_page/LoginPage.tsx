import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material"
import loginPageStyles from "./LoginPage.Styles"
import leftScooterImg from "../../assets/leftScooter.png"
import rightManImg from "../../assets/rightMan.png"
import googleIcon from '../../assets/googleIcon.png';
import facebookIcon from '../../assets/facebookIcon.png';
import appleIcon from "../../assets/appleIcon.png"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "../../App.css"
import { useState } from "react";


interface FormData {
    email: string;
    password: string;
}

const LoginPage = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();
    const navigate = useNavigate()

    const passwordVisibleOrNotHandler = () => {
        setIsPasswordVisible(prevValue => !prevValue)
    }

    const clickSignUpTextHandler = () => {
        navigate("/register")
    }

    const onSubmit = (data: FormData) => {
        const existingData = JSON.parse(localStorage.getItem("formData") ?? "[]");
        const user = existingData.find(
            (userDetailsObj: { email: string; password: string }) =>
                userDetailsObj.email === data.email && userDetailsObj.password === data.password
        );
        if (user) {
            setTimeout(() => {
                navigate("/");
            }, 10);
        }
        reset();
    };


    return (
        <Box sx={loginPageStyles.mainContainer}>
            <Box sx={loginPageStyles.childContainer}>
                <Box sx={loginPageStyles.leftContainer}>
                    <Typography sx={loginPageStyles.yourLogoText}>Your Logo</Typography>
                    <Box component="img" alt="left-scooter-image" src={leftScooterImg} sx={loginPageStyles.leftImage} />
                </Box>
                <Box sx={loginPageStyles.rightContainer}>
                    <Box component="img" alt="right-image" src={rightManImg} sx={loginPageStyles.rightImage} />
                </Box>
            </Box>
            <Box sx={loginPageStyles.signInMainContainer}>
                <Box sx={loginPageStyles.signInChildContainer}>
                    <Box sx={loginPageStyles.welcomeNoAccountContainer}>
                        <Typography sx={loginPageStyles.welcomeToText}>Welcome to Lorem</Typography>
                        <Box sx={loginPageStyles.noAccountSignUpContainer}>
                            <Typography sx={loginPageStyles.noAccountText}>No Account ?</Typography>
                            <Button disableElevation disableFocusRipple disableTouchRipple disableRipple onClick={clickSignUpTextHandler} sx={loginPageStyles.SignupTextButton}>Sign up</Button>
                        </Box>
                    </Box>
                    <Typography sx={loginPageStyles.signInText}>
                        Sign in
                    </Typography>
                    <Box component="form" sx={loginPageStyles.formContainer} onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        autoComplete="off">
                        <Box sx={loginPageStyles.labelInputContainer}>
                            <Box htmlFor="Email" component="label" sx={loginPageStyles.labelText}>Enter your email address</Box>
                            <TextField id="Email" fullWidth placeholder="email address" sx={loginPageStyles.textFieldStyle}
                                type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "*Email is required!",
                                    },
                                    pattern: {
                                        value:
                                            /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "*Invalid Email Address",
                                    },
                                })}
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message}
                            />
                        </Box>
                        <Box sx={loginPageStyles.labelInputContainer}>
                            <Box htmlFor="password" component="label" sx={loginPageStyles.labelText}>Enter your Password</Box>
                            <TextField id="password" fullWidth placeholder="Password" sx={loginPageStyles.textFieldStyle}
                                type={isPasswordVisible ? "text" : "password"}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "*Password is required!",
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                                        message:
                                            "*Password must contain at least one uppercase letter, one lowercase letter and one number, and must be between 6 and 15 characters long.",
                                    },
                                })}
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {isPasswordVisible ? <VisibilityIcon onClick={passwordVisibleOrNotHandler} /> : <VisibilityOffIcon onClick={passwordVisibleOrNotHandler} />}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Button disableFocusRipple disableRipple disableTouchRipple variant="contained" type="submit" sx={loginPageStyles.SigninButton}>Sign in</Button>
                        <Typography sx={loginPageStyles.orText}>OR</Typography>
                        <Box sx={loginPageStyles.logosContainer}>
                            <Button disableFocusRipple disableRipple disableTouchRipple startIcon={<Box component="img" alt="google-icon" src={googleIcon} sx={loginPageStyles.googleLogoIcon} />} sx={loginPageStyles.signInWithGoogleButton} variant="contained">Sign in with Google</Button>
                            <Box component="img" alt="facebook-icon" src={facebookIcon} sx={loginPageStyles.logoIcon} />
                            <Box component="img" alt="apple-icon" src={appleIcon} sx={loginPageStyles.logoIcon} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}



export default LoginPage