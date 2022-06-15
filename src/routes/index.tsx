import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTheme } from "styled-components/native";
import { Details, Home } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {

	const theme = useTheme();

	return (
		<NavigationContainer theme={{ colors: { background: theme.colors.background } }}>
			<Navigator initialRouteName="home" screenOptions={{ headerShown: false }} >
				<Screen name="home" component={Home} />
				<Screen name="details" component={Details} />
			</Navigator>
		</NavigationContainer>
	);
}