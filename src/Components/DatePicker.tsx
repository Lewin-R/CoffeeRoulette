import React, {useRef} from "react";
import {DateObject} from "react-multi-date-picker";
import {Calendar} from "react-multi-date-picker"
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

let times: DateObject[] = [];

export default function DatePickerComp() {
    const calendarRef = useRef<any>();
    return (
        <>
            <Calendar
                ref={calendarRef}
                format="DD/MM/YYYY HH:mm:ss"
                multiple={true}
                plugins={[
                    <DatePickerHeader
                        position="top"
                        size="medium"
                    />,
                    <TimePicker position="bottom"/>,
                    <DatePanel
                        position={"right"}
                        sort="date"
                    />,

                ]}
                onChange={array => {times.join()}}
            />

        </>
    );
}
