import { default as Add } from "@mui/icons-material/AddCircle";
import { colors } from "../SidePanel";
import EditModal from "../../calendar/calendar_edit_cards/EditModal";
import { useState } from "react";

const Create = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <EditModal open={open} setOpen={setOpen} />
      <div
        onClick={() => setOpen(true)}
        className="flex justify-between items-center mb-8 p-1 border-b-[5px] border-lightest-gray hover:cursor-pointer"
      >
        <h3 className="ml-1 font-light text-base">Create...</h3>
        <div className="hover:scale-105 transition-all">
          <Add fontSize="large" sx={{ color: `${colors.purple1}` }} />
        </div>
      </div>
    </>
  );
};

export default Create;
