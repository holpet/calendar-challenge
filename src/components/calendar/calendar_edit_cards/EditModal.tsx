import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { SetStateAction, useState } from "react";
import { useAtom } from "jotai";
import { selectedDateAtom } from "../../../lib/atoms/globalAtoms";
import { default as CalendarIcon } from "@mui/icons-material/EventAvailable";
import { default as DeleteIcon } from "@mui/icons-material/DeleteOutline";
import { LEGEND_COLORS, LEGEND_COLOR_NAMES } from "../../../lib/constants";
import Form from "./components/Form";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

interface IEditCardProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function EditModal({ open, setOpen }: IEditCardProps) {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeColor, setActiveColor] = useState(LEGEND_COLOR_NAMES.white);
  const [activeFont, setActiveFont] = useState("font-global");

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={paperProps} // see down
        slotProps={slotProps} // see down
      >
        <div className="p-6 overflow-visible relative">
          {/* ------ LABEL of EVENT DATA ------ */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2">
                <CalendarIcon style={{ color: "#7e45db" }} />
              </div>
              {
                LEGEND_COLORS.find((obj) => {
                  return obj.name === activeColor;
                })?.meaning
              }
            </div>
            {/* delete event */}
            <div>
              <DeleteIcon style={{ color: "#7e45db" }} />
            </div>
          </div>
          {/* active color line */}
          <div
            className={`flexbox ${
              LEGEND_COLORS.find((obj) => {
                return obj.name === activeColor;
              })?.colorLineClass
            } w-full h-2 mt-5`}
          ></div>

          {/* ------- FORM for EVENT DATA ------- */}
          <Form
            setOpen={setOpen}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
            activeFont={activeFont}
            setActiveFont={setActiveFont}
          />
        </div>
      </BootstrapDialog>
    </div>
  );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

/*  ****** design props for modal ******  */
const paperProps = {
  sx: {
    width: 600,
    maxWidth: "75%",
    minWidth: 200,
    overflow: "visible",
  },
  style: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    border: "1px solid #d9dce2",
    backgroundColor: "#e8e5f9",
  },
};

const slotProps = {
  backdrop: {
    style: {
      backgroundColor: "rgba(255,255,255,0.5)",
    },
  },
};
