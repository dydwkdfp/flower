import './App.css';
import {AnimatePresence, motion} from 'framer-motion';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';


function MainPageDisplay(){
  return (
    <motion.div initial =  {{scale: 0.9}} animate={{scale: 1}} exit={{scale: 0.9}}>
      <MainPage/>
      </motion.div>
  );
};

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route path="/MainPage">
        <MainPageDisplay />
      </Route>
      <Route path="/">
        <Redirect to="MainPage" />
      </Route>
    </Switch>
    </AnimatePresence>
  );
}

export default App;
