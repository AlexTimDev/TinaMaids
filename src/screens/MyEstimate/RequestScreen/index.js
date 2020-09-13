import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'src/theme';
import { navigate } from 'src/utils/navigation';
import Menu from 'src/components/Menu'
import TabBar from 'src/components/TabBar'
import DatePicker from 'react-native-date-picker'


const RequestScreen = () => {
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
        <Title>Step 4 of 4</Title>
        <Content textColor={Colors.textColor}>Pick a date and time</Content>
        <Footer />
        <DatePicker
          date={new Date()}
        //   onDateChange={setDate}
        />
        <Footer />
        <InputTitle>Description:</InputTitle>
        <Input 
          placeholder="Please describe job here"
          multiline={true}
          // onChangeText={text => setText(text)}
        />
        <SaveButton 
          bgColor = {Colors.textColor}
          onPress={()=>navigate('ResultScreen')}
        >
          <ButtonTitle>Send Request</ButtonTitle>
        </SaveButton>
        <Footer />
      </Container>
    </ScrollView>
  );
};
export default RequestScreen;

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
  height: 250px;
  border-radius: 4px;
  border-width: 1px;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 20px;
  text-align-vertical: top;
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