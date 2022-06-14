import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components/native";
import { Details, Home } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {

	const theme = useTheme();

	return (
		<>
			<StatusBar backgroundColor={theme.colors.background} style="light" translucent={false} />

			<NavigationContainer>
				<Navigator initialRouteName="home" screenOptions={{ headerShown: false }} >
					<Screen name="home" component={Home} />
					<Screen name="details" component={Details} />
				</Navigator>
			</NavigationContainer>
		</>
	);
}