import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

export default function PickerDob() {

    const [date, setDate] = useState(new Date())

    return (
        <DatePicker
            mode='date'
            date={date}
            onDateChange={setDate}
        />
    )
}