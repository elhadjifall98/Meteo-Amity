import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AboutScreen from "./AboutScreen";
import GeoDataScreen from "./GeoDataScreen";
import MeteoScreen from "./MeteoScreen";
import MapScreen from "./MapScreen";

import { styles } from "../styles/styles";

const HomeScreen = ({ navigation }) => {
	const Tab = createBottomTabNavigator();

	return (
		<>
			<Tab.Navigator
				initialRouteName='Home'
				screenOptions={{
					tabBarActiveTintColor: "#000",
					tabBarInactiveTintColor: "#BBB",
					tabBarActiveBackgroundColor: "pink",
					tabBarInactiveBackgroundColor: "yellow",
				}}>
				<Tab.Screen
					name='GeoData'
					component={GeoDataScreen}
					options={{
						tabBarIcon: () => <Icon name='globe' size={20} />,
					}}
				/>
				<Tab.Screen
					name='About'
					component={AboutScreen}
					options={{
						tabBarIcon: () => <Icon name='message' size={20} />,
						tabBarBadge: 3,
					}}
				/>

				{/* <Tab.Screen
					name='Meteo'
					component={MeteoScreen}
					options={{
						tabBarIcon: () => <Icon name='layers' size={20} />,
					}}
				/>
				<Tab.Screen
					name='Map'
					component={MapScreen}
					options={{
						tabBarIcon: () => <Icon name='layers' size={20} />,
					}}
				/> */}
			</Tab.Navigator>
		</>
	);
};

export default HomeScreen;
