import React,{ Component } from 'react';
import './App.css';
//import logo from './1.png';

class App extends Component {
  render(){
    return (
      <div className="table-responsive">
       <img src={require('./assets/1.png')} class="img-responsive" alt="bgsignin" style={{width: 1400, height: 780}} />
        <table className="main">
    
          <p class="Superspace"><b>เข้าสู่ระบบ</b></p>
          <div class="login">
            <form>
            <br/><br/><label class="login" for="account"><font size="6" ><b>ชื่อบัญชี</b></font></label>
            <input type="actext" id="account" name="account"></input>
            <br/> 
            <br/><br/> <label class="login" for="password"><font size="6" ><b>รหัสผ่าน</b></font></label>
            <input type="password" id="password" name="password" ></input>
            </form>
          </div>

       
          <a href ="#"><b><p align="right">ลืมรหัสผ่าน </p></b></a>

          <br/><br/>
          <button class="buttonlogin"><b>เข้าสู่ระบบ</b></button>

          <br/>
          <p1><b>ยังไม่เป็นสมาชิกใช่ไหม&nbsp;</b><a href ="#"><b>ลงทะเบียน</b></a></p1>

          <br/><br/><br/><br/>
          <a href ="#"><img src={require('./assets/4.png')} alt="fb" style={{width: 50, height: 50}} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href ="#"><img src={require('./assets/5.png')} alt="gg" style={{width: 50, height: 50}} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href ="#"><img src={require('./assets/6.png')} alt="tw" style={{width: 50, height: 50}} /></a><br/><br/><br/><br/>

        </table>

       
      </div>
    
    );
  }
}

export default App;