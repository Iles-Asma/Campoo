import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function PickerDate() {
	const [date, setDate] = useState(new Date(1598051730000));
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(true);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);
	};

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};






	return (


		<View style={styles.pickerContainer}>


			{show && (
				<DateTimePicker style={styles.picker}
					Format="year month day"
					value={date}
					mode="date"

					display="default"
					onChange={onChange}
				/>
			)}
		</View>


	);
}

const styles = StyleSheet.create({
	pickerContainer: {
		width: '100%',
		flex: 1,
		borderWidth: 2,
	},

	picker: {
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30


	},

})