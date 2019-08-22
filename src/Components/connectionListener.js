import React from 'react';
import { View,  NetInfo,Text } from 'react-native';

export default ConnectionLost_HOC= (Comp) => {
    return class HOC extends React.Component {
        
        
        render() {
            const {
                style,
                children,
                isConnected,
                ...props
            } = this.props;
            return (
                    <Comp  {...props}
                     style={style}>
                        {
                            !isConnected &&
                            <View
                                style={
                                    { backgroundColor: 'red', height: 25 , marginVertical:3 }
                                }
                            >
                            <Text style={{color:'white',alignSelf:'center'}}>No Internet Connection</Text>

                            </View>
                        }
                        {children}
                    </Comp>

               );
        }
    }


};