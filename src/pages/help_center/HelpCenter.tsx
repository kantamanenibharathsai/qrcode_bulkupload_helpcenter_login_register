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
import EastIcon from "@mui/icons-material/East";
import { helpCenterData } from "../../utils/Data";
import styles from "./HelpCenter.Styles";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import addNotification from "react-push-notification";
import AddIcon from "@mui/icons-material/Add";

interface IState {
  open: boolean;
  query: string;
  questionId: number;
  event: React.ChangeEvent<HTMLInputElement>;
  helpText: string;
}

const HelpCenter = () => {
  const [open, setOpen] = useState<IState["open"]>(false);

  const [openReply, setOpenReply] = useState<IState["open"]>(false);

  const [query, setQuery] = useState<IState["query"]>("");

  const [questionId, setQuestionId] = useState<IState["questionId"]>(0);

  const [helpText, setHelpText] = useState<IState["helpText"]>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenReply = (questionId: number) => {
    setQuestionId(questionId);
    setOpenReply(true);
  };

  const handleCloseReply = () => {
    setOpenReply(false);
  };

  const handleChange = (event: IState["event"]) => {
    setQuery(event.target.value);
    setHelpText("");
  };

  const handleSendMesssage = () => {
    if (query === "") {
      setHelpText("This field is required.");
    } else {
      helpCenterData.push({
        questionId: helpCenterData.length + 1,
        question: query,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro molestias eos amet labore voluptati bussimilique sit eaque illum saepe, perspiciatis optio culpa, veniam adipisci reprehenderit vero nesciunt tempora.",
      });
      setOpen(false);
      addNotification({
        title: "Success",
        subtitle: "Your query has been added",
        message: "Query submitted successfully",
        theme: "darkblue",
      });
    }
  };

  const handleReplyMesssage = () => {
    if (query === "") {
      setHelpText("This field is required.");
    } else {
      setOpenReply(false);
      alert("Message has sent");
    }
  };

  const renderNoDataContent = () => {
    if (helpCenterData.length <= 0) {
      return <Typography sx={styles.noDataText}>No data is found.</Typography>;
    } else {
      return (
        <Box sx={styles.questionsMainBox}>
          <Grid container spacing={3}>
            {helpCenterData.map((data) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={data.questionId}>
                  <Box sx={styles.questionBox}>
                    <Typography sx={styles.question}>
                      {data.question}
                    </Typography>
                    <Box sx={styles.rightArrowBox}>
                      <EastIcon
                        sx={styles.arrowIcon}
                        onClick={() => handleClickOpenReply(data.questionId)}
                      />
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      );
    }
  };

  return (
    <Box>
      <Box sx={styles.addQueryBtnBox}>
        <Button
          startIcon={<AddCircleOutlineIcon />}
          sx={styles.addQueryBtn}
          onClick={handleClickOpen}
        >
          Ask New Query
        </Button>
      </Box>
      <Box sx={styles.addIconBox} onClick={handleClickOpen}>
        <AddIcon sx={styles.addIcon} />
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
          <TextField
            label="Query"
            type="text"
            multiline
            rows={3}
            InputLabelProps={{
              style: { ...styles.textfieldLabel },
            }}
            sx={styles.textfield}
            onChange={handleChange}
          />
          <Typography sx={styles.helpText}>{helpText}</Typography>
          <Box sx={styles.sendMsgBtnBox}>
            <Button
              onClick={handleSendMesssage}
              autoFocus
              sx={styles.sendMsgButton}
            >
              Send Message
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <Box sx={styles.perviousQuesBox}>
        <Typography sx={styles.perviousQuesText}>
          You can find the answers to the perviously asked queries
        </Typography>
      </Box>
      {renderNoDataContent()}
      <Dialog
        open={openReply}
        onClose={handleCloseReply}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: { ...styles.dialog },
        }}
      >
        <IconButton onClick={handleCloseReply} sx={styles.closeIconBtn}>
          <CloseIcon sx={styles.closeIcon} />
        </IconButton>
        {helpCenterData
          .filter((data) => data.questionId === questionId)
          .map((data) => {
            return (
              <DialogContent key={data.questionId}>
                <Box sx={styles.dateBox}>
                  <Typography sx={styles.questionText}>
                    {data.question}
                  </Typography>
                  <Typography sx={styles.date}>Mar 9, 2023</Typography>
                </Box>
                <Typography gutterBottom sx={styles.commentText}>
                  Comment
                </Typography>
                <Typography>{data.comment}</Typography>
                <TextField
                  label="Query"
                  type="text"
                  multiline
                  rows={3}
                  InputLabelProps={{
                    style: { ...styles.textfieldLabel },
                  }}
                  sx={styles.textfield}
                  onChange={handleChange}
                />
                <Typography sx={styles.helpText}>{helpText}</Typography>
                <Box sx={styles.sendMsgBtnBox}>
                  <Button
                    onClick={handleReplyMesssage}
                    autoFocus
                    sx={styles.sendMsgButton}
                  >
                    Reply
                  </Button>
                </Box>
              </DialogContent>
            );
          })}
      </Dialog>
    </Box>
  );
};

export default HelpCenter;
