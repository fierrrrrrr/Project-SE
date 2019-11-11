import React,{ Component } from 'react';
import './Header.css';
import logo from './logoSE.jpg';

class Header extends Component {


  constructor(){

    super();
    this.state={
      name:"home"
    };


  }

  render(){


    return (

     <div className="App">

        <table className="App-header d-inline-flex">
          <a href="https://www.w3schools.com/html/" className="button button1">สมัครสมาชิก</a>
          <button className="button button2">เข้าสู่ระบบ</button>
          <div class="searchbar">
            <form>
              <input type="text" name="search" placeholder="Search..."/>
              <a href="https://www.w3schools.com/css/css_form.asp" className="search_icon"><i class="SearchBox-icon  material-icons">search</i></a>
            </form>
          </div>

           <img src={logo} alt="Logo" className="App-logo" />

        </table>


      </div>
    
    );
  }
}

export default Header;