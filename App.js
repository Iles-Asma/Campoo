import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';



import Navigations from './app/routes/Navigations'




export default class App extends React.Component {


	render() {




		return (



			<NavigationContainer >
				<Navigations />
			</NavigationContainer>


		);


	}

}
