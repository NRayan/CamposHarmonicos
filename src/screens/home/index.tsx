import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { ChordButton, TagButton } from "../../components";
import { camposHarmonicos } from "../../data";
import { CampoHarmonico } from "../../types";
import { Container, ScrollContainer, TagButtonsScrollView, Title } from "./styles";

const allData: CampoHarmonico[] = camposHarmonicos;

export function Home() {

	const theme = useTheme();

	const [maioresSelected, setMaioresSelected] = useState(true);
	const [menoresSelected, setMenoresSelected] = useState(true);
	const [sustenidosSelected, setSustenidosSelected] = useState(true);

	useEffect(loadData, [maioresSelected, menoresSelected, sustenidosSelected]);

	function handleTagPress(pressed: "maiores" | "menores") {
		if (pressed === "maiores")
			menoresSelected && setMaioresSelected(!maioresSelected);

		if (pressed === "menores")
			maioresSelected && setMenoresSelected(!menoresSelected);
	}

	function loadData() {

		let campos: CampoHarmonico[] = allData;

		if (!maioresSelected) campos = campos.filter(x => !x.tom.maior);
		if (!menoresSelected) campos = campos.filter(x => x.tom.maior);
		if (!sustenidosSelected) campos = campos.filter(x => !x.tom.sustenido);

		setData(campos);
	}

	const [data, setData] = useState<CampoHarmonico[]>([]);

	return (
		<Container>
			<Title>Campos{"\n"}harmônicos</Title>

			<ScrollContainer>
				<TagButtonsScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: theme.paddings.horizontal }}>
					<TagButton title="maiores" selected={maioresSelected} onPress={() => handleTagPress("maiores")} />
					<TagButton title="menores" selected={menoresSelected} onPress={() => handleTagPress("menores")} />
					<TagButton title="sustenidos" selected={sustenidosSelected} onPress={() => setSustenidosSelected(!sustenidosSelected)} />
				</TagButtonsScrollView>
			</ScrollContainer>

			<FlatList
				contentContainerStyle={{ alignItems: "center" }}
				numColumns={2}
				data={data}
				renderItem={({ item }) => (<ChordButton campoHarmonico={item} />)}
			/>

		</Container>
	);
}