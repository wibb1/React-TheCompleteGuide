import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from './components/UserProfile'

function App() {
  const authorized = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header authorized={authorized} />
      {!authorized && <Auth />}
      {authorized && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
