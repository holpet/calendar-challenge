import { default as Add } from "@mui/icons-material/AddCircle";
import EditModal from "../../calendar/calendar_edit_cards/EditModal";
import { useState } from "react";
import { TO_HEX_COLORS } from "../../../lib/constants/themeHardcoded";
import { useAtom } from "jotai";
import {
  INIT_SELECTED_DATES,
  activeEventAtom,
  selectedDatesAtom,
} from "../../../lib/atoms/globalAtoms";

const Create = () => {
  const [open, setOpen] = useState(false);
  const [, setActiveEvent] = useAtom(activeEventAtom);
  const [, setSelectedDates] = useAtom(selectedDatesAtom);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <EditModal open={open} setOpen={setOpen} />
      <div
        onClick={() => {
          setSelectedDates(INIT_SELECTED_DATES);
          setActiveEvent(null);
          setOpen(true);
        }}
        className="flex justify-between items-center mb-3 p-1 border-b-[5px] border-lightest-gray hover:cursor-pointer"
      >
        <h3 className="ml-1 font-light text-base">Create...</h3>
        <div
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <Add
            fontSize="large"
            sx={{
              color: `${
                isHovered ? TO_HEX_COLORS.green : TO_HEX_COLORS.purple
              }`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Create;
