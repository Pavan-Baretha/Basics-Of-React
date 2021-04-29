import logo from './logo.svg';
import './App.css';
import Navbar from "./component/02.js"
import Carous from "./component/03.js"
import Car from "./component/CardItem.js"
import Cakedata from "./component/cakesdata.js"
import Cart from "./component/Cart.js"
import SearchApp from "./component/SearchApp.js"
import Counter from "./component/Counter.js"
// import Login from './component/Login';
import Login from "./component/Login.js"
import Log from "./component/StatefullLogin.js"
import Login1 from "./component/Login1.js"
import SignUp from "./component/SignUp.js"
import AddCake from './component/AddCake';
import Home from './component/Home.js'
import Forgot from "./component/Forgot"
import Addcake from "./component/Reference"
import NewCakeList from "./component/NewCakeList"
console.log(Cakedata)

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carous></Carous>
      <div className="row">
      {Cakedata.map(function(x){
          return <Car Cakedata={x}></Car>
        })}
      </div>
       <Cart></Cart>
       <SearchApp></SearchApp>
       {/* <Login></Login> */}
       <Counter></Counter>
       <Log></Log>
       <Login1></Login1>
       <SignUp></SignUp>
       <AddCake></AddCake>
       <Home></Home>
       <Forgot></Forgot>
       <Addcake></Addcake>
       <NewCakeList></NewCakeList>
    </div>
  );
}


export default App;
