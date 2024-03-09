const loginPageStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
  },

  childContainer: {
    display: "flex",
    justifyContent: { xs: "center", md: "flex-start" },
    alignItems: { xs: "center", md: "strech" },
    height: { xs: "100vh", lg: "auto" },
    pt: {md:1.8, lg:0},
    pb: { lg:0},
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
    textAlign: "center",
    display: { xs: "none", md: "block" },
  },

  rightImage: {
    width: { md: "350px", xl: "400px" },
    height: { md: "350px", xl: "400px" },
    mt: "240px",
    mr: { md: "-40%", lg: "-24%", xl: "-4%" },
  },

  signInMainContainer: {
    background: "#ffffff",
    borderRadius: "22px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    py: "55px",
    px: { xs: "8px", sm: "30px" },
    position: "absolute",
    top: { xs: "48%", lg: "50%" },
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

  noAccountText: {
    fontSize: "15px",
    color: "#8D8D8D",
    fontFamily: "Poppins",
    fontWeight: "400",
  },

  SignupTextButton: {
    fontSize: "15px",
    color: "#B87514",
    fontFamily: "Poppins",
    fontWeight: "400",
    cursor: "pointer",
    textTransform: "capitalize",
    background: "#ffffff",
    height: "20px",
    p: 0,
    "&:hover": {
      background: "#ffffff",
    },
  },

  signInText: {
    fontSize: { xs: "40px", md: "52px" },
    color: "#000000",
    fontFamily: "Poppins",
    fontWeight: "500",
    mt: "-50px",
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
  },

  errorText: {
    fontSize: "13px",
    color: "#AD3113",
    fontFamily: "Poppins",
    fontWeight: "400",
    alignSelf: "flex-end",
  },

  SigninButton: {
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

  orText: {
    color: "#ABABAB",
    fontSize: "16px",
    fontFamily: "Poppins",
    fontWeight: "400",
    alignSelf: "center",
    display: { xs: "none", md: "block" },
  },

  logosContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    order: { xs: -1, md: 0 },
  },

  signInWithGoogleButton: {
    background: "#FFF4E3",
    flexGrow: 1,
    boxShadow: "none",
    textTransform: "capitalize",
    height: "44px",
    color: "#B87514",
    fontSize: { xs: "11px", sm: "16px" },
    fontFamily: "Poppins",
    fontWeight: "500",
    borderRadius: "10px",
    "&:hover": {
      boxShadow: "none",
      background: "#FFF4E3",
    },
  },

  googleLogoIcon: {
    width: { xs: "18px", sm: "25px" },
    height: { xs: "18px", sm: "25px" },
  },

  logoIcon: {
    width: "44px",
    height: "44px",
  },
};

export default loginPageStyles;
