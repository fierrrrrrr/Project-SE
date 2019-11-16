import React,{ Component } from 'react';
import './Adheader.css';
import logo from './logoSE.jpg';

class Adheader extends Component {


  constructor(){

    super();
    this.state={
      name:"home"
    };


  }

  render(){


    return (

     <div className="App">

        <table className="App-adheader d-inline-flex">
          <a href="https://www.w3schools.com/html/" className="adbutton">หาบ้าน</a>
          <a href=" " className="adbutton1"> User001</a>
          <a href=" " className="user_icon"><i class="fa fa-user-circle-o " aria-hidden="true"></i></a>
          <a href=" " className="bell_icon"><i class="fa fa-bell" aria-hidden="true"></i></a>
          
          <div class="adsearchbar">
            <form>
              <input type="text" name="search" placeholder="Search..."/>
              <a href="https://www.w3schools.com/css/css_form.asp" className="adsearch_icon"><i class="SearchBox-icon  material-icons">search</i></a>
            </form>
          </div>

           <img src={logo} alt="adLogo" className="adApp-logo" />

        </table>


      </div>
    
    );
  }
}

export default Adheader;