import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { SetStateAction, useState } from "react";
import { default as CalendarIcon } from "@mui/icons-material/EventAvailable";
import { default as DeleteIcon } from "@mui/icons-material/DeleteOutline";
import { LEGEND_COLORS } from "../../../lib/modal_utils/modalUtils";
import Form from "./components/Form";
import { COLORS } from "../../../lib/themeHardcoded";
import { INIT_MODAL_DATA } from "../../../lib/modal_utils/modalUtils";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAtom } from "jotai";
import { activeEventAtom } from "../../../lib/atoms/globalAtoms";

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
  const [activeColor, setActiveColor] = useState<string>(INIT_MODAL_DATA.color);
  const [activeFont, setActiveFont] = useState<string>(INIT_MODAL_DATA.font);

  const [activeEvent, setActiveEvent] = useAtom(activeEventAtom);

  function isALegendProperty(str: string): str is keyof typeof LEGEND_COLORS {
    //alert(`str: ${str}`);
    return ["orange", "purple", "white", "green", "pink"].includes(str);
  }

  /*  ****** design props for modal ******  */
  const theme = createTheme({
    palette: {
      primary: {
        main: COLORS.purple,
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
      border: `10px solid ${COLORS.purple}`,
      borderRadius: "20px",
      backgroundColor: `${COLORS["purple-300"]}`,
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2">
                <CalendarIcon style={{ color: COLORS.purple }} />
              </div>
              {/* meaning of color label */}
              <div className="text-dark-gray">
                {LEGEND_COLORS[activeColor as keyof typeof LEGEND_COLORS]
                  .meaning || LEGEND_COLORS.purple.meaning}
              </div>
            </div>
            {/* delete event */}
            <div>
              <DeleteIcon style={{ color: "gray" }} />
            </div>
          </div>
          {/* separator line */}
          <div
            className={`flexbox bg-gradient-to-r rounded-xl from-gray w-full h-2 mt-5`}
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
