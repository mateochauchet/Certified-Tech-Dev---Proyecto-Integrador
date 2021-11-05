import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css'
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import React, { Component } from "react";
import {
    HORIZONTAL_ORIENTATION,
    VERTICAL_ORIENTATION,
} from "react-dates/src/constants";
import { Mobile, Tablet } from "./Responsive";


class Fecha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            width: window.outerWidth,
            orientation: VERTICAL_ORIENTATION,

        }
    }
    render() {
        return (

            <>
                <Mobile>
                    <DayPickerRangeController
                        numberOfMonths={1}
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
                    />
                </Mobile>
                <Tablet>
                    <DayPickerRangeController
                        numberOfMonths={2}
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
                    />

                    {/* <DateRangePicker
                        numberOfMonths={2}
                        orientation={HORIZONTAL_ORIENTATION}
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,   
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    /> */}
                </Tablet>

            </>

        );
    }
}

export default Fecha;