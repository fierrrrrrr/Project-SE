import React,{ Component } from 'react';
import './UserFailcheck.css';
import Adheader from './Adheader';
import Footer from './Footer';



class UserFailcheck extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
      <div class="box0">
        <div class="box1">

          <i class="g fas fa-user-circle" ></i>
          <p class="user"><b>Username</b></p>
          
          <table className="buttonn" >
          <button class="button3u3 button4u3"><b>แก้ไขข้อมูล</b></button>
          <button class="button3u3 button5u3"><b>แก้ไขรหัสผ่าน</b></button>
          <button class="button3u3 button6u3"><b>ประกาศของฉัน</b></button>
          <button class="button3u3 button7u3"><b>ประกาศที่ดูล่าสุด</b></button>
          <button class="button3u3 button8u3"><b>ออนไลน์</b></button>
          <button class="button3u3 button9u3"><b>รอตรวจสอบ</b></button>
          <button class="button3u3 button10u3"><b>รอแก้ไข</b></button>
          <button class="button3u3 button11u3"><b>ไม่ผ่านการตรวจสอบ</b></button>
          <button class="button3u3 button12u3"><b>ออฟไลน์</b></button>
          </table>

          <div class="containeru3000">
              <center>
              <img src={require('./assets/9.png')} class="img2-responsive" style={{width: 220}} />
     
            </center>
            </div>
          
            <div class="containeru30000">
              <center>
            
            <h2 class="conu3"><b>คุณยังไม่มีรายการประกาศ&emsp;&emsp;</b></h2>
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

export default UserFailcheck;