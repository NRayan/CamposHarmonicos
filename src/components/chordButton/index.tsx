import { useNavigation } from "@react-navigation/native";
import React from "react";
import { CampoHarmonico } from "../../types";
import { Container, Title } from "./styles";

type Props =
	{
		campoHarmonico: CampoHarmonico
	}

export function ChordButton({ campoHarmonico }: Props) {

	const navigation = useNavigation();

	function handlePress() {
		navigation.navigate("details", campoHarmonico);
	}

	return (
		<Container onPress={handlePress}>
			<Title>{campoHarmonico.tom.sigla}</Title>
		</Container>
	);
}