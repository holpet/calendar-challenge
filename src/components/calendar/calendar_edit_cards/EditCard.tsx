import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { SetStateAction, useState } from "react";
import { useAtom } from "jotai";
import { now, selectedDateAtom } from "../../../lib/atoms/globalAtoms";
import { default as CalendarIcon } from "@mui/icons-material/EventAvailable";
import { default as DeleteIcon } from "@mui/icons-material/DeleteOutline";
import { LEGEND_COLORS } from "../../side_panel/components/Legend";
import DatePicker from "./components/DatePicker";

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
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
          {/* ------ first line with date and icons ------ */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2">
                <CalendarIcon style={{ color: "#7e45db" }} />
              </div>
              {selectedDate !== null
                ? selectedDate.format("dddd, D MMM YYYY")
                : now.format("dddd, D MMM YYYY")}
            </div>
            <div>
              <DeleteIcon style={{ color: "#7e45db" }} />
            </div>
          </div>
          <div className="flexbox bg-lightest-gray w-full h-[6px] my-3"></div>

          {/* ------- FORM FOR EVENT DATA ------- */}
          <div className="">
            <form action="/" className="flex flex-col">
              <div className="pt-3 pb-7 w-full">
                <input
                  name="name"
                  autoCorrect="off"
                  placeholder="What's the event?..."
                  className="border-none p-2 w-full outline-none font-inherit resize-none text-2xl"
                  autoFocus={true}
                  //value={content}
                  //onChange={handleOnChange}
                />
              </div>
              <DatePicker />
              <div className="flex justify-between items-center">
                <div className="flex mr-2">
                  {LEGEND_COLORS.map((color, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center text-xs text-gray py-1"
                      >
                        <div
                          className={`${color.colorClass} rounded-full w-5 h-5 mr-2`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
                <button type="submit" className="gen-link">
                  SAVE
                </button>
              </div>
            </form>
          </div>
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
  },
};

const slotProps = {
  backdrop: {
    style: {
      backgroundColor: "rgba(255,255,255,0.5)",
    },
  },
};
