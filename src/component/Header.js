//importar libries
import React from "react";
import { Text, View } from "react-native";

//create component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props.title} </Text>
        </View>
    );
};

//style the component
const styles = {
    textStyle: {
        fontSize: 22
    },

    viewStyle: {
        backgroundColor: 'gainsboro',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    }
    

};

//make component available to other components
export default Header;


