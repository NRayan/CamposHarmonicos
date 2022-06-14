import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { transparentize } from "polished";
import React from "react";
import { useTheme } from "styled-components/native";
import { Container, Title } from "./styles";

export function BackButton() {
	const theme = useTheme();
	const navigation = useNavigation();

	function handlePress() {
		navigation.canGoBack() && navigation.goBack();
	}

	return (
		<Container onPress={handlePress}>
			<AntDesign name="left" color={transparentize(.3, theme.colors.text)} size={22} />
			<Title>Detalhes</Title>
		</Container>
	);
}