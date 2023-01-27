import Dropdown from "./Dropdown";
import {useState} from 'react';

const Home = (props) => {
    
  return (
    <>
      <h1>This is a Dropdown</h1>
      <Dropdown action={props.action} setAction={props.setAction}/>
    </>
  );
};

export default Home;
