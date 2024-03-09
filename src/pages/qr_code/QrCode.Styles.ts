const styles = {
  generateBox: {
    textAlign: "end",
    my: 2,
  },

  generateBtn: {
    background: "#fff",
    borderRadius: "10px",
    textTransform: "none",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    color: "#000",
    px: 3,
    py: 1,
    "&:hover": {
      background: "#fff",
    },
  },

  mainBox: {
    background: { xs: "#f7f8fc", sm: "#fff" },
    p: { xs: 1, sm: 5 },
    borderRadius: "15px",
  },

  qrMainBox: {
    background: { xs: "#fff", sm: "#f7f8fc" },
    borderRadius: "15px",
    p: { xs: 1, sm: 2 },
  },

  qrBox: {
    height: "auto",
    margin: "0 auto",
    maxWidth: { xs: 94, sm: 114 },
    width: "100%",
  },

  qrBox1: {
    height: "auto",
    margin: "0 auto",
    maxWidth: { xs: 124, smm: 154 },
    width: "100%",
  },

  qrCode: {
    height: "auto",
    maxWidth: "100%",
    width: "100%",
  },

  viewBtn: {
    mt: 1,
    background: "#fff",
    textTransform: "none",
    color: "#37b0e8",
    border: "2px solid #37b0e8",
    borderRadius: "25px",
    fontWeight: 600,
    width: "100%",
    fontSize: { xs: "0.8rem", sm: "1rem" },
    "&:hover": {
      background: "#fff",
    },
    p: { xs: 0, sm: 0.5 },
  },

  reuseBtn: {
    mt: 1,
    background: "#37b0e8",
    textTransform: "none",
    color: "#fff",
    border: "2px solid #37b0e8",
    width: "100%",
    borderRadius: "25px",
    fontWeight: 600,
    fontSize: { xs: "0.8rem", sm: "1rem" },
    "&:hover": {
      background: "#37b0e8",
    },
    p: { xs: 0, sm: 0.5 },
  },

  textfieldLabel: {
    color: "#666",
  },

  textfield: {
    mt: 1.5,
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #37B0E8",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #37B0E8",
      },
      "&:hover fieldset": {
        borderColor: "#37B0E8",
        color: "#000",
      },
    },
  },

  sendMsgBtnBox: {
    mt: 0.5,
  },

  dialog: {
    boxShadow: "none",
    borderRadius: "15px",
    overflow: "visible",
  },

  closeIconBtn: {
    position: "absolute",
    right: -10,
    top: -8,
    p: 0,
    borderRadius: "50%",
    bgcolor: "#fff",
    padding: 1,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    "&:hover": {
      bgcolor: "#fff",
    },
  },

  closeIcon: {
    fontSize: "1rem",
    color: "#000",
  },

  helpText: {
    color: "red",
    fontSize: "0.8rem",
    mt: 0.3,
  },

  generateButton: {
    mt: 0.5,
    background: "#37b0e8",
    textTransform: "none",
    color: "#fff",
    px: 3,
    borderRadius: "25px",
    fontWeight: 600,
    "&:hover": {
      background: "#37b0e8",
    },
  },

  dialogQrMainBox: {
    display: "flex",
    justifyContent: "center",
  },

  dialogQRBox: {
    textAlign: "center",
    background: "#f7f8fc",
    borderRadius: "10px",
    width: { xs: "70%", sm: "50%" },
    height: { xs: "150px", sm: "190px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    my: 1.5,
  },

  clickHereText: {
    fontSize: "0.8rem",
    fontWeight: 600,
  },
};

export default styles;
