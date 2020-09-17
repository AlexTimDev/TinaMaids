import React, { version } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { navigate } from 'src/utils/navigation';
import Menu from '../../components/Menu';
import Theme from '../../theme/Theme';
import DatePicker from 'react-native-date-picker'

const DATA = [
  {
    id: 1,
    view_no: 341,
    year: "2020",
    date: "March 27 2020(Wed)",
    time: "7:00 PM",
    desc: "Regular Cleaning",
  },
  {
    id: 2,
    view_no: 342,
    year: "2020",
    date: "March 27 2020(Wed)",
    time: "7:00 PM",
    desc: "Regular Cleaning",
  },
  {
    id: 3,
    view_no: 343,
    year: "2020",
    date: "March 27 2020(Wed)",
    time: "7:00 PM",
    desc: "Regular Cleaning",
  },
  {
    id: 4,
    view_no: 344,
    year: "2020",
    date: "March 27 2020(Wed)",
    time: "7:00 PM",
    desc: "Regular Cleaning",
  },
  {
    id: 5,
    view_no: 345,
    year: "2020",
    date: "March 27 2020(Wed)",
    time: "7:00 PM",
    desc: "Regular Cleaning",
  },
  {
    id: 6,
    view_no: 346,
    year: "2020",
    date: "March 27 2020(Wed)",
    time: "7:00 PM",
    desc: "Regular Cleaning",
  },
  {
    id: 7,
    view_no: 347,
    year: "2020",
    date: "March 27 2020(Wed)",
    time: "7:00 PM",
    desc: "Regular Cleaning",
  },
  {
    id: 8,
    view_no: 348,
    year: "2020",
    date: "March 27 2020(Wed)",
    time: "7:00 PM",
    desc: "Regular Cleaning",
  },

]

class MyAppointment extends React.Component {
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

  renerItem = (item, index) => {
    return (
      <View style={[styles.itemGroup, index % 2 != 0 ? { backgroundColor: 'white' } : {backgroundColor: '#f9f9f9'} ]}>
        <TouchableOpacity style={styles.itemOne} onPress={()=> navigate("AppointmentOption")}>
          <Text style={[styles.textOne, {color: Theme.primary}]}>
            View Details({item.view_no})
          </Text>
        </TouchableOpacity>
        <View style={styles.itemOne}>
          <Text style={styles.textOne}>
            {item.date}
          </Text>
        </View>
        <View style={styles.itemOne}>
          <Text style={styles.textOne}>
            {item.time}
          </Text>
        </View>
        <View style={styles.itemOne}>
          <Text style={styles.textOne}>
            {item.desc}
          </Text>
        </View>
      </View>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <Menu title="Appointments" message={false}/>

        <View style={styles.toptitleGroup}>
          <View style={styles.toptitle}>
            <TouchableOpacity onPress={()=> navigate("MyAppointment")}>
              <Text style={styles.texttitle}>
                My Appointments
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.toptitle}>
            <TouchableOpacity onPress={()=>navigate('PersonalInfo', {accept: true})}>
              <Text style={styles.texttitle}>
                Request New
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
              data={DATA}
              ListHeaderComponent={<View style={{height: 20}}></View>}
              renderItem={({item, index}) => this.renerItem(item, index)}
              keyExtractor={item => item.id}
              ListFooterComponent={<View style={{height: 20}}></View>}
          />

      </View>
    );
  }
}
export default MyAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  body: {
    paddingHorizontal: 20,
  },
  itemGroup: {
    flexDirection: "row",
    height: 120,
    justifyContent: "space-between",
  },
  itemOne: {
    flex: 1,
    borderLeftWidth: 0.3,
    borderBottomWidth: 0.3,
  },
  textOne: {
    padding: 5,
    color: Theme.black,
    fontSize: Theme.fontText,
  },
  title: {
    paddingLeft: 20,
    marginTop: 15,
    marginBottom: 10,
    color: Theme.black,
    fontSize: Theme.fontSubTitle,
  },
  areatext: {
    paddingLeft: 20,
    borderColor: "#c7c7c7",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: Theme.fontText
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
    flex: 1,
    height: 50,
    backgroundColor: 'lightgrey',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.6,
  },
  toptitleGroup: {
    height: 50,
    flexDirection: "row",
    backgroundColor: 'lightgrey',
  },
  texttitle: {
    marginLeft: 20,
    color: Theme.black,
    fontSize: Theme.fontSubTitle,
  },
  text2: {
    marginLeft: 20,
    color: Theme.primary,
    fontSize: 24,
  }
});
