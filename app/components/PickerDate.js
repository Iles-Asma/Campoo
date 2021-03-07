import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { CAMPOO } from '../../assets/themes/ThemeCampoo'

export default class PickerDate extends Component {

    render() {
        return (
            <DatePicker
                style={{ width: '100%', marginTop: 10, }}
                useNativeDriver={true}
                date={this.props.date}


                mode="date"
                showIcon={false}

                format="YYYY-MM-DD"
                minDate="1900-05-01"
                maxDate="2030-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{

                    dateInput: {

                        borderColor: CAMPOO.primary,
                        borderRadius: 10,
                        borderWidth: 1.5,
                        height: 30,
                        outline: "none"



                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={this.props.onDateChange}
            />
        )
    }
}