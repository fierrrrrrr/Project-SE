import React,{ Component } from 'react';
import './User4.css';
import Adheader from './Adheader';
import Footer from './Footer';



class User4 extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
      <div class="box0">
        <div class="box1">

          <i class="g fas fa-user-circle" ></i>
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

          <div class="containeru4000">
              <center>
              <img src={require('./assets/9.png')} class="img2-responsive" style={{width: 220}} />
     
            </center>
            </div>
          
            <div class="containeru40000">
              <center>
            
            <h2 class="conu4"><b>คุณยังไม่มีรายการประกาศ&emsp;&emsp;</b></h2>
            </center>
            </div>

          <Adheader/>
          <Footer/>
        </div>
      </div>
     </div>
    </div>
  );
  }
}

export default User4;