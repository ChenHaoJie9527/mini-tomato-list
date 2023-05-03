import { FC } from "react";
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

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const TomatoDialog: FC<DialogProps> = ({ open, setOpen }) => {
  const fullScreen = useMediaQuery(useTheme().breakpoints.down("md"));
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="tomato_id_dialog">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
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
