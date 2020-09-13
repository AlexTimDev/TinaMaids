import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'src/theme';
import { navigate } from 'src/utils/navigation';
import Menu from 'src/components/Menu'
import EstimateHeader from 'src/components/EstimateHeader'

const InformationScreen = () => {
  return (
    <ScrollView>
      <Container>    
        <Menu title="My Estimates"/>
        <EstimateHeader />  
        <Footer />
        <Title>Step 1 of 4</Title>
        <Content textColor={Colors.textColor}>Your Information</Content>
        <Footer />
        
        <Input 
          placeholder="Full Name"
          // onChangeText={text => setText(text)}
        />
        <Input 
          placeholder="E-Mail"
          // onChangeText={text => setText(text)}
        />
        <Input 
          placeholder="Telephone(Cell)"
          // onChangeText={text => setText(text)}
        />
        <SaveButton 
          bgColor = {Colors.textColor}
          onPress={()=>navigate('JobScreen')}
        >
          <ButtonTitle>Next</ButtonTitle>
        </SaveButton>
        <Footer />
      </Container>
    </ScrollView>
  );
};
export default InformationScreen;

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
  background-color: white;
  flex: 1;
  width: 90%
  margin-bottom: 10px;
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