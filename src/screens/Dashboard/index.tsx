import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import HighlightCard from '../../components/HighlightCard';
import TransactionCard from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserInfo,
  UserWrapper,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title
} from './styles';

const Dashboard = () => {
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/61429963?v=4'}}/>

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Larissa </UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard type="up" title="Entradas" amount="R$ 17.400,00" lastTransaction= "Última entrada dia 13 de abril" />
        <HighlightCard type="down" title="Saídas" amount="R$ 1.259,00" lastTransaction= "Última saída dia 03 de abril"/>
        <HighlightCard type='total' title="Total" amount="R$ 16.141,00" lastTransaction= "01 à 16 de abril"/>
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionCard
          title="Desenvolvimento de site"
          amount="R$ 12.000,00"
          categoryName="Vendas"
          createdAt="10/04/2020"
          icon="dollar-sign"
        />
        <TransactionCard
          title="Hamburgueria Pizzy"
          amount="- R$ 59,00"
          categoryName="Alimentação"
          createdAt="10/04/2020"
          icon="coffee"
        />
      </Transactions>

    </Container>
  )
};

export default Dashboard;