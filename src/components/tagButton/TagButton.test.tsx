import { render } from "@testing-library/react-native";
import React from "react";
import { RenderWithTheme } from "../../tests";
import { TagButton } from "./index";

it("Should render the component with label", () => {

	const label = "teste";
	
	const { getByText } = render(
		<RenderWithTheme>
			<TagButton title={label} selected={false} onPress={() => null} />
		</RenderWithTheme>
	);
	
	const component = getByText(label);
	expect(component).toBeTruthy();

});