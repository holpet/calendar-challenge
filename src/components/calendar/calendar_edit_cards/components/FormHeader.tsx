import { default as CalendarIcon } from "@mui/icons-material/EventAvailable";
import { default as DeleteIcon } from "@mui/icons-material/DeleteOutline";
import { LEGEND_COLORS } from "../../../../lib/modal_utils/modalUtils";
import { TO_HEX_COLORS } from "../../../../lib/themeHardcoded";
import { useAtom } from "jotai";
import { activeEventAtom, eventsAtom } from "../../../../lib/atoms/globalAtoms";
import { Dispatch, SetStateAction } from "react";

interface IFormHeaderProps {
  activeColor: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const FormHeader = ({ activeColor, setOpen }: IFormHeaderProps) => {
  const [events, setEvents] = useAtom(eventsAtom);
  const [activeEvent] = useAtom(activeEventAtom);

  function handleDelete() {
    if (activeEvent !== null) {
      const eventsAfterDelete = events.filter(function (returnableObjects) {
        return returnableObjects.id !== activeEvent.id;
      });
      setEvents(eventsAfterDelete);
    }
    setOpen(false);
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-2">
          <CalendarIcon style={{ color: TO_HEX_COLORS.purple }} />
        </div>
        {/* meaning of color label */}
        <div className="text-dark-gray">
          {LEGEND_COLORS[activeColor as keyof typeof LEGEND_COLORS].meaning ||
            LEGEND_COLORS.purple.meaning}
        </div>
      </div>
      {/* delete event */}
      <div onClick={handleDelete} className="hover:cursor-pointer">
        <DeleteIcon style={{ color: TO_HEX_COLORS.purple }} />
      </div>
    </div>
  );
};

export default FormHeader;
