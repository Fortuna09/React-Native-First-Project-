//importar libries
import React from "react";
import ReactNative, { Text, AppRegistry } from "react-native";

//create component
const App = () => {
    return <Text>Olá rapaziada</Text>;
}


//render component to screen
ReactNative.AppRegistry.registerComponent('CarsApp', () => App);