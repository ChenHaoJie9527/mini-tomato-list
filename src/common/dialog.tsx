import { FC, useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import tomatoLog from "../assets/tomato.png?url";
import { TextField } from "@mui/material";
import React from "react";
import "../styles/rotate.css";

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
  const elementRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  const onReset = () => {
    setOpen(false);
    setEmailVal("");
    setPasswordVal("");
    setHelperTextVal("");
    setEmailError(false);
    setPasswordError(false);
    setPasswordHelperText("");
    setShow(true);
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
      const reg =
        /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/; // 最少6位 包括至少1个大写字母 1个小写字母 1个数字 1个特殊字符 Kd@qq.com

      if (!reg.test(password)) {
        setPasswordError(true);
        setPasswordHelperText("password is not valid");
      } else {
        setPasswordError(false);
        setPasswordHelperText("");
      }
    }
  }, [emailVal, password]);

  function transformElement(x: number, y: number, box: DOMRect) {
    if (elementRef.current) {
      const calcY = x - box.x - box.width / 2;
      const calcX = (y - box.y - box.height / 2) * -1;
      elementRef.current.style.transform = `rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    }
  }

  const isMouseMove = (el: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    window.requestAnimationFrame(() => {
      if (elementRef.current) {
        const box = elementRef.current.getBoundingClientRect();

        transformElement(el.clientX, el.clientY, box);
      }
    });
  };

  const isMouseLeave = (el: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    window.requestAnimationFrame(() => {
      if (elementRef.current) {
        elementRef.current.style.transform = `rotateX(0) rotateY(0)`;
      }
    });
  };

  const onRegister = () => {
    setShow(false);
  };

  const onBack = () => {
    setShow(true);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"xs"}
      fullWidth
      className="__3d"
      scroll="paper"
    >
      <DialogContent
        className="!pt-10 !pl-10 !pr-10 "
        onMouseMove={isMouseMove}
        onMouseLeave={isMouseLeave}
      >
        <DialogTitle
          className="flex items-center justify-center"
          ref={elementRef}
        >
          <div className="reverseRotate __3d_content">
            <div className="rotate">
              <img className="w-16 content" src={tomatoLog} alt="" />
            </div>
          </div>
        </DialogTitle>
        <DialogContentText component="div">
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
      <DialogActions className="!justify-center !pt-6 !pr-10 !pl-10">
        <Box component={"div"} className="flex flex-col items-center w-full">
          {show ? (
            <>
              <Button
                variant="contained"
                color="tomato"
                className="w-full"
                fullWidth
                size={"medium"}
                onClick={onClose}
              >
                登录
              </Button>
              <Button color="info">忘记密码?</Button>
              <p className="w-full mt-10 border-t divide-x-2 divide-solid divide-y-2 divide-black h-1 "></p>
              <Button color="tomato" onClick={onRegister}>
                注册
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="tomato"
                className="w-full"
                fullWidth
                size={"medium"}
                onClick={onClose}
              >
                注册
              </Button>
              <p className="w-full mt-10 border-t divide-x-2 divide-solid divide-y-2 divide-black h-1 "></p>
              <Button color="info" onClick={onBack}>
                返回
              </Button>
            </>
          )}
        </Box>
      </DialogActions>
    </Dialog>
  );
};
