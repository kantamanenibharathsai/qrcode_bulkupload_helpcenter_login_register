import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import QRCode from "react-qr-code";
import styles from "./QrCode.Styles";
import { qrCodesData } from "../../utils/QrCodesData";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface IState {
  data: {
    id: number;
    code: string;
  }[];
  open: boolean;
  helpText: string;
  description: string;
  qrCodeValue: string;
  qrId: number;
}

const GenerateQrCode = () => {
  const [data, setData] = useState<IState["data"]>(qrCodesData);
  const [open, setOpen] = useState<IState["open"]>(false);
  const [openView, setOpenView] = useState<IState["open"]>(false);
  const [helpText, setHelpText] = useState<IState["helpText"]>("");
  const [description, setDescription] = useState<IState["description"]>("");
  const [qrCodeValue, setQrCodeValue] = useState<IState["qrCodeValue"]>("");
  const [qrCodeViewValue, setQrCodeViewValue] = useState<IState["qrCodeValue"]>("");
  const [toggleSave, setToggleSave] = useState<IState["open"]>(false);
  const [qrId, setQrId] = useState<IState["qrId"]>(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
    setHelpText("");
  };

  const handleSaveClick = () => {
    if (qrCodeValue !== "") {
      data.push({ id: data.length + 1, code: description });
      setOpen(false);
    } else {
      setHelpText("Click on Generate QR.");
    }
  };

  const handleGenerateQR = () => {
    setToggleSave(true);
    if (description !== "") {
      setQrCodeValue(description);
    } else {
      setHelpText("This field is required.");
    }
  };

  const renderGenerateQrCodeUI = () => {
    if (qrCodeValue !== "" && toggleSave) {
      return (
        <Box sx={styles.qrBox1}>
          <QRCode
            size={256}
            style={styles.qrCode}
            value={qrCodeValue}
            viewBox={`0 0 256 256`}
          />
        </Box>
      );
    } else {
      return (
        <Box>
          <Typography sx={styles.clickHereText}>Click Here to</Typography>
          <Button sx={styles.generateButton} onClick={handleGenerateQR}>
            Generate QR
          </Button>
        </Box>
      );
    }
  };

  const handleDeleteClick = () => {
    setOpenView(false);
    const newData = data.filter((item) => item.id !== qrId);
    setData(newData);
  };

  return (
    <Box>
      <Box sx={styles.generateBox}>
        <Button
          startIcon={<AddCircleOutlineIcon />}
          sx={styles.generateBtn}
          onClick={handleClickOpen}
        >
          Genetate New
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          style: { ...styles.dialog },
        }}
      >
        <IconButton onClick={handleClose} sx={styles.closeIconBtn}>
          <CloseIcon sx={styles.closeIcon} />
        </IconButton>
        <DialogContent>
          <Box sx={styles.dialogQrMainBox}>
            <Box sx={styles.dialogQRBox}>{renderGenerateQrCodeUI()}</Box>
          </Box>
          <TextField
            label="Description"
            type="text"
            multiline
            rows={2}
            InputLabelProps={{
              style: { ...styles.textfieldLabel },
            }}
            sx={styles.textfield}
            onChange={handleChange}
          />
          <Typography sx={styles.helpText}>{helpText}</Typography>
          <Grid container spacing={2} sx={styles.sendMsgBtnBox}>
            <Grid item xs={6}>
              <Button
                onClick={handleClose}
                autoFocus
                sx={{ ...styles.viewBtn, mt: 0 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handleSaveClick}
                autoFocus
                sx={{ ...styles.reuseBtn, mt: 0 }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Box sx={styles.mainBox}>
        <Grid container spacing={{ xs: 1, sm: 2 }}>
          {data &&
            data.map((data) => {
              return (
                <Grid item xs={12} md={4} lg={3} key={data.id}>
                  <Box sx={styles.qrMainBox}>
                    <Box sx={styles.qrBox}>
                      <QRCode
                        size={256}
                        style={styles.qrCode}
                        value={data.code}
                        viewBox={`0 0 256 256`}
                      />
                    </Box>
                    <Grid container spacing={{ xs: 1, sm: 2 }}>
                      <Grid item xs={6}>
                        <Button
                          sx={styles.viewBtn}
                          onClick={() => {
                            setQrCodeViewValue(data.code);
                            setOpenView(true);
                            setQrId(data.id);
                          }}
                        >
                          View
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button sx={styles.reuseBtn}>Reuse</Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
        <Dialog
          open={openView}
          onClose={handleCloseView}
          maxWidth="xs"
          fullWidth
          PaperProps={{
            style: { ...styles.dialog },
          }}
        >
          <IconButton onClick={handleCloseView} sx={styles.closeIconBtn}>
            <CloseIcon sx={styles.closeIcon} />
          </IconButton>
          <DialogContent>
            <Box sx={styles.dialogQrMainBox}>
              <Box sx={styles.dialogQRBox}>
                <Box sx={styles.qrBox1}>
                  <QRCode
                    size={256}
                    style={styles.qrCode}
                    value={qrCodeValue}
                    viewBox={`0 0 256 256`}
                  />
                </Box>
              </Box>
            </Box>
            <TextField
              label="Description"
              type="text"
              multiline
              rows={2}
              InputLabelProps={{
                style: { ...styles.textfieldLabel },
              }}
              sx={styles.textfield}
              value={qrCodeViewValue}
              aria-readonly
            />
            <Typography sx={styles.helpText}>{helpText}</Typography>
            <Grid container spacing={2} sx={styles.sendMsgBtnBox}>
              <Grid item xs={6}>
                <Button
                  onClick={handleCloseView}
                  autoFocus
                  sx={{ ...styles.viewBtn, mt: 0 }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={handleDeleteClick}
                  autoFocus
                  sx={{ ...styles.reuseBtn, mt: 0 }}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default GenerateQrCode;
