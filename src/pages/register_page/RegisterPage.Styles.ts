const registerPageStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
  },

  childContainer: {
    display: "flex",
    justifyContent: { xs: "center", md: "flex-start" },
    alignItems: { xs: "center", md: "strech" },
    height: { xs: "inherit", md: "auto" },
  },

  leftContainer: {
    width: { xs: "100%", md: "50%" },
    height: "100vh",
    background: "#ECBC76",
    paddingLeft: { xs: "20px", md: "30px" },
    paddingTop: { xs: "20px", md: "30px" },
  },

  yourLogoText: {
    fontSize: "16px",
    color: "#C6553B",
  },

  leftImage: {
    width: "270px",
    height: "270px",
    mt: "200px",
    ml: { md: "2%", lg: "5%", xl: "250px" },
    display: { xs: "none", md: "inline" },
  },

  rightContainer: {
    width: "50%",
    height: "100vh",
    background: "#ffffff",
    textAlign: "end",
    display: { xs: "none", md: "flex" },
    justifyContent: "flex-end",
  },

  rightImage: {
    width: { md: "350px", xl: "400px" },
    height: { md: "350px", xl: "400px" },
    mt: "240px",
    mr: { md: "-8.6%", lg: "8%", xl: "30%" },
  },

  signInMainContainer: {
    background: "#ffffff",
    borderRadius: "22px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    py: "55px",
    px: { xs: "8px", sm: "30px" },
    position: "absolute",
    top: { xs: "49%", lg: "50%" },
    left: { xs: "48%", lg: "50%" },
    transform: { xs: "translate(-48%, -48%)", lg: "translate(-50%, -50%)" },
    width: { xs: "95%", sm: "88%", md: "51%", lg: "43%", xl: "33%" },

  },

  signInChildContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  welcomeNoAccountContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  welcomeToText: {
    fontSize: "18px",
    color: "#000000",
    fontFamily: "Poppins",
    fontWeight: "400",
  },

  noAccountSignUpContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  },

  haveAnAccountText: {
    fontSize: "15px",
    color: "#8D8D8D",
    fontFamily: "Poppins",
    fontWeight: "400",
  },

  SignInText: {
    fontSize: "16px",
    color: "#B87514",
    fontFamily: "Poppins",
    fontWeight: "400",
  },

  signUpText: {
    fontSize: { xs: "40px", md: "52px" },
    color: "#000000",
    fontFamily: "Poppins",
    fontWeight: "500",
    mt: "-50px",
    cursor: "pointer",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  labelInputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  labelText: {
    fontSize: "15px",
    color: "#000000",
    fontFamily: "Poppins",
    fontWeight: "500",
  },

  textFieldStyle: {
    "& .MuiInputBase-input": {
      padding: "0px",
      px: "18px",
      height: "44px",
    },
    input: {
      "&::placeholder": {
        color: "#808080",
        fontSize: "14px",
        fontFamily: "Poppins",
        fontWeight: "300",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #ADADAD",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #ADADAD",
      },
      "&:hover fieldset": {
        borderColor: "#ADADAD",
      },
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },

  errorText: {
    fontSize: "13px",
    color: "#AD3113",
    fontFamily: "Poppins",
    fontWeight: "400",
    alignSelf: "flex-end",
  },

  usernameContactContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },

  SignupButton: {
    background: "#E48700",
    height: "44px",
    textTransform: "capitalize",
    color: "#ffffff",
    fontSize: "16px",
    fontFamily: "Poppins",
    fontWeight: "500",
    borderRadius: "10px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      background: "#E48700",
    },
  },
};

export default registerPageStyles;
