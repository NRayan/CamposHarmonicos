import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
justify-content: flex-start;
background-color: ${({ theme }) => theme.colors.background};
padding: ${({ theme }) => theme.paddings.vertical} ${({ theme }) => theme.paddings.horizontal};
`;

export const Title = styled.Text`
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts[600]};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 15px;
`;