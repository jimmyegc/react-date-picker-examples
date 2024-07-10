import { useState } from "react";
import DatePicker from "react-datepicker";
import { newDate } from "react-datepicker/dist/date_utils";
import "react-datepicker/dist/react-datepicker.css";

interface DRPProps {
  status: "enabled" | "disabled"
}

interface ListItem {
  id: string
  rawDate: string
  humanDate: string
  status: string
}

export const DateRangePicker = ({ status }: DRPProps) => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [list, setList] = useState<ListItem[]>([])

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    console.log("startDate: " + startDate + " endDate:" + endDate)

    setStartDate(startDate);
    setEndDate(endDate);
    const rawDate = (startDate === endDate) ? startDate : "" + startDate + "" + endDate
    //const humanDate = (startDate === endDate) ? new Date(startDate).toDateString() : "" + new Date(startDate).toDateString() + " - " + newDate(endDate).toDateString()
    const newDateSelected: ListItem = {
      id: crypto.randomUUID(),
      rawDate: rawDate,
      humanDate: new Date(startDate).toDateString(),
      status: status
    }
    setList([...list, newDateSelected])
    setEndDate(undefined)
  };

  const handleSelect = () => {
    console.log('handleSelect')
    handleChange([startDate, endDate])
  }

  const removeItem = (id: string) => {
    const updatedItems = list.filter((item) => item.id !== id);
    setList(updatedItems);
  };

  return <>
    <div className="container bg-light">
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}

        isClearable={true}
        selectsRange />
      <hr />
      <DatePicker
        selectsStart
        selected={startDate}
        onChange={(x) => setStartDate(x)}
        startDate={startDate}
      />
      <DatePicker
        selectsEnd
        selected={endDate}
        onChange={(x) => setEndDate(x)}
        onSelect={handleSelect}
        endDate={endDate}
        startDate={startDate}
        minDate={startDate}
      />


    </div>

    <div>
      {list.map((item) => (
        <div key={item.id}>
          <span>{item.humanDate}-{item.status}</span>
          <button className="btn btn-sm btn-danger"
            onClick={() => removeItem(item.id)}
          >Remove</button>
        </div>
      ))}
    </div>

  </>
}