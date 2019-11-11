import React,{ Component } from 'react';
import './User1.css';
//import Header from './Header';
import Footer from './Footer';



class User1 extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
      <div class="box0">
        <div class="box1">

          <i class="fas fa-user-circle" ></i>
          <p class="user"><b>Username</b></p>
          
          <table className="buttonn" >
          <button class="button3u1 button4u1"><b>แก้ไขข้อมูล</b></button>
          <button class="button3u1 button5u1"><b>แก้ไขรหัสผ่าน</b></button>
          <button class="button3u1 button6u1"><b>ประกาศของฉัน</b></button>
          <button class="button3u1 button7u1"><b>ประกาศที่ดูล่าสุด</b></button>
          <button class="button3u1 button8u1"><b>ออนไลน์</b></button>
          <button class="button3u1 button9u1"><b>รอตรวจสอบ</b></button>
          <button class="button3u1 button10u1"><b>รอแก้ไข</b></button>
          <button class="button3u1 button11u1"><b>ไม่ผ่านการตรวจสอบ</b></button>
          <button class="button3u1 button12u1"><b>ออฟไลน์</b></button>
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

export default User1;