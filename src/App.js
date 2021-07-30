import './App.css';
import {AnimatePresence, motion} from 'framer-motion';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';


function MainPageDisplay(){
  return (
    <motion.div initial =  {{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <MainPage/>
      </motion.div>
  );
};

function GalleryDisplay(){
  return (
    <motion.div initial =  {{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <GalleryPage/>
      </motion.div>
  );
};

function ContactDisplay(){
  return (
    <motion.div initial =  {{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <ContactPage/>
      </motion.div>
  );
};

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route path="/Main">
        <MainPageDisplay />
      </Route>
      <Route path="/Gallery">
        <GalleryDisplay />
      </Route>
      <Route path="/Gallery/Garden">
        <GalleryDisplay />
      </Route>
      <Route path="/Gallery/Orchid">
        <GalleryDisplay />
      </Route>
      <Route path="/Gallery/Plants">
        <GalleryDisplay />
      </Route>
      <Route path="/Gallery/Cactus">
        <GalleryDisplay />
      </Route>
      <Route path="/Contact">
        <ContactDisplay />
      </Route>
      <Route path="/">
        <Redirect to="Main" />
      </Route>
    </Switch>
    </AnimatePresence>
  );
}

export default App;
