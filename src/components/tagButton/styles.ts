import { transparentize } from "polished";
import styled from "styled-components/native";

type buttonProps =
  {
    selected: boolean
  }

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: .9 }) <buttonProps>`
  border-radius: 100px;
  border:  1px solid ${({ theme, selected }) => selected ? theme.colors.background : transparentize(0.8, theme.colors.text)};
  padding: 7px 25px;
  margin-right: 10px;
  background-color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.background};
`;

export const Title = styled.Text<buttonProps>`
    color: ${({ theme, selected }) => selected ? theme.colors.text : transparentize(0.8, theme.colors.text)};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts[700]};
`;