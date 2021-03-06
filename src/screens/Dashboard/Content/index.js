import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import styled from 'styled-components/native'
import { Colors } from 'src/theme';
import { navigate } from 'src/utils/navigation';

const Content = (props) => {
  return (
    <Container>
      <Row>
        <StyleButton onPress={()=>navigate('MyEstimate')}>
            <Image source={require('src/assets/img/dashboard/dash1.png')} />
            <Title>Book Job</Title>
        </StyleButton>
        <StyleButton onPress={()=>navigate('MyAppointment')}>
            <Image source={require('src/assets/img/dashboard/dash2.png')} />
            <Title>Scheduled Jobs</Title>
        </StyleButton>
      </Row>
      <Row>
        <StyleButton onPress={() => navigate('MyMessageScreen')} bgColor={Colors.textColor}>
            <Image source={require('src/assets/img/dashboard/dash3.png')} />
            <Title>Messages</Title>
        </StyleButton>
        <StyleButton onPress={() => navigate('MyEstimate')}>
            <Image source={require('src/assets/img/dashboard/dash4.png')} />
             <Title>My Estimates</Title>
        </StyleButton>
      </Row>
      <Row>
        <StyleButton onPress={()=>navigate('Support')}>
            <Image source={require('src/assets/img/dashboard/dash5.png')} />
            <Title>Get Help</Title>
        </StyleButton>
        <StyleButton>
            <Image source={require('src/assets/img/dashboard/dash6.png')} />
            <Title>Locations</Title>
        </StyleButton>
      </Row>

    </Container>
  )
}

export default Content

const Container = styled(View)`
  width: 100%;
  height: 630px;
  align-items: center;
  padding-vertical: 10px;
`
const StyleButton = styled(TouchableOpacity)`
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 3.87px;
  shadow-offset: 0 2px;
  elevation: 5;
  width: 47%;
  height: 170px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
  align-items: center;
  margin-bottom: 30px;
  background-color : #fff 
`
//background color must be set
const Row = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 20px; 
  margin-top: 10px;
`
const Title = styled(Text)`
  font-size: 15px;
  margin-top: 15px;
`