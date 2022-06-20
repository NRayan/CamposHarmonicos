import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components/native";
import { Details, Home, Menu } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {

	const theme = useTheme();

	return (
		<>
			<StatusBar backgroundColor={theme.colors.background} translucent={false} style={theme.name === "Dark" ? "light" : "dark"} />
			<NavigationContainer theme={{ colors: { background: theme.colors.background } }}>
				<Navigator initialRouteName="home" screenOptions={{ headerShown: false }} >
					<Screen name="home" component={Home} />
					<Screen name="details" component={Details} />
					<Screen name="menu" component={Menu} />
				</Navigator>
			</NavigationContainer>
		</>
	);
}