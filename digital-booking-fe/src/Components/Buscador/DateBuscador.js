import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import 'react-dates/initialize';
import React, { Component } from "react";
import {
    HORIZONTAL_ORIENTATION,
    VERTICAL_ORIENTATION,
  } from "react-dates/lib/constants.js";
  import { Mobile, Default } from "./Responsive";
  

class DateBuscador extends Component {
  
    constructor(props) {
        super(props);
        this.state = { 
            startDate: null,
            endDate: null,
            width: window.outerWidth,
            orientation: VERTICAL_ORIENTATION,

         }
    }
    
    handleDateChange = ({ startDate, endDate }) => {

      this.setState({ startDate, endDate }) 
      this.props.handleChange (startDate, endDate)
  }
  
    render() { 
        return (
            
            <>
        <Mobile>
          <DateRangePicker
            numberOfMonths={1}
            orientation={HORIZONTAL_ORIENTATION}
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            startDatePlaceholderText='Check-In'
            endDatePlaceholderText='Check-Out'
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={this.handleDateChange}
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,   
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            displayFormat={() => "YYYY/MM/DD"}
          />
          
        </Mobile>
        <Default>
          <DateRangePicker
            numberOfMonths={2}
            orientation={HORIZONTAL_ORIENTATION}
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            startDatePlaceholderText='Check-In'
            endDatePlaceholderText='Check-Out'
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={this.handleDateChange}
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,   
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            displayFormat={() => "YYYY/MM/DD"}
          />
        </Default>
        
      </>

          );
    }
}
 
export default DateBuscador;