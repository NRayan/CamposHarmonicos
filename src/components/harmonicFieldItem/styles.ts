import { transparentize } from "polished";
import styled from "styled-components/native";

type ContainerProps =
    {
        color: string
    }

export const Container = styled.View`
flex: 1;
border: 1px solid ${({ theme }) => transparentize(.8, theme.colors.text)};;
`;

export const TitleContainer = styled.View<ContainerProps>`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${({ color }) => color};
`;

export const ValueContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const Text = styled.Text`
color: ${({ theme }) => theme.fieldsColors.text};
font-size: 16px;
font-family: ${({ theme }) => theme.fonts[700]};
`;

export const ValueText = styled(Text)`
color: ${({ theme }) => theme.colors.text};
`