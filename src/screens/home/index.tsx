import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { TagButton } from "../../components";
import { ChordButton } from "../../components/chordButton";
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

	function loadData() {

		let campos: CampoHarmonico[] = allData;

		if (!maioresSelected)
			campos = campos.filter(x => !x.tom.maior);

		if (!menoresSelected)
			campos = campos.filter(x => x.tom.maior);

		if (!sustenidosSelected)
			campos = campos.filter(x => !x.tom.sustenido);

		setData(campos);

	}

	const [data, setData] = useState<CampoHarmonico[]>([]);

	return (
		<>
			<StatusBar style="light" translucent={false} backgroundColor={theme.colors.background} />

			<Container>
				<Title>Campos{"\n"}harmônicos</Title>

				<ScrollContainer>
					<TagButtonsScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: theme.paddings.horizontal }}>
						<TagButton title="maiores" selected={maioresSelected} onPress={() => { setMaioresSelected(!maioresSelected); }} />
						<TagButton title="menores" selected={menoresSelected} onPress={() => { setMenoresSelected(!menoresSelected); }} />
						<TagButton title="sustenidos" selected={sustenidosSelected} onPress={() => { setSustenidosSelected(!sustenidosSelected); }} />
					</TagButtonsScrollView>
				</ScrollContainer>

				<FlatList
					contentContainerStyle={{ alignItems: "center" }}
					numColumns={2}
					data={data}
					renderItem={({ item }) => (<ChordButton campoHarmonico={item} />)}
				/>

			</Container>

		</>
	);
}