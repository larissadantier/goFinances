import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { 
  Container,
  Header,
  UserInfo,
  UserWrapper,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon
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
    </Container>
  )
};

export default Dashboard;