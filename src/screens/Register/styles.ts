import styled from 'styled-components/native';
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`

`

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;
`

export const Title = styled.Text `
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  padding-bottom: 19px;
`

export const Button = styled.TouchableOpacity ``