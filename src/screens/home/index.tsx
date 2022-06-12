import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { useTheme } from "styled-components/native";
import { TagButton } from "../../components";
import { Container, Title } from "./styles";

export function Home() {

	const theme = useTheme();

	return (
		<>
			<StatusBar style="light" translucent={false} backgroundColor={theme.colors.background} />

			<Container>
				<Title style={{ color: "white" }}>Campos{"\n"}harmônicos</Title>

				<View>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<TagButton title="Maiores" />
						<TagButton title="Menores" />
						<TagButton title="Sustenidos" />
					</ScrollView>
				</View>

				<FlatList data={[]} renderItem={() => (<View />)}>

				</FlatList>

			</Container>

		</>
	);
}