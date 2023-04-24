import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface IDatePickerProps {
  startDate: Dayjs | null;
  setStartDate: Dispatch<SetStateAction<Dayjs | null>>;
  endDate: Dayjs | null;
  setEndDate: Dispatch<SetStateAction<Dayjs | null>>;
  errorDate: boolean;
  setErrorDate: Dispatch<SetStateAction<boolean>>;
}

export default function DatePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  errorDate,
  setErrorDate,
}: IDatePickerProps) {
  const themeSx = {
    input: {
      color: "#8f98aa",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "large",
      letterSpacing: "0.05rem",
      backgroundColor: "#f3f1fc",
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

  function hasError(date1: Dayjs, date2: Dayjs) {
    return date1 > date2;
  }

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
              onChange={(newValue) => {
                setStartDate(newValue);
                if (hasError(dayjs(newValue), endDate!)) setErrorDate(true);
                else setErrorDate(false);
              }}
              format={format}
              fullWidth={true}
              sx={themeSx}
              formatDensity="spacious"
              InputLabelProps={{
                classes: { root: `${errorDate ? "Mui-error" : ""}` },
              }}
              InputProps={{
                classes: { root: `${errorDate ? "Mui-error" : ""}` },
              }}
            />
          </div>
          <div className="w-full">
            <DateTimeField
              label="END"
              name="endDate"
              value={endDate}
              onChange={(newValue) => {
                setEndDate(newValue);
                if (hasError(startDate!, dayjs(newValue))) setErrorDate(true);
                else setErrorDate(false);
              }}
              format={format}
              fullWidth={true}
              formatDensity="spacious"
              sx={themeSx}
              InputLabelProps={{
                classes: { root: `${errorDate ? "Mui-error" : ""}` },
              }}
              InputProps={{
                classes: { root: `${errorDate ? "Mui-error" : ""}` },
              }}
            />
          </div>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
