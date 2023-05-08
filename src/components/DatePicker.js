import React from "react";
import moment from "moment";

function DatePicker({ setDate }) {
  
  function WeekTransform(date) {
    var dateToday = moment();
    var dateEndPlacement = new Date(date);
    var totalYears = dateToday.diff(dateEndPlacement, 'years')
    var currentYearDate = moment(dateEndPlacement).add(totalYears, 'years')
    var currentYearWeeks = dateToday.diff(currentYearDate, 'weeks')
    setDate(totalYears*52+currentYearWeeks)
  }

  return (
<>
      <div className="col-auto">
        <label htmlFor="date-picker" className="col-form-label text-secondary">
          Select your date bird
        </label>
      </div>
      <div className="col-auto">
        <input
          className="form-control col-form-label"
          type="date"
          onChange={(event) => WeekTransform(event.target.value)}
        />
      </div>
</>
  );
}

export default DatePicker;
