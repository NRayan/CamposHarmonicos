import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
justify-content: flex-start;
background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: ${({ theme }) => theme.paddings.vertical} ${({ theme }) => theme.paddings.horizontal} 0;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts[600]};
    color: ${({ theme }) => theme.colors.text};    
`;

export const MenuButton = styled.TouchableOpacity`
    
`;

export const ScrollContainer = styled.View`
     margin: 20px 0;
     
`;

export const TagButtonsScrollView = styled.ScrollView`

`;