import './App.css';
import Header from "./components/header/Header";
import {Route, Router, Routes} from "react-router-dom";
import Home from "./page/Home/Home";
import Authorization from "./page/Authorization/Authorization";
import About from "./page/About/About";
import ParamPage from "./page/param/ParamPage";

function App() {
  return (
    <div className="container">
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Authorization/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/paramaters'>
                <Route path=':id' element={<ParamPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
