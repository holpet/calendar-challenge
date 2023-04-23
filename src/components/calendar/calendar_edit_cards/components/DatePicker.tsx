import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface IDatePickerProps {
  startDate: Dayjs | null;
  setStartDate: Dispatch<SetStateAction<Dayjs | null>>;
  endDate: Dayjs | null;
  setEndDate: Dispatch<SetStateAction<Dayjs | null>>;
}

export default function DatePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: IDatePickerProps) {
  const themeSx = {
    input: {
      color: "#8f98aa",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "large",
      letterSpacing: "0.05rem",
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
              label="START"
              name="startDate"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              format={format}
              fullWidth={true}
              sx={themeSx}
              formatDensity="spacious"
            />
          </div>
          <div className="w-full">
            <DateTimeField
              label="END"
              name="endDate"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
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
