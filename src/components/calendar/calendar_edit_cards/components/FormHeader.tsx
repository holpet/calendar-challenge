import { default as CalendarIcon } from "@mui/icons-material/EventAvailable";
import { default as DeleteIcon } from "@mui/icons-material/DeleteOutline";
import { LEGEND_COLORS } from "../../../../lib/modal_utils/modalUtils";
import { TO_HEX_COLORS } from "../../../../lib/themeHardcoded";

interface IFormHeaderProps {
  activeColor: string;
}

const FormHeader = ({ activeColor }: IFormHeaderProps) => {
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
      <div>
        <DeleteIcon style={{ color: "gray" }} />
      </div>
    </div>
  );
};

export default FormHeader;
