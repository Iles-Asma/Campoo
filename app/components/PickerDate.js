import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function PickerDate() {
	const [date, setDate] = useState(new Date(1598051730000));
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);
	};

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	const showTimepicker = () => {
		showMode('time');
	};

	return (
		<View>
			<View>
				<Button onPress={showDatepicker} title="Show date picker!" />
			</View>
			<View>
				<Button onPress={showTimepicker} title="Show time picker!" />
			</View>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={date}
					mode={mode}
					is24Hour={true}
					display="default"
					onChange={onChange}
				/>
			)}
		</View>
	);
};

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