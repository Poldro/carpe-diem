import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface MyDatePickerProps {
  startDate: Date;
  setStartDate: (date: Date) => void;
}

export const MyDatePicker: React.FC<MyDatePickerProps> = ({startDate, setStartDate}) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};
