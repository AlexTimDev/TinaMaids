import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'src/theme';
import { navigate } from 'src/utils/navigation';
import Menu from 'src/components/Menu'

const SpeakScreen = () => {
  return (
    <ScrollView>
      <Container>      
        <Menu title="Speak To Us"/>
        <Footer />
        <InputTitle>Name:</InputTitle>
        <Input 
          placeholder="Jonnas Doe"
          // onChangeText={text => setText(text)}
        />
        <InputTitle>Email:</InputTitle>
        <Input 
          placeholder="customer@test.com"
          // onChangeText={text => setText(text)}
        />
        <InputTitle>Phone:</InputTitle>
        <Input 
          placeholder="978-880-2324"
          // onChangeText={text => setText(text)}
        />
        <InputTitle>Address:</InputTitle>
        <Input 
          placeholder="128 TimberWood Drive"
          // onChangeText={text => setText(text)}
        />
        <InputTitle>State:</InputTitle>
        <Input 
          placeholder="Florida"
          // onChangeText={text => setText(text)}
        />
        <InputTitle>Branch Location:</InputTitle>
        <Input 
          placeholder="St Augustine"
          // onChangeText={text => setText(text)}
        />
        <InputTitle>Zip:</InputTitle>
        <Input 
          placeholder="32084"
          // onChangeText={text => setText(text)}
        />
        <InputTitle>Message</InputTitle>
        <MessageInput 
          placeholder="Type your message here"
          multiline={true}
          // onChangeText={text => setText(text)}
        />
        <Footer />
        <SaveButton 
          bgColor = {Colors.textColor}
          onPress = {()=>navigate('ResultScreen')}
        >
          <ButtonTitle>Send</ButtonTitle>
        </SaveButton>
        <Footer />
      </Container>
    </ScrollView>
  );
};
export default SpeakScreen;

const Container = styled(View)`
  flex: 1;
  align-items: center;
`;
const Input = styled(TextInput)`
  width: 90%;
  height: 50px;
  border-radius: 4px;
  border-width: 1px;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 10px;
`
const MessageInput = styled(TextInput)`
  width: 90%;
  height: 170px;
  border-radius: 4px;
  border-width: 1px;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 10px;
  text-align-vertical: top;
`
const InputTitle = styled(Text)`
  font-size: 20px;
  flex: 1;
  width: 90%
  margin-bottom: 10px;
`
const Footer = styled (View)`
  height: 20px;
`
const SaveButton = styled (TouchableOpacity)`
  width: 60%;
  height: 50px;
  border-radius: 6px;
  border-width: 3px;
  background-color: ${props=>props.bgColor};
  justify-content: center;
  align-items: center;
`
const ButtonTitle = styled (Text)`
  font-size: 20px;
  color: white;
  height: 25px;
  text-align: center;
`