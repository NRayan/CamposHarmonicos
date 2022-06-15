import React from "react";
import { useTheme } from "styled-components/native";
import { BackButton, HarmonicField, TagLabel } from "../../components";
import { CampoHarmonico } from "../../types";
import { Chords, Container, TagsContainer, ToneContainer, ToneLabel, ToneText, ToneTextContainer } from "./styles";

export function Details({ route }) {

	const campo: CampoHarmonico = route.params;
	const colors = useTheme().fieldsColors;

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

			<HarmonicField campoHarmonico={campo} />

			<TagsContainer>
				<TagLabel title="Tônica" color={colors.primary} />
				<TagLabel title="Dominante" color={colors.secondary}/>
			</TagsContainer>

			<TagsContainer>
				<TagLabel title="Subdominante" color={colors.teriary}/>
				<TagLabel title="Fraca" weak/>
			</TagsContainer>

		</Container>
	);
}