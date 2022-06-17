import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { transparentize } from "polished";
import React from "react";
import { useTheme } from "styled-components/native";
import { Container, Title } from "./styles";

type Props =
	{
		title: string,
		applyPadding?:boolean
	}

export function BackButton({ title,applyPadding }: Props) {

	const theme = useTheme();
	const navigation = useNavigation();

	function handlePress() {
		navigation.canGoBack() && navigation.goBack();
	}

	return (
		<Container applyPadding={applyPadding} onPress={handlePress} >
			<AntDesign name="left" color={transparentize(.1, theme.colors.text)} size={22} />
			<Title>{title}</Title>
		</Container>
	);
}