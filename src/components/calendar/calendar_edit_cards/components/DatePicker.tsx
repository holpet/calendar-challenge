import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { now, selectedDateAtom } from "../../../../lib/atoms/globalAtoms";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAtom } from "jotai";

/** Creates init date, starting with hour 08:00 instead of current time. */
const createInitDate = (oldDate: Dayjs | null) => {
  if (oldDate === null) return null;
  const date = new Date(oldDate.year(), oldDate.month(), oldDate.date(), 8);
  return dayjs(date);
};

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [start, setStart] = useState<Dayjs | null>(
    createInitDate(selectedDate) || createInitDate(now)
  );
  const [end, setEnd] = useState<Dayjs | null>(
    createInitDate(selectedDate)?.add(4, "hour") ||
      createInitDate(now)!.add(4, "hour")
  );

  const themeSx = {
    input: {
      color: "#7e45db",
      fontWeight: "bold",
    },
    "& .MuiInputBase-root.Mui-focused .MuiInputBase-input": {
      color: "#8f98aa",
    },
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#7e45db",
      },
    },
  });

  const format = "DD.MM.YYYY   HH:mm";

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex pb-6 justify-between">
          <div className="w-full pr-6">
            <DateTimeField
              label="Start At"
              name="startDate"
              value={start}
              onChange={(newValue) => setStart(newValue)}
              format={format}
              fullWidth={true}
              sx={themeSx}
              formatDensity="spacious"
            />
          </div>
          <div className="w-full">
            <DateTimeField
              label="End At"
              name="endDate"
              value={end}
              onChange={(newValue) => setEnd(newValue)}
              format={format}
              fullWidth={true}
              formatDensity="spacious"
              sx={themeSx}
            />
          </div>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
