import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { TagButton } from "../../components";
import { Container, ScrollContainer, TagButtonsScrollView, Title } from "./styles";
import { camposHarmonicos } from "../../data";

const data = camposHarmonicos;

export function Home() {

	const theme = useTheme();

	const [maioresSelected, setMaioresSelected] = useState(true);
	const [menoresSelected, setMenoresSelected] = useState(true);
	const [sustenidosSelected, setSustenidosSelected] = useState(true);

	return (
		<>
			<StatusBar style="light" translucent={false} backgroundColor={theme.colors.background} />

			<Container>
				<Title style={{ color: "white" }}>Campos{"\n"}harmônicos</Title>

				<ScrollContainer>
					<TagButtonsScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: theme.paddings.horizontal }}>
						<TagButton title="maiores" selected={maioresSelected} onPress={() => { setMaioresSelected(!maioresSelected); }} />
						<TagButton title="menores" selected={menoresSelected} onPress={() => { setMenoresSelected(!menoresSelected); }} />
						<TagButton title="sustenidos" selected={sustenidosSelected} onPress={() => { setSustenidosSelected(!sustenidosSelected); }} />
					</TagButtonsScrollView>
				</ScrollContainer>

				<FlatList data={data} renderItem={() => (<></>)}>

				</FlatList>

			</Container>

		</>
	);
}