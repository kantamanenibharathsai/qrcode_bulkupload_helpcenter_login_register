import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material"
import registerPageStyles from "./RegisterPage.Styles"
import leftScooterImg from "../../assets/leftScooter.png"
import rightManImg from "../../assets/rightMan.png"
import { useForm } from "react-hook-form";
import "../../App.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface FormData {
    username: string;
    email: string;
    password: string;
    contactNumber: number
}


const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const navigate = useNavigate()


    const passwordVisibleOrNotHandler = () => {
        setIsPasswordVisible(prevValue => !prevValue)
    }


    const onSubmit = (data: FormData) => {
        const existingData = localStorage.getItem("formData");
        const formDataArray = existingData ? JSON.parse(existingData) : [];
        formDataArray.push(data);
        localStorage.setItem("formData", JSON.stringify(formDataArray));
        reset();
        console.table(data)
        navigate("/login")
    };

    return (
        <Box sx={registerPageStyles.mainContainer}>
            <Box sx={registerPageStyles.childContainer}>
                <Box sx={registerPageStyles.leftContainer}>
                    <Typography sx={registerPageStyles.yourLogoText}>Your Logo</Typography>
                    <Box component="img" alt="left-scooter-image" src={leftScooterImg} sx={registerPageStyles.leftImage} />
                </Box>
                <Box sx={registerPageStyles.rightContainer}>
                    <Box component="img" alt="right-image" src={rightManImg} sx={registerPageStyles.rightImage} />
                </Box>
            </Box>
            <Box sx={registerPageStyles.signInMainContainer}>
                <Box sx={registerPageStyles.signInChildContainer}>
                    <Box sx={registerPageStyles.welcomeNoAccountContainer}>
                        <Typography sx={registerPageStyles.welcomeToText}>Welcome to Lorem</Typography>
                        <Box sx={registerPageStyles.noAccountSignUpContainer}>
                            <Typography sx={registerPageStyles.haveAnAccountText}>Have an Account ?</Typography>
                            <Typography sx={registerPageStyles.SignInText}>Sign in</Typography>
                        </Box>
                    </Box>
                    <Link to="/login" className="link-component">
                        <Typography sx={registerPageStyles.signUpText}>
                            Sign up
                        </Typography>
                    </Link>
                    <Box component="form" sx={registerPageStyles.formContainer} onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        autoComplete="off">
                        <Box sx={registerPageStyles.labelInputContainer}>
                            <Box htmlFor="Email" component="label" sx={registerPageStyles.labelText}>Enter your email</Box>
                            <TextField id="Email" fullWidth placeholder="email address" sx={registerPageStyles.textFieldStyle}
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
                        <Box sx={registerPageStyles.usernameContactContainer}>
                            <Box flexGrow={1} sx={registerPageStyles.labelInputContainer}>
                                <Box htmlFor="username" component="label" sx={registerPageStyles.labelText} >User name</Box>
                                <TextField id="username" fullWidth placeholder="User name" sx={registerPageStyles.textFieldStyle}
                                    {...register("username", {
                                        required: "*username is required!",
                                        minLength: {
                                            value: 5,
                                            message: "*username should be at least 5 characters!",
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: '*username should not exceed 10 characters!",',
                                        },
                                    })}
                                    error={Boolean(errors.username)}
                                    helperText={errors.username?.message} />
                            </Box>
                            <Box flexGrow={1} sx={registerPageStyles.labelInputContainer}>
                                <Box htmlFor="contactNumber" component="label" sx={registerPageStyles.labelText}>Contact Number</Box>
                                <TextField id="contactNumber" type="number" fullWidth placeholder="Contact Number" sx={registerPageStyles.textFieldStyle}
                                    {...register("contactNumber", {
                                        required: {
                                            value: true,
                                            message: "*contactNumber is required!",
                                        },
                                        minLength: {
                                            value: 10,
                                            message: "*contact Number must be 10 digits!",
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "*contact Number should not exceed 10 digits!",
                                        },
                                        pattern: {
                                            value: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                                            message:
                                                "*Please enter valid number."
                                        },
                                    })}
                                    error={Boolean(errors.contactNumber)}
                                    helperText={errors.contactNumber?.message}
                                />
                            </Box>
                        </Box>
                        <Box sx={registerPageStyles.labelInputContainer}>
                            <Box htmlFor="password" component="label" sx={registerPageStyles.labelText}>Enter your Password</Box>
                            <TextField id="password" fullWidth placeholder="Password" sx={registerPageStyles.textFieldStyle}
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
                        <Button type="submit" disableFocusRipple disableRipple disableTouchRipple variant="contained" sx={registerPageStyles.SignupButton}>Sign up</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


export default RegisterPage