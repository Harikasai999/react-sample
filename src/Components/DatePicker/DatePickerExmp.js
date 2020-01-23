
import React,{useState} from 'react';
import DatePickers from "./DatePickers"
export default function DatePickerExmp() {
    return(
        <div style={{marginTop:10}}>
            <input type="date"/>
            <div style={{marginTop:10}}>
            <DatePickers/>
            </div>
        </div>
    )

}