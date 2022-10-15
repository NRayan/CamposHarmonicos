import { AntDesign, Feather, Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import { nativeApplicationVersion } from "expo-application";
import * as StoreReview from 'expo-store-review';
import React, { useContext, useState } from "react";
import { useTheme } from "styled-components/native";
import { BackButton, InfoModal } from "../../components";
import { ThemeContext } from "../../contexts";
import { Button, ButtonText, Container, Title, VersionText } from "./styles";

export function Menu() {

	const colors = useTheme().colors;

	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [modalInfoNumber, setModalInfoNumber] = useState<1 | 2 | 3>(1);

	const { theme, toogleTheme } = useContext(ThemeContext);

	function handleButtonPress(infoNumber: 1 | 2 | 3) {
		setModalInfoNumber(infoNumber);
		setModalVisible(true);
	}

	async function handleRateAppPress() {
		if (await StoreReview.hasAction()) {
			await StoreReview.requestReview();
		}
	}

	return (
		<Container contentContainerStyle={{ paddingBottom: 100 }}>

			<BackButton title="Menu" applyPadding />

			<Title>Dicas</Title>
			<Button onPress={() => handleButtonPress(1)}>
				<Feather name="music" size={22} color={colors.primary} />
				<ButtonText>Acordes</ButtonText>
			</Button>

			<Button onPress={() => handleButtonPress(2)}>
				<SimpleLineIcons name="music-tone" size={22} color={colors.primary} />
				<ButtonText>Campos harmônicos</ButtonText>
			</Button>

			<Button onPress={() => handleButtonPress(3)} showBottomBorder>
				<Feather name="activity" size={22} color={colors.primary} />
				<ButtonText>Cadência</ButtonText>
			</Button>

			<Title>Tema</Title>

			<Button onPress={() => toogleTheme("Light")}>
				<Fontisto name={`radio-btn-${theme.name === "Light" ? "active" : "passive"}`} size={22} color={colors.primary} />
				<ButtonText>Claro</ButtonText>
			</Button>

			<Button onPress={() => toogleTheme("Dark")} showBottomBorder>
				<Fontisto name={`radio-btn-${theme.name === "Dark" ? "active" : "passive"}`} size={22} color={colors.primary} />
				<ButtonText>Escuro</ButtonText>
			</Button>

			<Title>Outros</Title>
			<Button onPress={handleRateAppPress}>
				<AntDesign name="staro" size={22} color={colors.primary} />
				<ButtonText>Avalie o app</ButtonText>
			</Button>

			<VersionText>v{nativeApplicationVersion}</VersionText>

			<InfoModal visible={modalVisible} infoNumber={modalInfoNumber} onClosePress={() => setModalVisible(false)} />

		</Container>
	);
}