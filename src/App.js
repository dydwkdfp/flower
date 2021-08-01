import './App.css';
import {AnimatePresence, motion} from 'framer-motion';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import { OrchidData, FlowerData, PlantsData, CactusData } from './data/ProductData.js';
import react,{useState} from 'react';




function MainPageDisplay(props){
  return (
    <motion.div initial =  {{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <MainPage themeColor={props.themeColor} getColorValue={props.getColorValue}/>
      </motion.div>
  );
};

function GalleryDisplay(props){
  return (
    <motion.div initial =  {{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <GalleryPage themeColor={props.themeColor} getColorValue={props.getColorValue}/>
      </motion.div>
  );
};

function ProductDisplay(props){
  return (
    <motion.div initial =  {{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      
      <ProductPage type={props.type} Data={props.Data} themeColor={props.themeColor} getColorValue={props.getColorValue}/>
      </motion.div>
  );
};

function ContactDisplay(props){
  return (
    <motion.div initial =  {{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <ContactPage themeColor={props.themeColor} getColorValue={props.getColorValue}/>
      </motion.div>
  );
};

function App() {
  const location = useLocation();
  const [themeColor, setThemeColor] = useState(false);
  const getColorValue = (color) =>{
      setThemeColor(color);
  }
  return (
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route path="/Main">
        <MainPageDisplay themeColor={themeColor} getColorValue={getColorValue}/>
      </Route>
      <Route path="/Gallery">
        <GalleryDisplay  themeColor={themeColor} getColorValue={getColorValue}/>
      </Route>
      <Route path="/Product/Flower">
        <ProductDisplay type={"Flower"} Data={FlowerData}  themeColor={themeColor} getColorValue={getColorValue}/>
      </Route>
      <Route path="/Product/Orchid">
        <ProductDisplay type={"Orchid"} Data={OrchidData}  themeColor={themeColor} getColorValue={getColorValue}/>
      </Route>
      <Route path="/Product/Plants">
        <ProductDisplay type={"Plants"} Data={PlantsData}  themeColor={themeColor} getColorValue={getColorValue}/>
      </Route>
      <Route path="/Product/Cactus">
        <ProductDisplay type={"Cactus"} Data={CactusData}  themeColor={themeColor} getColorValue={getColorValue}/>
      </Route>
      <Route path="/Contact">
        <ContactDisplay  themeColor={themeColor} getColorValue={getColorValue}/>
      </Route>
      <Route path="/">
        <Redirect to="Main" />
      </Route>
    </Switch>
    </AnimatePresence>
  );
}

export default App;
