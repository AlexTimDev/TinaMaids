import React, {Component} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet,} from 'react-native';
import styled from 'styled-components/native';
import Menu from 'src/components/Menu';
import TabBar from 'src/components/TabBar';
import { navigate } from 'src/utils/navigation';
import { DataTable } from 'react-native-paper';
import { Colors } from 'src/theme'
import RBSheet from "react-native-raw-bottom-sheet";
import SlideComponent from './SlideComponent'
import PersonalInfo from '../../MyEstimate/PersonalInfo';

class Invoice extends Component {
  render () {    
    return (
      <ScrollView>
        <Container>      
          <Menu title="Invoice" />
            <TabBar 
              tap1="Not Paid"
              route1="MyInvoice"
              tap2="Paid"
              route2="MyInvoice"
            />
            <InvoiceContainer>
              <InvoiceTitle>Invoice #33</InvoiceTitle>
              <PersonalInfoTitle>Affilaite12</PersonalInfoTitle>
              <PersonalInfoContent>+38121321312</PersonalInfoContent>
              <PersonalInfoContent>bogdan@webelevated.com</PersonalInfoContent>
              <PersonalInfoTitle>To</PersonalInfoTitle>
              <PersonalInfoContent>Jonnas Doe</PersonalInfoContent>
              <PersonalInfoContent>128 Timberwood Drive</PersonalInfoContent>
            </InvoiceContainer>
            <StatusBar>
              <StatusTitle>NOT PAID</StatusTitle>
            </StatusBar>
            <EstimateContainer>
              <PersonalInfoTitle>ESTIMATE</PersonalInfoTitle>
              <Text>#296</Text>
              <EstimatePriceTitle>Estimate Price</EstimatePriceTitle>
              <Text>$100</Text>
            </EstimateContainer>
            
            <DataTable>
                <DataTable.Header>
                <DataTable.Title>Service type</DataTable.Title>
                <DataTable.Title >Qty</DataTable.Title>
                <DataTable.Title >Price</DataTable.Title>
                <DataTable.Title >Total</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                <DataTable.Cell numberOfLines={2} >Regular Cleaning</DataTable.Cell>
                <DataTable.Cell>1</DataTable.Cell>
                <DataTable.Cell>$100</DataTable.Cell>
                <DataTable.Cell>$100</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell>SUBTOTAL:</DataTable.Cell>
                <DataTable.Cell>$100</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell numberOfLines={2}>GRAND TOTAL:</DataTable.Cell>
                <DataTable.Cell>$100</DataTable.Cell>
                </DataTable.Row>
            </DataTable>

            <SaveButton 
              bgColor = {Colors.textColor}
              onPress={()=>this.slideView.open()}
            >
              <ButtonTitle>Pay Now</ButtonTitle>
            </SaveButton>
            <Footer />
            <RBSheet
              ref={ref => {
                this.slideView = ref;
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
              <SlideComponent closeSlide={()=>this.slideView.close() }/>
            </RBSheet>
        </Container>
      </ScrollView> 
    )
  }
};
export default Invoice;

const Container = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
`;
const MyTable = styled(DataTable)`
  width: 90%;
  border-width: 0.5px;
  margin-top: 30px;
  border-color: gray;
`;
const HeaderLeft = styled(DataTable.Cell)`
  justify-content: center;
`;
const HeaderRight = styled(DataTable.Cell)`
  border-left-width: 0.5px;
  border-color: gray;
  align-items: center;
  justifyContent: center;
`;
const TableRow = styled(DataTable.Row)`
  border-top-width: 0.5px;
  border-color: gray;
`;
const LeftCell = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const RightCell = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-left-width: 0.5px;
  border-color: gray; 
`;
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
const InvoiceTitle = styled (Text)`
  font-size: 25px;
  font-weight: bold;
  
`
const InvoiceContainer = styled (View)`
  width: 100%;
  flex: 1;
  padding-horizontal: 10px;
  justify-content: center;
  margin-top: 20px;
`
const PersonalInfoTitle = styled (Text)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  padding-left: 10px;
`
const EstimatePriceTitle = styled (Text)`
  font-size: 20px;
  margin-top: 20px;
  margin-top: 30px;
`
const PersonalInfoContent = styled (Text)`
  padding-left: 20px;  
  margin-top: 5px;
  font-size: 15px;
`
const StatusBar = styled (View)`
  height: 40px;
  background-color: #F9CC34;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`
const StatusTitle = styled(Text)`
  font-size: 20px;
  height: 25px;
`
const EstimateContainer = styled(View)`
  align-items: flex-end;
  width: 100%;  
  padding-right: 20px;
`
const Footer = styled(View)`
  height: 30px;
`

