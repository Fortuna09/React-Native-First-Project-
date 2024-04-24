//importar libries
import React from "react";
import { AppRegistry, View } from "react-native";



//importar componentes
import Header from "./src/component/Header";
import CarListC from "./src/component/CarListC";





//create component
const App = () => {
    return <View>
        <Header title={'Cars'} />
        <CarListC />
    </View>;
}






//render component to screen
AppRegistry.registerComponent('CarsApp', () => App);