import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import { theme } from "./src/theme";

export default function App() {

	const [appIsReady, setAppIsReady] = useState(false);

	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold
	});

	useEffect(() => {
		if (fontsLoaded)
			setAppIsReady(true);
	}, [fontsLoaded]);

	useEffect(() => {
		async function prepare() {
			try {
				// Keep the splash screen visible while we fetch resources
				await SplashScreen.preventAutoHideAsync();
			} catch (e) {
				console.warn(e);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<View onLayout={onLayoutRootView} style={{ flex: 1 }}>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</View>
	);
}
