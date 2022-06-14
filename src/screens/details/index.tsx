import React from "react";
import { BackButton } from "../../components";
import { CampoHarmonico } from "../../types";
import { Chords, Container, ToneContainer, ToneLabel, ToneText, ToneTextContainer } from "./styles";

export function Details({ route }) {

	const campo: CampoHarmonico = route.params;

	return (
		<Container>

			<BackButton />

			<ToneContainer>
				<ToneLabel>Tom</ToneLabel>
				<ToneTextContainer>
					<ToneText>{campo.tom.sigla}</ToneText>
				</ToneTextContainer>
			</ToneContainer>

			<Chords>acordes</Chords>


		</Container>
	);
}