import { render } from "@testing-library/react-native";
import React from "react";
import { ChordButton } from ".";
import { camposHarmonicos } from "../../data";
import { RenderWithTheme } from "../../tests";
import { CampoHarmonico } from "../../types";

it("Should render the component with chord label", () => {

	const campoHarmonico: CampoHarmonico = camposHarmonicos[0];

	const { getByText } = render(
		<RenderWithTheme>
			<ChordButton campoHarmonico={campoHarmonico} />
		</RenderWithTheme>
	);
	const component = getByText(campoHarmonico.tom.sigla);
	expect(component).toBeTruthy();

});