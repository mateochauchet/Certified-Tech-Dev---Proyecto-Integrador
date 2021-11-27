import 'react-dates/lib/css/_datepicker.css';
import '../Detalle/Fechas/react_dates_overrides.css'
import { DayPickerRangeController, CalendarDay } from 'react-dates';
import 'react-dates/initialize';
import React, { Component } from "react";
import moment from 'moment';
import {
    HORIZONTAL_ORIENTATION,
    VERTICAL_ORIENTATION,
    START_DATE, END_DATE
} from "react-dates/lib/constants.js";
import { Mobile, Tablet } from "../Detalle/Fechas/Responsive";

class FechaReserva extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: 'startDate'
        }
    }
    
    handleDateChange = ({ startDate, endDate }) => {

        this.setState({ startDate, endDate }) 
        this.props.handleChange (startDate, endDate)
    }
     
    handleFocusChange = focusedInput => {
        this.setState({ focusedInput: focusedInput || 'startDate' })
    }

    dayClick = date => {
        console.log(date) 
    }

    isOutsideRange(day) {
        return (moment().diff(day) > 0);
    }
    isBlocked = momentDate => {
        const dayNumber = momentDate.format('YYYY/MM/DD');
        return dayNumber === "2021/11/24"  || dayNumber === "2021/11/25" || dayNumber === "2021/11/26" ||
        dayNumber === "2021/11/27"  || dayNumber === "2021/11/28" || dayNumber === "2021/11/29" || dayNumber === "2021/11/30"
        // const dayString = momentDate.format('dd');
        // return dayString === 'Sa' || dayString ==='Su'
    }
    
    
    render() {
        return (

            <>
                <Mobile>
                    <DayPickerRangeController

                        numberOfMonths={1}
                        isOutsideRange={this.isOutsideRange}
                        isDayBlocked={this.isBlocked}
                        hideKeyboardShortcutsPanel={true}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onDatesChange={this.handleDateChange}
                        //onDatesChange={({ START_DATE, END_DATE }) => this.setState({ START_DATE, END_DATE })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput}
                        //focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={this.handleFocusChange}
                        //onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    />
                    
                </Mobile>
                <Tablet>
                    <DayPickerRangeController
                        numberOfMonths={2}
                        isOutsideRange={this.isOutsideRange}
                        isDayBlocked={this.isBlocked}
                        enableOutsideDays={false}
                        hideKeyboardShortcutsPanel={true}
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        onDatesChange={this.handleDateChange}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={this.handleFocusChange}
                         // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
                    />
                    

                </Tablet>
                
            </>

        );
    }
}

export default FechaReserva;