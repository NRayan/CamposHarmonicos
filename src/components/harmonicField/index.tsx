import React from "react";
import { useTheme } from "styled-components/native";
import { CampoHarmonico } from "../../types";
import { HarmonicFieldItem } from "../harmonicFieldItem";
import { Container } from "./styles";

type Props = {
    campoHarmonico: CampoHarmonico
}

export function HarmonicField({ campoHarmonico }: Props) {

	const colors = useTheme().fieldsColors;

	return (
		<Container>
			<HarmonicFieldItem title="I" color={colors.primary} value={campoHarmonico.acordes[0]} />
			<HarmonicFieldItem title="II" color={colors.teriary} value={campoHarmonico.acordes[1]} weak />
			<HarmonicFieldItem title="III" color={colors.primary} value={campoHarmonico.acordes[2]} weak />
			<HarmonicFieldItem title="IV" color={colors.teriary} value={campoHarmonico.acordes[3]} />
			<HarmonicFieldItem title="V" color={colors.secondary} value={campoHarmonico.acordes[4]} />
			<HarmonicFieldItem title="VI" color={colors.primary} value={campoHarmonico.acordes[5]} weak />
			<HarmonicFieldItem title="VII" color={colors.secondary} value={campoHarmonico.acordes[6]} weak />
		</Container>
	);
}