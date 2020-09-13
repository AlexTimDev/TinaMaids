import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import Menu from 'src/components/Menu';
import Header from './Header'
import Content from './Content'
const Dashboard = () => {
  return (
    <ScrollView>
      <Container>      
        <Menu message={true}/>
        <Header />
        <Content />
      </Container>
    </ScrollView>
  );
};
export default Dashboard;

const Container = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
`;
