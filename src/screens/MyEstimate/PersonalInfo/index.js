import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'src/theme';
import { navigate } from 'src/utils/navigation';
import Menu from 'src/components/Menu'
import EstimateHeader from 'src/components/EstimateHeader'
import RBSheet from "react-native-raw-bottom-sheet";
import SlideComponent from './SlideComponent'

const PersonalInfo = (props) => {
  let slideView = null;
  return (
    <ScrollView>
      <Container>    
        <Menu title="Estimate"/>
        <EstimateHeader />  
        <Footer />
        <Title>My Estimate #343</Title>
        <Content textColor={Colors.textColor}>Your Information</Content>
        <Footer />
        <DetailContainer>
          <Detail>William Geronco</Detail>
        </DetailContainer>
        <DetailContainer>
          <Detail>william@geronco.com</Detail>
        </DetailContainer>
        <DetailContainer>
          <Detail>305-349-3423</Detail>
        </DetailContainer>
        <View style={{height: 20}} />
        <Content textColor={Colors.textColor}>About Your Job</Content>
        <Footer />
        <DetailContainer>
          <Detail>Residential</Detail>
        </DetailContainer>
        <DetailContainer>
          <Detail>Regular Cleaning</Detail>
        </DetailContainer>
        <DetailContainer>
          <Detail>One-time</Detail>
        </DetailContainer>
        <View style={{height: 20}} />
        <Content textColor={Colors.textColor}>About Your Home</Content>
        <Footer />
        <DetailContainer>
          <Detail>3 Bedrooms</Detail>
        </DetailContainer>
        <DetailContainer>
          <Detail>2 Bathrooms</Detail>
        </DetailContainer>
        <DetailContainer>
          <Detail>2100 SQ</Detail>
        </DetailContainer>
        <DetailContainer>
          <Detail>No Pets</Detail>
        </DetailContainer>
        <AddressContainer>
          <Detail>4475 US 1 S, {'\n'} St Augustine, FL 32086</Detail>
        </AddressContainer>
        {
            props.navigation.state.params.accept && 
            <SaveButton 
              bgColor = {Colors.textColor}
              onPress={()=>navigate('MyAppointment')}
            >
              <ButtonTitle>View Appointments</ButtonTitle>
            </SaveButton>
        }
        {
            !props.navigation.state.params.accept &&
            <SaveButton 
              bgColor = {Colors.textColor}
              onPress={()=>slideView.open()}
            >
              <ButtonTitle>Accept Estimate</ButtonTitle>
            </SaveButton>
        }
        <Footer />
        <RBSheet
          ref={ref => {
            slideView = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 10,
              borderRadius: 20,
              paddingHorizontal:20,
            }
          }}
        >
          <SlideComponent closeSlide={()=>slideView.close() }/>
        </RBSheet>
      </Container>
    </ScrollView>
  );
};
export default PersonalInfo;

const Container = styled(View)`
  flex: 1;
  align-items: center;
`;
const Title = styled(Text)`
  font-size: 22px;
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
const DetailContainer = styled(View)`
  width: 90%;
  height: 50px;
  border-radius: 4px;
  border-bottom-width: 1px;
  border-color: gray;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 20px;
`
const AddressContainer = styled(View)`
  width: 90%;
  height: 70px;
  border-radius: 4px;
  border-bottom-width: 1px;
  border-color: gray;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 20px;
`
const Detail = styled(Text)`
  font-size: 20px;
  flex: 1;
  width: 90%
  padding-left: 30px;
  margin-bottom: 10px;
`
const Footer = styled (View)`
  height: 40px;
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