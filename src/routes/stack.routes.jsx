import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import About from "../screens/About";
import About2 from "../screens/About2";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="About2" component={About2} />
    </Stack.Navigator>
    );
};

export default StackRoutes;