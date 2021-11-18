import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css'
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import React, { Component } from "react";
import moment from 'moment';
import {
    HORIZONTAL_ORIENTATION,
    VERTICAL_ORIENTATION,
    START_DATE, END_DATE
} from "react-dates/lib/constants.js";
import { Mobile, Tablet } from "./Responsive";

class Fecha extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            
        }
    }
    
    isOutsideRange(day) {
        return (moment().diff(day) > 0);
    }
    isBlocked = momentDate => {
        const dayNumber = momentDate.format('MM/DD/YYYY');
        return dayNumber === "11/19/2021" || dayNumber === "11/20/2021"
            || dayNumber === "12/25/2021" || dayNumber === "12/24/2021" || dayNumber === "12/23/2021"
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
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        
                    // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
                    />
                    
                </Mobile>
                <Tablet>
                    <DayPickerRangeController
                        numberOfMonths={2}
                        isOutsideRange={this.isOutsideRange}
                        isDayBlocked={this.isBlocked}
                        enableOutsideDays={false}
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        
                    // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
                    />

                </Tablet>

            </>

        );
    }
}

export default Fecha;