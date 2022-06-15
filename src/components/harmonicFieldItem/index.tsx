import { Feather } from "@expo/vector-icons";
import { transparentize } from "polished";
import React from "react";
import { useTheme } from "styled-components/native";
import { Container, Text, TitleContainer, ValueContainer } from "./styles";

type Props = {
	weak?: boolean,
	title: string,
	value: string,
	color: string
}

export function HarmonicFieldItem({ title, value, weak,color }: Props) {

	const theme = useTheme();

	return (
		<Container>

			<TitleContainer color={color}>
				<Text>{title}</Text>
			</TitleContainer>

			<ValueContainer>
				<Text>{value}</Text>
			</ValueContainer>

			{
				weak &&
				<Feather size={14} color={transparentize(.5, theme.colors.text)}
					name={"chevrons-down"} style={{ position: "absolute", top: 3, right: 3 }} />
			}

		</Container>
	);
}