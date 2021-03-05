
import React from 'react'



import DatePicker from 'react-native-datepicker'


export default class PickerDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
    }

    render() {
        return (
            <DatePicker
                style={{ width: '60%', marginTop: 50, }}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="JJ-MM-"
                minDate="2000-05-01"
                maxDate="20-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 60,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ date: date }) }}
            />
        )
    }
}