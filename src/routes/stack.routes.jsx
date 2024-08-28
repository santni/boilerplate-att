import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
    );
};

export default StackRoutes;