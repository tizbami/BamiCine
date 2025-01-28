// // import { useAuthStore } from "../../authUser";
// import AuthScreen from "./AuthScreen";
// import HomeScreen from "./HomeScreen";

// const HomePage = () => {
//   const { user } = useAuthStore();

//   return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
// };
// export default HomePage;

import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
const HomePage = () => {
  const user = false;

  return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
     
};

export default HomePage;