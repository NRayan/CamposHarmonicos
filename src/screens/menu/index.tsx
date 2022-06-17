import React from "react";
import { View } from "react-native";
import { BackButton } from "../../components";
import { Button, ButtonText, Container, Title } from "./styles";

export function Menu() {
	return (
		<Container>

			<BackButton title="Menu" applyPadding/>

			<Title>Dicas</Title>
			<Button>
				<View style={{ height: 20, width: 20, backgroundColor: "red" }} />
				<ButtonText>Acordes</ButtonText>
			</Button>

			<Button>
				<View style={{ height: 20, width: 20, backgroundColor: "red" }} />
				<ButtonText>Campos harmônicos</ButtonText>
			</Button>

			<Button showBottomBorder>
				<View style={{ height: 20, width: 20, backgroundColor: "red" }} />
				<ButtonText>Cadência</ButtonText>
			</Button>

			<Title>Tema</Title>

			<Button>
				<View style={{ height: 20, width: 20, backgroundColor: "red" }} />
				<ButtonText>Claro</ButtonText>
			</Button>

			<Button showBottomBorder>
				<View style={{ height: 20, width: 20, backgroundColor: "red" }} />
				<ButtonText>Escuro</ButtonText>
			</Button>

		</Container>
	);
}