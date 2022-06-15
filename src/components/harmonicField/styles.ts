import { transparentize } from "polished";
import styled from "styled-components/native";

export const Container = styled.View`
flex-direction: row;
height: 130px;
margin: 10px 0 20px;
/* border: 1px solid ${({ theme }) => transparentize(.95, theme.colors.text)}; */
`;