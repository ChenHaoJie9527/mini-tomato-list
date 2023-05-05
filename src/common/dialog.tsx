import { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import tomatoLog from "../assets/tomato.png?url";
import { TextField } from "@mui/material";
import React from "react";

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const TomatoDialog: FC<DialogProps> = ({ open, setOpen }) => {
  const fullScreen = useMediaQuery(useTheme().breakpoints.down("md"));
  const [emailVal, setEmailVal] = useState("");
  const [password, setPasswordVal] = useState("");

  const onClose = () => {
    setOpen(false);
  };
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailVal(e.target.value);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value);
  }
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-aria-labelledby="responsive-dialog-title"
      maxWidth={"xs"}
      fullWidth
    >
      <DialogContent>
        <DialogTitle className="flex items-center justify-center">
          <img className="w-16" src={tomatoLog} alt="" />
        </DialogTitle>
        <DialogContentText>
          <TextField
            fullWidth
            value={emailVal}
            onChange={onEmailChange}
            id="email"
            label="email"
            variant="standard"
            placeholder="Please enter the email address"
            size="small"
            required
            autoComplete="off"
            margin="dense"
            color={"tomato"}
          ></TextField>
          <TextField
            fullWidth
            value={password}
            onChange={onPasswordChange}
            id="password"
            label="password"
            variant="standard"
            placeholder="Please enter the password"
            size="small"
            required
            autoComplete="off"
            margin="dense"
            color={"tomato"}
          ></TextField>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Disagree
        </Button>
        <Button onClick={onClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
