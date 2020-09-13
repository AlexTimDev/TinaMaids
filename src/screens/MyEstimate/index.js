import React, {Component} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import styled from 'styled-components/native';
import Menu from 'src/components/Menu';
import TabBar from 'src/components/TabBar';
import { navigate } from 'src/utils/navigation';
import { DataTable } from 'react-native-paper';


class MyEstimate extends Component {
  render () {    
    return (
      <ScrollView>
        <Container>      
          <Menu title="My Estimate" />
            <TabBar 
              tap1="My Estimates"
              route1="MyEstimate"
              tap2="Request New"
              route2="InformationScreen"
            />
            <MyTable>
              <DataTable.Row>
                <HeaderLeft>ID</HeaderLeft>
                <HeaderRight>Estimate accept</HeaderRight>
              </DataTable.Row>
              <TableRow>
                <LeftCell onPress={()=>navigate('PersonalInfo', {accept: false})}>
                  <Text>View More(33)</Text>
                </LeftCell>
                <RightCell>
                  <Text>Pending</Text>
                </RightCell>
              </TableRow>
              <TableRow>
                <LeftCell onPress={()=>navigate('PersonalInfo', {accept: true})}>
                  <Text>View More(34)</Text>
                </LeftCell>
                <RightCell>
                  <Text>Estimate accept</Text>
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
export default MyEstimate;

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


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  }
});

  

