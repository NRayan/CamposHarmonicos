import { transparentize } from "polished";
import styled from "styled-components/native";

type TagColorProps =
    {
        color?: string
    }

export const Container = styled.View`
flex-direction: row;
align-items: center;
border-radius: 10px;
border: 1px solid ${({ theme }) => transparentize(.8, theme.colors.text)};
padding: 5px 10px;
margin-right: 10px;
`;

export const Title = styled.Text`
color: ${({ theme }) => transparentize(.4, theme.colors.text)};
font-size: 16px;
font-family: ${({ theme }) => theme.fonts[500]};
margin-right: 8px;
`;

export const TagColor = styled.View<TagColorProps>`
    height: 15px;
    width: 15px;
    background-color: ${({ color }) => color};
    border-radius: 10px;
    margin: 0 2px;
`;