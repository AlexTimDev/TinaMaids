import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { navigate } from 'src/utils/navigation';
import Theme from "../../theme/Theme";

class Notification extends React.Component {
    onPressItem = () => {
      const {item} = this.props;
      if (item.type == "message")
        navigate('MessageDetail', {item: item})
      else if (item.type == "estimate")
        navigate('PersonalInfo', {accept: false})
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() =>this.onPressItem()}>
              <View style={styles.contentContainer}>
                <View style={{flex: 10}}>
                  <View style={{ flexDirection: 'row'}}>
                        <Text numberOfLines={1} style={{ color: Theme.black, fontSize: Theme.fontSubTitle }}>{this.props.item.title}</Text>
                        {/* <View style={{flex: 1}}>
                          <Text numberOfLines={1} style={{ color: Theme.black, fontSize: Theme.fontText }}>{this.props.item.message}</Text>
                        </View> */}
                        
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 3 }}>
                        <Text numberOfLines={1} style={{ color: Theme.black, fontSize: Theme.fontText }}>{this.props.item.date}</Text>
                        <Text numberOfLines={1} style={{ color: Theme.black, fontSize: Theme.fontText }}>{this.props.item.time}</Text>
                  </View>
                </View>

                <View style={{flex: 1}}>
                  {this.props.item.check && <View style={styles.circle}/>}
                </View>
              </View>

              <View style={styles.line}></View>
            </TouchableOpacity>
        );
    }
}
export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  line: {
      borderColor: Theme.black,
      opacity: 0.5,
      borderWidth: 0.5
  },
  circle: {
    alignSelf: "flex-end",
    width: 1,
    borderRadius: 5,
    borderWidth:5,
    borderColor: Theme.primary,
  }
});