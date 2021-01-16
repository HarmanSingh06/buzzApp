import * as React from 'react';
import { Header } from 'react-native-elements'
import { View, Text } from 'react-native'

export default class In extends React.Component {
    render() {
        return (
            <View>
                <Header centerComponent={{
                    text: "Instagram",
                    style: { fontSize: 30 }
                }} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
                    <Text>This is Instagram</Text>
                </View>
            </View>
        );
    }
}