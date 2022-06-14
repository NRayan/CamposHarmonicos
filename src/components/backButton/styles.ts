import { transparentize } from "polished";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
`;

export const Title = styled.Text`
margin-left: 10px;
color: ${({ theme }) => transparentize(.3, theme.colors.text)};
font-size: 18px;
font-family: ${({ theme }) => theme.fonts[500]};
`;