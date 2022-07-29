import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TextInput)`
width: 100%;
margin-bottom: 8px;
padding: 18px;
border-radius: 5px;

color: ${({ theme }) => theme.colors.black};
font-family: ${({ theme }) => theme.fonts.regular};
font-size: ${RFValue(14)}px;

background-color: ${({ theme }) => theme.colors.shape}
`