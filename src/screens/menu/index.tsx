import { Feather, Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { BackButton, InfoModal } from "../../components";
import { Button, ButtonText, Container, Title } from "./styles";

export function Menu() {

	const colors = useTheme().colors;

	const [selectedTheme, setSelectedTheme] = useState(0);

	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [modalInfoNumber, setModalInfoNumber] = useState<1 | 2 | 3>(1);

	function handleButtonPress(infoNumber: 1 | 2 | 3) {
		setModalInfoNumber(infoNumber);
		setModalVisible(true);
	}

	return (
		<Container>

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

			<Button onPress={() => setSelectedTheme(0)}>
				<Fontisto name={`radio-btn-${selectedTheme === 0 ? "active" : "passive"}`} size={22} color={colors.primary} />
				<ButtonText>Claro</ButtonText>
			</Button>

			<Button onPress={() => setSelectedTheme(1)} showBottomBorder>
				<Fontisto name={`radio-btn-${selectedTheme === 1 ? "active" : "passive"}`} size={22} color={colors.primary} />
				<ButtonText>Escuro</ButtonText>
			</Button>

			<InfoModal visible={modalVisible} infoNumber={modalInfoNumber} onClosePress={() => setModalVisible(false)} />

		</Container>
	);
}