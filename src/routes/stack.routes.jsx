import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Ghibli from "../screens/Ghibli";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Ghibli" component={Ghibli} />
    </Stack.Navigator>
    );
};

export default StackRoutes;