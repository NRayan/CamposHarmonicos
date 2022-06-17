import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { transparentize } from "polished";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { ChordButton, TagButton } from "../../components";
import { camposHarmonicos } from "../../data";
import { CampoHarmonico } from "../../types";
import { Container, HeaderContainer, MenuButton, ScrollContainer, TagButtonsScrollView, Title } from "./styles";


const allData: CampoHarmonico[] = camposHarmonicos;

export function Home() {

	const theme = useTheme();
	const navigation = useNavigation();

	const [maioresSelected, setMaioresSelected] = useState(true);
	const [menoresSelected, setMenoresSelected] = useState(true);
	const [sustenidosSelected, setSustenidosSelected] = useState(true);
	const [data, setData] = useState<CampoHarmonico[]>([]);

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

	function handleMenuPressed() {
		navigation.navigate("menu");
	}

	return (
		<Container>
			<HeaderContainer>
				<Title>Campos{"\n"}harmônicos</Title>
				<MenuButton onPress={handleMenuPressed}>
					<Feather name="menu" size={32} color={transparentize(.1, theme.colors.text)} />
				</MenuButton>
			</HeaderContainer>
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