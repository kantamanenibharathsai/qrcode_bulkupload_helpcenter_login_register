import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import styles from "./BulkUpload.Styles";
import { useDropzone } from "react-dropzone";
import doc from "../../assets/docImage.png";
import upload from "../../assets/MaskGroup.png";
import CloseIcon from "@mui/icons-material/Close";


interface IState {
  progress: number;
  filesData: {
    id: number;
    name: string;
    size: number;
    type: string;
  }[];
  data: {
    name: string;
    size: number;
    type: string;
  };
}

const BulkUpload = () => {
  const [progress, setProgress] = useState<IState["progress"]>(0);
  const [filesData, setFilesData] = useState<IState["filesData"]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((data: IState["data"]) => {
      filesData.push({
        name: data.name,
        size: data.size,
        type: data.type,
        id: filesData.length + 1,
      });
    });
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [filesData]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const renderFileUpload = () => {
    if (filesData.length > 0) {
      return (
        <Box>
          {filesData.map((file) => {
            return (
              <Box component="img" src={doc} sx={styles.file} key={file.id} />
            );
          })}
        </Box>
      );
    } else {
      return (
        <Box sx={styles.chooseText}>
          <Typography>Choose files to upload</Typography>
        </Box>
      );
    }
  };

  const renderProgressBar = () => {
    if (filesData.length > 0) {
      return (
        <Box>
          {filesData.map((data) => {
            return (
              <Box key={data.id}>
                <Box sx={styles.rightGridBox}>
                  <Box component="img" src={doc} />
                  <Box sx={styles.docUploadBox}>
                    <Box sx={styles.uploadingBox}>
                      <Typography>{data.name}</Typography>
                      <Box sx={styles.sizeBox}>
                        <Typography sx={styles.size}>{data.size}kb</Typography>
                        <CloseIcon
                          sx={styles.closeIcon}
                          onClick={() => handleRemoveClick(data.id)}
                        />
                      </Box>
                    </Box>
                    <Box sx={styles.progressBox}>
                      <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={styles.progressBar}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      );
    } else {
      return <Typography>No file uploads.</Typography>;
    }
  };

  const handleRemoveClick = (fileId: number) => {
    const newData = filesData.filter((data) => data.id !== fileId);
    setFilesData(newData);
  };

  return (
    <Grid container spacing={4} sx={styles.contentGrid}>
      <Grid item xs={12} md={8}>
        <Box sx={styles.leftGridBox}>
          <Box
            sx={styles.filesBox}
            {...getRootProps({ className: "dropzone" })}
          >
            <input {...getInputProps()} />
            {renderFileUpload()}
          </Box>
          <Box sx={styles.dragBox}>
            <Box component="img" src={upload} />
            <Typography>Drag And Drop, Or Browse Files</Typography>
            <Box
              component={"input"}
              {...getInputProps()}
              display={"none"}
              id="fileInput"
            />
            <Button
              sx={styles.browseBtn}
              onClick={() => {
                document.getElementById("fileInput")?.click();
              }}
            >
              Browse File
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sx={styles.rightGrid}>
        <Typography variant="h6">Uploaded File</Typography>
        {renderProgressBar()}
      </Grid>
    </Grid>
  );
};

export default BulkUpload;
