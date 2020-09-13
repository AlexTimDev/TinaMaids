import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import Menu from '../../components/Menu';
import Theme from '../../theme/Theme';
import { connect, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

class FranchiseOpportunity extends React.Component {
  state = {
    currentPwd: "",
    newPwd: "",
    confirmPwd: "",
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

  

  render() {

    return (
      <View style={styles.container}>
        <Menu title="Franchise Opportunity" message={false}/>
        <ScrollView>
          <ImageBackground
            source={Theme.franchise_header}
            imageStyle={{
              resizeMode: 'contain',
            }}
            style={{
              height: 185,
            }}
          >
          </ImageBackground>
              
          <ImageBackground
            source={Theme.franchise_video}
            imageStyle={{
              resizeMode: 'contain',
            }}
            style={styles.video}
          >
            <TouchableOpacity>
              <Image 
                source={Theme.video_play}
                style={styles.btnPlay}>
              </Image>
            </TouchableOpacity>
          </ImageBackground>

          <ImageBackground
            source={Theme.franchise_description}
            imageStyle={{
              resizeMode: 'contain',
            }}
            style={{
              height: 316,
            }}
          >
          </ImageBackground>

          <View  style={styles.btnWrapper}>
            <TouchableOpacity onPress={() => console.log('aaa')}>
              <Text style={styles.btn}>
                Call Us Now
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 20}}></View>
        </ScrollView>

      </View>
    );
  }
}
export default FranchiseOpportunity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1e9c7',
  },
  video: {
    height: 200,
    marginVertical: 20,
    justifyContent: "center",
  },
  btnWrapper: {
    marginTop: 20,
    alignSelf: "center",
    width: "85%",
    borderRadius: 4,
    backgroundColor: Theme.primary,
  },
  btn: {
    color: Theme.white,
    fontSize: Theme.fontSubTitle,
    paddingHorizontal: 12,
    paddingVertical: 12,
    textAlign: "center"
  },
  btnPlay: {
    alignSelf: "center",
  }
});
