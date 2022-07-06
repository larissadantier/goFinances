import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import HighlightCard from '../../components/HighlightCard';

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
  HighlightCards
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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
      
    </Container>
  )
};

export default Dashboard;