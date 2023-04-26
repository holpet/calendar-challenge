import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { SetStateAction, useEffect, useState } from "react";
import Form from "./components/Form";
import { COLORS } from "../../../lib/themeHardcoded";
import { INIT_MODAL_DATA } from "../../../lib/modal_utils/modalUtils";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FormHeader from "./components/FormHeader";
import { getDateFromFormatted } from "../../../lib/db/dbUtils";
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

  /* ---------------------------------------------------- form data states */
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>(
    selectedDates.start || getDateFromFormatted(now)
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    selectedDates.end || getDateFromFormatted(now)
  );
  const [activeColor, setActiveColor] = useState<string>(INIT_MODAL_DATA.color);
  const [activeFont, setActiveFont] = useState<string>(INIT_MODAL_DATA.font);

  /* ------------------------------------------------- end form data states */

  useEffect(() => {
    // NEW EVENT
    if (activeEvent === null) {
      setEventName("");
      setStartDate(selectedDates.start);
      setEndDate(selectedDates.end);
      setActiveColor(INIT_MODAL_DATA.color);
      setActiveFont(INIT_MODAL_DATA.font);
    }
    // SAVED EVENT
    else {
      setEventName(activeEvent.title + "");
      setStartDate(dayjs(activeEvent.start + ""));
      setEndDate(dayjs(activeEvent.end + ""));
      setActiveColor("orange"); /// TODO: convert colors #f58546 into names
      setActiveFont(activeEvent.font + "");
    }
  }, [activeEvent]);

  /*  ****** design props for modal ******  */
  const theme = createTheme({
    palette: {
      primary: {
        main: `${COLORS[activeColor as keyof typeof COLORS]}`,
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
      border: `10px solid ${COLORS[activeColor as keyof typeof COLORS]}`,
      borderRadius: "20px",
      backgroundColor: `${
        COLORS[(activeColor + "-300") as keyof typeof COLORS]
      }`,
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
        PaperProps={paperProps}
        slotProps={slotProps}
      >
        <div className="p-6 overflow-visible relative">
          {/* ------ LABEL of EVENT DATA ------ */}
          <FormHeader activeColor={activeColor} />
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
