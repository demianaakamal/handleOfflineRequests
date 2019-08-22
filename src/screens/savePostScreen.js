import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, NetInfo } from 'react-native';

import { connect } from 'react-redux'
import { submitPost, removeActionFromArray } from "../store/actions/actionCreator"
import { Colors } from '../Global/Colors';

import connectionLost_HOC from '../Components/connectionListener'
import { REMOVE_ACTION_FROM_ARRAY } from '../store/actions/actionType';


const ViewWithConnectionListener = connectionLost_HOC(View);

class SavePostScreen extends Component {
  state = {
    title: '',
    body: '',
    loading: true,
    isConnected: true,
  }



  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        elevation: 10
      },
      headerTitle: "SAVE POSTS",
    };
  };
   fetchOldActions  =  () => {
   
    if(this.state.isConnected==true && this.props.actionsList.length >0)
    {
       this.props.actionsList.map((item,index)=>{
       this.props.submitPost(item);
        this.props.removeActionFromArray();
        
      })
    }
  }



  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({ isConnected: isConnected },this.fetchOldActions);
    });
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this._handleConnectivityChange
    );

  }
  _handleConnectivityChange = (isConnected) => {

    this.setState({ isConnected: isConnected },this.fetchOldActions);
  };
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this._handleConnectivityChange
    );
  }

  componentWillReceiveProps(nextProps) { }

  render() {


    return (
      <ViewWithConnectionListener isConnected={this.state.isConnected} style={styles.container}>
        <ScrollView >
          <TextInput
            style={styles.TextInputStyle}
            value={this.state.title}
            placeholder='title'
            onChangeText={txt =>
              this.setState({ title: txt })
            }
          />
          <TextInput
            style={[styles.TextInputStyle, { minHeight: 300 }]}
            multiline
            value={this.state.body}
            placeholder='body'
            onChangeText={txt =>
              this.setState({ body: txt })
            }
          />

        </ScrollView>
        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => {

            this.props.submitPost({ title: this.state.title, body: this.state.body })
          }}>
          <Text>
            Submit
       </Text>
        </TouchableOpacity>
      </ViewWithConnectionListener>

    )
  };
}
const mapStateToProps = state => ({
  actionsList: state.offlineReducer.actionsList

})
const mapDispatchToProps = dispatch => ({
  submitPost: (postObject) => { dispatch(submitPost(postObject)) },
  removeActionFromArray:()=>{dispatch(removeActionFromArray())}
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavePostScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.orange,
    justifyContent: 'space-between',
    marginTop: 20
  },
  TextInputStyle: {
    width: "90%",
    borderRadius: 10,
    borderColor: Colors.appGreyColor,
    borderWidth: 1,
    padding: 15,
    margin: 10,
    elevation: 2,
    textAlignVertical: 'top'

  },
  submitContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '90%',
    backgroundColor: Colors.appGreyColor,
    alignSelf: 'center',
    marginBottom: 10


  },

});

