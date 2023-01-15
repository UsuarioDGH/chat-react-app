import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import ChatBox from './components/ChatBox';
import { auth } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {/*<header className='header'>*/}
        <NavBar/>
      {/*</header>*/}
      {/*<div className='content'>*/}
        {!user ? <Welcome /> : <ChatBox></ChatBox>}
      {/*</div>      */}
    </div>
  );
}

export default App;
