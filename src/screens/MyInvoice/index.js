import React, {Component} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import styled from 'styled-components/native';
import Menu from 'src/components/Menu';
import TabBar from 'src/components/TabBar';
import { navigate } from 'src/utils/navigation';
import { DataTable } from 'react-native-paper';

class MyInvoice extends Component {
  render () {    
    return (
      <ScrollView>
        <Container>      
          <Menu title="Paid" />
            <TabBar 
              tap1="Not Paid"
              route1="MyInvoice"
              tap2="Paid"
              route2="MyInvoice"
            />
            <MyTable>
              <DataTable.Row>
                <HeaderLeft>ID</HeaderLeft>
                <HeaderRight>Estimate accept</HeaderRight>
              </DataTable.Row>
              <TableRow>
                <LeftCell onPress={()=>navigate('Invoice', {paid: false})}>
                  <Text>View More(37)</Text>
                </LeftCell>
                <RightCell>
                  <Text>paid</Text>
                </RightCell>
              </TableRow>
              <TableRow>
                <LeftCell onPress={()=>navigate('Invoice', {paid: true})}>
                  <Text>View More(34)</Text>
                </LeftCell>
                <RightCell>
                  <Text>paid</Text>
                </RightCell>
              </TableRow>
              <TableRow>
                <LeftCell>
                  <Text></Text>
                </LeftCell>
                <RightCell>
                  <Text></Text>
                </RightCell>
              </TableRow>
              <TableRow>
                <LeftCell>
                  <Text></Text>
                </LeftCell>
                <RightCell>
                  <Text></Text>
                </RightCell>
              </TableRow>
              <TableRow>
                <LeftCell>
                  <Text></Text>
                </LeftCell>
                <RightCell>
                  <Text></Text>
                </RightCell>
              </TableRow>
              <TableRow>
                <LeftCell>
                  <Text></Text>
                </LeftCell>
                <RightCell>
                  <Text></Text>
                </RightCell>
              </TableRow>
              <TableRow>
                <LeftCell>
                  <Text></Text>
                </LeftCell>
                <RightCell>
                  <Text></Text>
                </RightCell>
              </TableRow>
            </MyTable>
        </Container>
      </ScrollView> 
    )
  }
};
export default MyInvoice;

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



