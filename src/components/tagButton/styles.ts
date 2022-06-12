import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  padding: 7px 15px;
  margin-right: 10px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts[600]};
`;