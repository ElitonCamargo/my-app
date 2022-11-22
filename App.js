import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaAntDesign from "./components/TelaAntDesign";
import TelaOcticons from "./components/TelaOcticons";
import TelaEntypo from "./components/TelaEntypo"

const Menu = createBottomTabNavigator().Navigator;
const ItenMenu = createBottomTabNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <ItenMenu name="Ant-Design" component={ TelaAntDesign } />
        <ItenMenu name="Octicons" component={ TelaOcticons }/>
        <ItenMenu name="Entypo" component={ TelaEntypo }/>
      </Menu>
    </NavigationContainer>
  );
}
