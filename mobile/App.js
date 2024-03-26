import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MoviesDetails from "./components/MoviesDetails";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Movies" component={Movies} />
				<Drawer.Screen name="Details" component={MoviesDetails} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
