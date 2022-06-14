import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import { theme } from "./src/theme";

export default function App() {

	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold
	});

	if (!fontsLoaded)
		return (<AppLoading />);

	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
}
