const landingPageStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    background: { xs: "#F7F8FC", lg: "#ffffff" },
  },

  childContainer: {
    width: "100%",
    display: { xs: "flex", lg: "flex" },
    flexDirection: { xs: "column", lg: "row" },
    justifyContent: "flex-start",
    height: "100%",
  },

  leftContainer: {
    width: { lg: "24%", xl: "16%" },
    background: "#054081",
    display: { xs: "none", lg: "flex" },
    flexDirection: "column",
    alignItems: "center",
  },

  leftChildContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "35px",
    width: "88%",
    mt: "30px",
  },

  extendedLogo: {
    width: "135px",
    height: "63px",
  },

  profileContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  userProfileImage: {
    width: "55px",
    height: "55px",
  },

  userNameText: {
    fontSize: "16px",
    color: "#ffffff",
    fontWeight: "800",
    mt: "16px",
  },

  sellerText: {
    fontSize: "14px",
    color: "#6285B0",
    fontWeight: "500",
  },

  unorderedList: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    width: "80%",
    alignSelf: "center",
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  iconTextContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  listItemIcon: {
    width: "22px",
    height: "22px",
    color: "#ffffff",
  },

  listItemText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: "15px",
  },

  rightArrowIcon: {
    color: "#3b6599",
    fontSize: "20px",
  },

  rightContainer: {
    width: { xs: "90%", sm: "90%", md: "90%", lg: "76%", xl: "84%" },
    background: "#F7F8FC",
    height: { xs: "calc(100vh - 76px)", lg: "100%" },
    display: { xs: "block", lg: "flex" },
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "auto",
  },

  rightChildContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "auto",
    width: { lg: "93%" },
    height: "inherit",
    gap: { lg: "20px", xl: "40px" },
  },

  rightNavContainer: {
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    justifyContent: "space-between",
    pl: "10px",
    mt: { lg: "20px", xl: 5 },
  },

  profileIconContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logoutButton: {
    textTransform: "capitalize",
    width: "120px",
    background: "#37B0E8",
    "&:hover": {
      background: "#37B0E8",
    },
  },

  profileIcon: {
    color: "#3f3f41",
    width: "31px",
    height: "31px",
  },

  chatText: {
    color: "#3f3f41",
    fontSize: "23px",
    fontWeight: "700",
  },

  searchInputNotificationContainer: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },

  searchInputContainer: {
    width: "330px",
    border: "1px solid #07B0E8",
    borderRadius: "6px",
    display: "flex",
    height: "39px",
    alignItems: "center",
    background: "#ffffff",
    pr: 1,
  },

  inputElement: {
    flexGrow: 1,
    height: "36px",
    outline: "none",
    border: "none",
    color: "#3f3f41",
    fontSize: "15px",
  },

  notificationIcon: {
    width: "26px",
    height: "26px",
    color: "#3f3f41",
  },
};

export default landingPageStyles;
