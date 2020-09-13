import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { navigate } from 'src/utils/navigation';
import Menu from '../../components/Menu';
import Theme from '../../theme/Theme';
import DatePicker from 'react-native-date-picker'

class AppointmentOne extends React.Component {
  state = {
    description: "",
    datetime: new Date(),
  };

  componentDidMount () {

  }
  
  componentDidUpdate(prevProps, prevState) {

  }

  onChangeDescription = (text) => {
    this.setState({description: text});
  }

  onChangeDateTime = (event, selectedDate) => {

      
    console.log(event);

    this.setState ( {
      datetime: event
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <Menu title="My Appointments" message={false}/>

          <View style={styles.toptitle}>
            <Text style={styles.texttitle}>
              New Appointment Request
            </Text>
          </View>

            <View style={{marginTop: 30, alignItems: "center"}}>
              <Text style={styles.texttitle}>
                Step 1 of 1
              </Text>
              <Text style={styles.text2}>
                Pick a date and time
              </Text>
            </View>

            <View style={{marginTop: 30, alignItems: "center"}}>
              <DatePicker
                mode="datetime"
                date={this.state.datetime}
                onDateChange={this.onChangeDateTime}
              />
            </View>

            <View style={styles.body}>
              <View style={styles.itemGroup}>
                <Text style={styles.title}>Description</Text>
                <TextInput
                    style={styles.areatext}
                    multiline={true}
                    numberOfLines={10}
                    placeholder={"Please describe your job here"}
                    textAlignVertical = "top"
                    paddingHorizontal={12}
                    onChangeText={(text) => this.onChangeDescription(text)}
                    value={this.state.description}
                />
                </View>
              
            </View>

            <View  style={styles.btnWrapper}>
              <TouchableOpacity onPress={() => navigate('ResultScreen')}>
                <Text style={styles.btn}>
                  Send Request
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginBottom: 20}}></View>
        </ScrollView>

      </View>
    );
  }
}
export default AppointmentOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  body: {
    paddingHorizontal: 20,
  },
  itemGroup: {

  },
  title: {
    paddingLeft: 20,
    marginTop: 15,
    marginBottom: 10,
    color: Theme.black,
    fontSize: Theme.fontTitle,
  },
  areatext: {
    paddingLeft: 20,
    borderColor: "#c7c7c7",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: Theme.fontTitle
  },
  btnWrapper: {
    marginTop: 50,
    alignSelf: "center",
    width: "70%",
    borderRadius: 8,
    borderWidth: 3,
    borderColor: Theme.black,
    backgroundColor: Theme.primaryDark,
  },
  btn: {
    color: Theme.white,
    fontSize: Theme.fontSubTitle,
    paddingHorizontal: 12,
    paddingVertical: 12,
    textAlign: "center"
  },
  toptitle: {
    height: 50,
    backgroundColor: 'lightgrey',
    borderBottomWidth: 0.6,
    justifyContent: "center"
  },
  texttitle: {
    marginLeft: 20,
    color: Theme.black,
    fontSize: Theme.fontTitle,
  },
  text2: {
    marginLeft: 20,
    color: Theme.primary,
    fontSize: 28,
  }
});
