import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'src/theme';
import { navigate } from 'src/utils/navigation';
import Menu from 'src/components/Menu'
import TabBar from 'src/components/TabBar'

const JobScreen = () => {
  return (
    <ScrollView>
      <Container>    
        <Menu title="My Estimates"/>
        <TabBar 
          tap1="My Estimates"
          route1="MyEstimate"
          tap2="Request New"
          route2="InformationScreen"
        />
        <Footer />
        <Title>Step 2 of 4</Title>
        <Content textColor={Colors.textColor}>About Your Job</Content>
        <Footer />
        <InputTitle>Service Type:</InputTitle>
        <Input 
          placeholder="Full Name"
          // onChangeText={text => setText(text)}
        />
        <InputTitle>Job Type:</InputTitle>
        <Input 
          placeholder="E-Mail"
          // onChangeText={text => setText(text)}
        />
        <InputTitle>Frequency:</InputTitle>
        <Input 
          placeholder="Telephone(Cell)"
          // onChangeText={text => setText(text)}
        />
        <SaveButton 
          bgColor = {Colors.textColor}
          onPress={()=>navigate('HomeScreen')}
        >
          <ButtonTitle>Next</ButtonTitle>
        </SaveButton>
        <Footer />
      </Container>
    </ScrollView>
  );
};
export default JobScreen;

const Container = styled(View)`
  flex: 1;
  align-items: center;
`;
const Title = styled(Text)`
  font-size: 25px;
  flex: 1;
  width: 90%;
  margin-bottom: 10px;
  text-align: center;
`
const Content = styled(Text)`
  font-size: 30px;
  flex: 1;
  width: 90%;
  color: ${props=>props.textColor}
  margin-bottom: 10px;
  text-align: center;
`
const Input = styled(TextInput)`
  width: 90%;
  height: 50px;
  border-radius: 4px;
  border-width: 1px;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 20px;
`
const InputTitle = styled(Text)`
  font-size: 20px;
  flex: 1;
  width: 90%
  margin-bottom: 10px;
  padding-left: 20px;
`
const Footer = styled (View)`
  height: 20px;
`
const SaveButton = styled (TouchableOpacity)`
  width: 80%;
  height: 60px;
  border-radius: 6px;
  border-width: 3px;
  background-color: ${props=>props.bgColor};
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const ButtonTitle = styled (Text)`
  font-size: 25px;
  color: white;
  height: 30px;
  text-align: center;
`