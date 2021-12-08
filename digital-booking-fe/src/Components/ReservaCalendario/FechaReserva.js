import 'react-dates/lib/css/_datepicker.css';
import '../Detalle/Fechas/react_dates_overrides.css'
import { DayPickerRangeController, CalendarDay } from 'react-dates';
import 'react-dates/initialize';
import React, { Component } from "react";
import moment from 'moment';

import isBeforeDay from 'react-dates/lib/utils/isBeforeDay';
import isAfterDay from 'react-dates/lib/utils/isAfterDay';

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

   
    
    render() {
        return (

            <>
                <Mobile>
                    <DayPickerRangeController

                        numberOfMonths={1}
                        isOutsideRange={this.isOutsideRange}
                        isDayBlocked={this.props.isBlocked}
                        disabledDays={this.props.disabledDays}
                        hideKeyboardShortcutsPanel={true}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onDatesChange={this.handleDateChange}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={this.handleFocusChange}
                    />
                    
                </Mobile>
                <Tablet>
                    <DayPickerRangeController
                        numberOfMonths={2}
                        isOutsideRange={this.isOutsideRange}
                        isDayBlocked={this.props.isBlocked}
                        disabledDays={this.props.disabledDays}
                        enableOutsideDays={false}
                        hideKeyboardShortcutsPanel={true}
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        onDatesChange={this.handleDateChange}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={this.handleFocusChange}
                    />
                </Tablet>
            </>
        );
    }
}

export default FechaReserva;