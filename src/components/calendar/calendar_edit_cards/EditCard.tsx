import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { SetStateAction } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

interface IEditCardProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function EditCard({ open, setOpen }: IEditCardProps) {
  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          //sx: { transform: "translateY(-200px)" },
          style: {
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            border: "1px solid #d9dce2",
          },
        }}
        slotProps={{
          backdrop: { style: { backgroundColor: "rgba(255,255,255,0.5)" } },
        }}
      >
        <div className="p-6">
          <div className="flexbox bg-gray w-full h-5"></div>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
          acgfdfg consectetur ac, vestibulum at eros.gggggggggg
        </div>
      </BootstrapDialog>
    </div>
  );
}
