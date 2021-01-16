import * as React from 'react';
import {Header} from 'react-native-elements'
import { View, Text } from 'react-native'

export default class Fb extends React.Component {
    render() {
        return (
            <View>
                <Header centerComponent = {{
                    text:"Facebook",
                    style:{fontSize:30}
                }}/>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,marginTop:300}}>
                <Text>This is facebook</Text>
                </View>
            </View>
        );
    }
}