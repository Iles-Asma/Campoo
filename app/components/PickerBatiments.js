import React from 'react';
import { StyleSheet, SafeAreaView } from "react-native";
// import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

export default class PickerBatiments extends React.Component {
	constructor(props) {
		super(props);

		this.inputRefs = {};

		this.state = {
			BatName: undefined,
			items: [],
		};
	}

	componentDidMount() {
		fetch("https://campoo.fr/api/building")
			.then(res => res.json())
			.then(json => this.setState({ items: json.Data }))
			.then(() => {
				this.setState({
					items: this.state.items.map(item => ({
						key: item.id,
						label: item.name,
						value: item.id,
					}))
				})

			})
	}


	render() {


		return (

			<SafeAreaView style={styles.container}>

				<RNPickerSelect
					placeholder={{
						label: 'Choisis ton batiment',
						value: null,
					}}
					items={this.state.items}
					onValueChange={this.props.onValueChange}

					style={{ ...pickerSelectStyles }}
					value={this.state.items.name}
					ref={(el) => {
						this.inputRefs.picker = el;
					}}
				/>


			</SafeAreaView>

		);
	}


}







const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		alignItems: "center"
	}
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		marginTop: 5,
		fontSize: 16,
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
		borderWidth: 3,
		borderColor: '#4D3D64',
		borderRadius: 30,
		backgroundColor: 'white',
		color: 'black',
	},
});

