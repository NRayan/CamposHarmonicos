import React from "react";
import { Container, TagColor, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { transparentize } from "polished";
import { useTheme } from "styled-components/native";

type Props =
    {
        title: string,
        color?: string,
        weak?: boolean
    }

export function TagLabel({ title, color, weak }: Props) {

	const theme = useTheme();

	return (
		<Container>
			<Title>{title}</Title>

			{
				weak ?
					<Feather size={20} color={transparentize(.5, theme.colors.text)} name={"chevrons-down"} />
					:
					<TagColor color={color}/>
			}

		</Container>
	);
}