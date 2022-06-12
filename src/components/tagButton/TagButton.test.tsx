import { render } from "@testing-library/react-native";
import { TagButton } from "./index";
import React from "react";

it("Should render the component with label", () => {

	const label = "teste";
	const { getByText } = render(<TagButton title={label} />);
	const component = getByText(label);
	expect(component).toBeTruthy();
	
});