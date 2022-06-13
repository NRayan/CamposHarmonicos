import React from "react";
import { CampoHarmonico } from "../../types";
import { Container, Title } from "./styles";

type Props =
	{
		campoHarmonico: CampoHarmonico
	}

export function ChordButton({ campoHarmonico }: Props) {
	return (
		<Container>
			<Title>{campoHarmonico.tom.sigla}</Title>
		</Container>
	);
}