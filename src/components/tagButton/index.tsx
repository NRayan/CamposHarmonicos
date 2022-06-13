import React from "react";
import { Container, Title } from "./styles";

type Props =
	{
		title: string,
		selected: boolean,
		onPress: () => void
	}

export function TagButton({ title, selected, onPress }: Props) {

	function handleSelectedChanged() {
		onPress();
	}

	return (
		<Container selected={selected} onPress={handleSelectedChanged}>
			<Title selected={selected}>{title}</Title>
		</Container>
	);
}