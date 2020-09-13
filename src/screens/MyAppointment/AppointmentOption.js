import React, { version } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { navigate } from 'src/utils/navigation';
import Menu from '../../components/Menu';
import Theme from '../../theme/Theme';

class AppointmentOption extends React.Component {
  state = {
    description: "",
    datetime: new Date(),
    date: new Date(),
    time: new Date(),
    show: false,
    showdate: false,
    showtime: false,
    modalOption: false,
  };

  componentDidMount () {

  }
  
  componentDidUpdate(prevProps, prevState) {

  }

  onChangeCurrentPassword = (text) => {
    this.setState({currentPwd: text});
  }
  onChangeNewPassword = (text) => {
    this.setState({newPwd: text});
  }
  onChangeConfirmPassword = (text) => {
    this.setState({confirmPwd: text});
  }

  onChangeDateTime = (event, selectedDate) => {
    this.setState({show: false})

    if(selectedDate == undefined) 
      return;

    this.setState ( {
      showtime: Platform.OS === 'ios',
      datetime: selectedDate,
    })
  }
  onChangeDate = (event, selectedDate) => {
    this.setState({showdate: false})

    if(selectedDate == undefined) 
      return;

    this.setState ( {
      showtime: Platform.OS === 'ios',
      date: selectedDate,
      showtime: true
    })
  }

  onChangeTime = (event, selectedDate) => {
    this.setState({showtime: false})

    if(selectedDate == undefined) 
      return;

    this.setState ( {
      showtime: Platform.OS === 'ios',
      time: selectedDate,
    })
  }
  
  onPressDateTime = () => {
    if ( Platform.OS === 'ios' )
      this.setState({show: true});
    else
      this.setState({showdate: true});
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
        <Menu title="Appointment" message={false}/>

        <View style={styles.toptitleGroup}>
          <View style={styles.toptitle}>
            <TouchableOpacity onPress={()=> navigate("MyAppointment")}>
              <Text style={styles.texttitle}>
                My Appointments
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.toptitle}>
            <TouchableOpacity onPress={()=> this.state.modalOption == true ? navigate('PersonalInfo', {accept: true}) : navigate('AppointmentOne')}>
              <Text style={styles.texttitle}>
                Request New
              </Text>
            </TouchableOpacity>
          </View>
        </View>

            <View style={{marginTop: 30, alignItems: "center"}}>
              <Text style={styles.texttitle}>
                Appointment #2342
              </Text>
              <Text style={styles.text2}>
                Your Information
              </Text>
            </View>

            <View style={styles.body}>
              <View style={styles.itemGroup}>
                <Text style={styles.title}>William Geronco</Text>
              </View>
              <View style={styles.itemGroup}>
                <Text style={styles.title}>William@geronco.com</Text>
              </View>
              <View style={styles.itemGroup}>
                <Text style={styles.title}>305-349-3423</Text>
              </View>
              <View style={styles.itemGroup}>
                <Text style={styles.title}>4775 US 1 S,{"\n"}St Augustine, FL 32086</Text>
              </View>
            </View>

            <View style={{marginTop: 30, alignItems: "center"}}>
              <Text style={styles.text2}>
                Thursday May 21st{"\n"}at 10:30 am
              </Text>
            </View>

            <View style={styles.mapGroup}>
              <Text style={{fontSize: 40, opacity: 0.4}}>Map View</Text>
            </View>
            {this.state.modalOption == true ? (
              <View style={{marginTop: -90, alignItems: 'center'}}>
                <View style={{width: "70%"}}>
                      <View style={styles.optionModal}>
                        <TouchableOpacity onPress={()=>navigate("NewMessage")}>
                          <View style={{paddingTop: 18, paddingBottom: 6}} >
                            <Text style={styles.textmodal}>
                              Send message
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>console.log('aaa')}>
                          <View style={{paddingVertical: 6}} >
                            <Text style={styles.textmodal}>
                              Cancel Appointment
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigate('PersonalInfo', {accept: true})}>
                          <View style={{paddingVertical: 6}} >
                            <Text style={styles.textmodal}>
                              View Estimate Details
                            </Text>
                          </View>
                        </TouchableOpacity>
                    </View>
                    
                  <View  style={styles.btnWrapper}>
                  <TouchableOpacity onPress={() => this.setState({modalOption: true})}>
                    <Text style={styles.btn}>
                      Options
                    </Text>
                  </TouchableOpacity>
                </View>

                <View  style={styles.btnWrapper}>
                  <TouchableOpacity onPress={()=>navigate('PersonalInfo', {accept: true})}>
                    <Text style={styles.btn}>
                      View Estimate
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            ) : (
            <View style={{marginTop: 50, alignItems: 'center'}}>
                <View style={{width: "70%"}}>
                    
                  <View  style={styles.btnWrapper}>
                    <TouchableOpacity onPress={() => this.setState({modalOption: true})}>
                      <Text style={styles.btn}>
                        Options
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View  style={styles.btnWrapper}>
                    <TouchableOpacity onPress={()=>navigate('PersonalInfo', {accept: true})}>
                      <Text style={styles.btn}>
                        View Estimate
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
            )
          }
        </ScrollView>

      </View>
    );
  }
}
export default AppointmentOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  body: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  itemGroup: {
    borderBottomColor: Theme.black,
    opacity: 1.0,
    borderBottomWidth: 0.6,
  },
  title: {
    paddingLeft: 40,
    paddingVertical: 10,
    marginTop: 15,
    marginBottom: 10,
    color: Theme.black,
    fontSize: Theme.fontSubTitle,
  },
  btnWrapper: {
    position: "relative",
    marginBottom: 30,
    marginTop: -10,
    alignSelf: "center",
    width: "100%",
    borderRadius: 8,
    borderWidth: 3,
    borderColor: Theme.black,
    backgroundColor: Theme.primaryDark,
  },
  optionModal: {
    zIndex: 1,
    height: 150,
    width: 220,
    alignSelf: "flex-end",
    borderRadius: 8,
    backgroundColor: Theme.primaryDark
  },
  btn: {
    color: Theme.white,
    fontSize: Theme.fontSubTitle,
    paddingHorizontal: 12,
    paddingVertical: 12,
    textAlign: "center"
  },
  toptitleGroup: {
    height: 50,
    flexDirection: "row",
    backgroundColor: 'lightgrey',
  },
  toptitle: {
    flex: 1,
    height: 50,
    backgroundColor: 'lightgrey',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.6,
  },
  texttitle: {
    marginLeft: 20,
    color: Theme.black,
    fontSize: Theme.fontSubTitle,
  },
  text2: {
    marginLeft: 20,
    color: Theme.primary,
    fontSize: 28,
    textAlign: "center",
  },
  mapGroup: {
    marginTop: 20,
    height: 300,
    backgroundColor: 'lightgrey',
    justifyContent: "center",
    alignItems: "center",
  },
  textmodal: {
    textAlign: "center",
    color: Theme.white,
    fontSize: Theme.fontText,
  }
});
