import { render } from "@testing-library/react-native";
import {ChordButton} from ".";
import React from "react";

it("Should render the component with chord label", () => {

	const label = "teste";
	const { getByText } = render(<ChordButton />);
	const component = getByText(label);
	expect(component).toBeTruthy();
	
});