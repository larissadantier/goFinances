import styled from "styled-components/native";
import { AnyStyledComponent } from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface TransactionProps {
  type: 'credited' | 'debited'
}

export const Container = styled.View`
 background-color: ${({theme}) => theme.colors.shape};
 padding: 17px 24px;
 margin: 12px 0;
 border-radius: 5px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<TransactionProps>`
  color: ${({type, theme}) =>
    type === 'credited'
    ? theme.colors.success.main
    : theme.colors.attention.main
  };
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;


export const Category = styled.View`
  flex-direction: row;
  align-items: center;

`;

export const Icon = styled(Feather as unknown as AnyStyledComponent)`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;


export const CategoryName = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-left: 17px;
`;

export const CreatedAt = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
