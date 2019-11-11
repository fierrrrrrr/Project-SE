import React,{ Component } from 'react';
import './User2.css';
//import Header from './Header';
import Footer from './Footer';



class User2 extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
      <div class="box0">
        <div class="box1">

          <i class="fas fa-user-circle" ></i>
          <p class="user"><b>Username</b></p>
          
          <table className="buttonn" >
          <button class="button3u2 button4u2"><b>แก้ไขข้อมูล</b></button>
          <button class="button3u2 button5u2"><b>แก้ไขรหัสผ่าน</b></button>
          <button class="button3u2 button6u2"><b>ประกาศของฉัน</b></button>
          <button class="button3u2 button7u2"><b>ประกาศที่ดูล่าสุด</b></button>
          <button class="button3u2 button8u2"><b>ออนไลน์</b></button>
          <button class="button3u2 button9u2"><b>รอตรวจสอบ</b></button>
          <button class="button3u2 button10u2"><b>รอแก้ไข</b></button>
          <button class="button3u2 button11u2"><b>ไม่ผ่านการตรวจสอบ</b></button>
          <button class="button3u2 button12u2"><b>ออฟไลน์</b></button>
          </table>

          <center>
          <img src={require('./assets/9.png')} class="img2-responsive" style={{width: 239}} />
          <br/><br/>
          <h2><b>คุณยังไม่มีรายการประกาศ&emsp;&emsp;</b></h2>
          </center>

          <Footer/>
        </div>
      </div>
     </div>
    </div>
  );
  }
}

export default User2;