import React from 'react';
import HighlightCard from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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
  Title,
  TransactionList
} from './styles';


 export interface DataListProps extends TransactionCardProps {
  id: string;
}

const Dashboard = () => {
  const data: DataListProps[] = [
    {
        id: '1',
        title: "Desenvolvimento de site",
        type: 'credited',
        amount: "R$ 12.000,00",
        category: {
          name: 'Vendas',
          icon: 'dollar-sign'
        },
        createdAt: "13/04/2020"
    },
    {
        id: '2',
        title: "Hamburgueria Pizzy",
        type: 'debited',
        amount: "R$ 59,00",
        category: {
          name: 'Alimentação',
          icon: 'coffee'
        },
        createdAt: "10/04/2020"
    },
    {
        id: '3',
        title: "Aluguel do apartamento",
        type: 'debited',
        amount: "R$ 1.200,00",
        category: {
          name: 'Casa',
          icon: 'home'
        },
        createdAt: "27/03/2020"
    }
  ];

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
        <TransactionList
         data={data}
         keyExtractor={item => item.id}
         renderItem={({item}) => <TransactionCard data={item} />}
        />
      </Transactions>

    </Container>
  )
};

export default Dashboard;