import styled from 'styled-components/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  padding-bottom: 19px;
`

export const Button = styled.TouchableOpacity``

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;

  padding: 24px;
`

export const Fields = styled.View`

`