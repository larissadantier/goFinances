import React from 'react';
import {Text} from 'react-native';
import { 
  Container,
  Header,
  UserInfo,
  UserWrapper,
  Photo,
  User,
  UserGreeting,
  UserName
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
        </UserWrapper>
      </Header>
    </Container>
  )
};

export default Dashboard;