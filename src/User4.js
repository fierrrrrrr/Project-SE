import React,{ Component } from 'react';
import './User4.css';
//import Header from './Header';
import Footer from './Footer';



class User4 extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
      <div class="box0">
        <div class="box1">

          <i class="fas fa-user-circle" ></i>
          <p class="user"><b>Username</b></p>
          
          <table className="buttonn" >
          <button class="button3u4 button4u4"><b>แก้ไขข้อมูล</b></button>
          <button class="button3u4 button5u4"><b>แก้ไขรหัสผ่าน</b></button>
          <button class="button3u4 button6u4"><b>ประกาศของฉัน</b></button>
          <button class="button3u4 button7u4"><b>ประกาศที่ดูล่าสุด</b></button>
          <button class="button3u4 button8u4"><b>ออนไลน์</b></button>
          <button class="button3u4 button9u4"><b>รอตรวจสอบ</b></button>
          <button class="button3u4 button10u4"><b>รอแก้ไข</b></button>
          <button class="button3u4 button11u4"><b>ไม่ผ่านการตรวจสอบ</b></button>
          <button class="button3u4 button12u4"><b>ออฟไลน์</b></button>
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

export default User4;