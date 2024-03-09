const styles = {
  addQueryBtnBox: {
    textAlign: { xs: "start", sm: "end" },
    my: 2,
    display: { xs: "none", sm: "block" },
  },

  addQueryBtn: {
    background: "#37B0E8",
    color: "#fff",
    textTransform: "none",
    borderRadius: "14px",
    py: 1,
    px: 3,
    fontWeight: 600,
    "&:hover": {
      background: "#37B0E8",
    },
  },

  perviousQuesBox: {
    background: "#E5EDF6",
    borderRadius: "8px",
    px: 3,
    py: 1,
    mb: 2,
    mt: { xs: 2, sm: 0 },
  },

  perviousQuesText: {
    fontWeight: 600,
    fontSize: "0.85rem"
  },

  questionsMainBox: {
    background: "#fff",
    px: 3,
    py: 2,
    borderRadius: "8px"
  },

  questionBox: {
    background: "#F7F8FC",
    p: 2,
    borderRadius: "8px"
  },

  question: {
    color: "#244E8B",
    fontWeight: 600
  },

  rightArrowBox: {
    textAlign: "end"
  },

  arrowIcon: {
    color: "#37B0E8",
    cursor: "pointer"
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
        borderRadius: "13px",
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
    textAlign: "right",
    mt: 1
  },

  sendMsgButton: {
    background: "#37B0E8",
    color: "#fff",
    textTransform: "none",
    borderRadius: "20px",
    py: 1,
    px: 3,
    fontWeight: 600,
    "&:hover": {
      background: "#37B0E8",
    },
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
    color: "#000"
  },

  dateBox: {
    display: "flex",
    justifyContent: "space-between",
    background: "#F7F8FC",
    py: 1,
    px: 2,
    borderRadius: "8px",
    mb: 2,
    gap: 2,
  },

  questionText: {
    color: "#244E8B",
    fontWeight: 600
  },

  date: {
    fontSize: "0.9rem"
  },

  commentText: {
    fontWeight: 600,
    fontSize: "0.9rem"
  },

  helpText: {
    color: "red",
    fontSize: "0.8rem",
    mt: 0.3
  },

  noDataText: {
    textAlign: "center"
  },

  addIconBox: {
    position: "fixed",
    bottom: 20,
    right: 15,
    display: { xs: "flex", sm: "none" },
  },

  addIcon: {
    color: "#fff",
    background: "#37B0E8",
    borderRadius: "50%",
    p: 0.4,
    fontSize: "1.9rem",
  },
};

export default styles;
