import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { Grow } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import Form from "./components/Form";
import {
  TO_HEX_COLORS,
  getColorNameFromHex,
} from "../../../lib/constants/themeHardcoded";
import { INIT_MODAL_DATA } from "../../../lib/constants/valuesHardcoded";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FormHeader from "./components/components/FormHeader";
import {
  activeEventAtom,
  now,
  selectedDatesAtom,
} from "../../../lib/atoms/globalAtoms";
import dayjs, { Dayjs } from "dayjs";
import { useAtom } from "jotai";

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
  const [selectedDates] = useAtom(selectedDatesAtom);
  const [activeEvent] = useAtom(activeEventAtom);

  /* ---------------------------------------------------- set form data */
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>(
    selectedDates.start || now
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    selectedDates.end || now
  );
  const [activeColor, setActiveColor] = useState<string>(INIT_MODAL_DATA.color);
  const [activeFont, setActiveFont] = useState<string>(INIT_MODAL_DATA.font);

  /* ------------------------------------------------- end set form data */

  useEffect(() => {
    // NEW EVENT
    if (activeEvent === null) {
      setEventName("");
      setStartDate(selectedDates.start);
      setEndDate(selectedDates.end);
      setActiveColor(INIT_MODAL_DATA.color);
      setActiveFont(INIT_MODAL_DATA.font);
    }
    // EDITED EVENT
    else {
      setEventName(activeEvent.title + "");
      setStartDate(dayjs(activeEvent.start + ""));
      setEndDate(dayjs(activeEvent.end + ""));
      setActiveColor(getColorNameFromHex(activeEvent.color + ""));
      setActiveFont(activeEvent.font + "");
    }
  }, [activeEvent, selectedDates]);

  /*  ****** design props for modal ******  */
  const theme = createTheme({
    palette: {
      primary: {
        main: `${TO_HEX_COLORS[activeColor as keyof typeof TO_HEX_COLORS]}`,
      },
    },
  });

  const paperProps = {
    sx: {
      width: 600,
      maxWidth: "75%",
      minWidth: 200,
    },
    style: {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 15px 29px 0px",
      border: `10px solid ${
        TO_HEX_COLORS[activeColor as keyof typeof TO_HEX_COLORS]
      }`,
      borderRadius: "5px",
      background: `linear-gradient(to right bottom, ${
        TO_HEX_COLORS[(activeColor + "-300") as keyof typeof TO_HEX_COLORS]
      },${"white"})`,
    },
  };

  const slotProps = {
    backdrop: {
      style: {
        backgroundColor: "rgba(255,255,255,0.6)",
      },
    },
  };

  function handleClose() {
    setOpen(false);
  }

  /*  ****** -------------MODAL--------------- ******  */

  return (
    <ThemeProvider theme={theme}>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Grow}
        PaperProps={paperProps}
        slotProps={slotProps}
        className={`transition-all duration-1000 ${
          open ? "rotate-0" : "rotate-12"
        }`}
      >
        <div className="p-6 overflow-hidden relative">
          {/* ------ LABEL of EVENT DATA ------ */}
          <FormHeader activeColor={activeColor} setOpen={setOpen} />
          {/* separator line */}
          <div
            className={`flexbox bg-gradient-to-r rounded-xl from-gray w-full h-2 mt-5`}
          ></div>

          {/* ------- FORM for EVENT DATA ------- */}
          <Form
            setOpen={setOpen}
            eventName={eventName}
            setEventName={setEventName}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
            activeFont={activeFont}
            setActiveFont={setActiveFont}
          />
        </div>
      </BootstrapDialog>
    </ThemeProvider>
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
