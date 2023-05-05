import { FC, useEffect, useState } from "react";
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
  const [emailError, setEmailError] = useState(false);
  const [helperTextVal, setHelperTextVal] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");

  const onReset = () => {
    setOpen(false);
    setEmailVal("");
    setPasswordVal("");
    setHelperTextVal("");
    setEmailError(false);
    setPasswordError(false);
    setPasswordHelperText("");
  };

  const onClose = () => {
    onReset();
  };
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailVal(value);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value);
  };

  useEffect(() => {
    if (emailVal) {
      const reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!reg.test(emailVal)) {
        setHelperTextVal("email is not valid");
        setEmailError(true);
      } else {
        setHelperTextVal("");
        setEmailError(false);
      }
    }
    if (password) {
      const reg = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/; // 最少6位 包括至少1个大写字母 1个小写字母 1个数字 1个特殊字符 Kd@qq.com
      
      if (!reg.test(password)) {
        setPasswordError(true);
        setPasswordHelperText("password is not valid");
      } else {
        setPasswordError(false);
        setPasswordHelperText("");
      }
    }
  }, [emailVal, password]);

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
            color="tomato"
            helperText={helperTextVal}
            error={emailError}
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
            color="tomato"
            error={passwordError}
            helperText={passwordHelperText}
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
