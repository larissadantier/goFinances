import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 18px;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary.main};
  border-radius: 5px;
`

export const Title = styled.Text`

  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`