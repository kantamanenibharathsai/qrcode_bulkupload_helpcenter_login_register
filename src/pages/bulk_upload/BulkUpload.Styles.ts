const styles = {
  contentGrid: {
    mt: 1
  },

  leftGridBox: {
    background: "#fff",
    px: { xs: 1, sm: 2 },
    py: { xs: 3, sm: 2 },
    borderRadius: "25px",
  },

  rightGrid: {
    height: "600px",
    overflowY: "scroll"
  },

  filesBox: {
    background: "#f7f8fc",
    border: "1px dashed #979797",
    borderRadius: "25px",
    height: "260px",
    px: { xs: 1, sm: 4 },
    py: { xs: 3, sm: 4 },
    display: "flex",
    overflowY: "scroll",
  },

  file: {
    width: { xs: 40, sm: 60 },
    height: 60
  },

  dragBox: {
    textAlign: "center",
    mt: 2
  },

  browseBtn: {
    textTransform: "none",
    color: "#fff",
    fontWeight: 600,
    background: "#37b0e8",
    mt: 2,
    py: 1,
    px: 4,
    borderRadius: "20px",
    "&:hover": {
      background: "#37b0e8",
    },
  },

  rightGridBox: {
    display: "flex",
    my: 2,
    alignItems: "center"
  },


  docUploadBox: {
    width: "100%",
    ml: 1.5
  },

  uploadingBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  closeIcon: {
    color: "#666",
    fontSize: "1.2rem",
    cursor: "pointer"
  },

  progressBox: {
    width: "100%"
  },

  progressBar: {
    height: 10,
    borderRadius: 5,
    background: "#d9d9d9",
  },

  sizeBox: {
    display: "flex",
    alignItems: "center"
  },

  size: {
    fontSize: "0.9rem",
    mr: 2
  },

  chooseText: {
    color: "#6666",
  },
};

export default styles;
