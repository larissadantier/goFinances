import styled from 'styled-components/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import { AnyStyledComponent } from 'styled-components';


export const Container = styled.View`
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 12px;
  background-color: ${({theme}) => theme.colors.shape}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather as unknown as AnyStyledComponent)`
 color: ${({theme}) => theme.colors.success.main};
 font-size: ${RFValue(40)}px;
`

export const Footer = styled.View`
`;

export const Amount = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
`;

export const LastTransaction = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
`;  