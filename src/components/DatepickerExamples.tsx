import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


export const DatepickerExamples = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateSelect = (e) => {

    console.log('handleDateSelect', e)
  }
  const handleDateChange = (e) => {
    setStartDate(e)
    console.log('handleDateChange')
  }

  //const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onSelect={handleDateSelect} //when day is clicked
        onChange={handleDateChange} //only when value has changed
      />
      <hr />
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp ss"
      />
      <h2>Custom</h2>
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        selected={startDate}
        onSelect={handleDateSelect} //when day is clicked
        onChange={handleDateChange} //only when value has changed
      />
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      /></>

  )
}