import React,{ Component } from 'react';
import './User.css';
//import Header from './Header';
import Footer from './Footer';



class User extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
      <div class="box">
        <div class="box1">

          <i class="fas fa-user-circle" ></i>
          <p class="user"><b>Username</b></p>
          
          <table className="buttonn" >
          <button class="button3u button4u"><b>แก้ไขข้อมูล</b></button>
          <button class="button3u button5u"><b>แก้ไขรหัสผ่าน</b></button>
          <button class="button3u button6u"><b>ประกาศของฉัน</b></button>
          <button class="button3u button7u"><b>ประกาศที่ดูล่าสุด</b></button>
          <button class="button3u button8u"><b>ออนไลน์</b></button>
          <button class="button3u button9u"><b>รอตรวจสอบ</b></button>
          <button class="button3u button10u"><b>รอแก้ไข</b></button>
          <button class="button3u button11u"><b>ไม่ผ่านการตรวจสอบ</b></button>
          <button class="button3u button12u"><b>ออฟไลน์</b></button>
          </table>

          <div class="polaroid">
            <img src={require('./assets/7.png')} class="img1-responsive" style={{width: 300}} />
            <div class="container">
              <p class="infor"><b>น้องแมวน่ารัก</b></p>
              <p class="infor"><b>จ.กรุงเทพฯ</b></p>
            </div>
          </div>

          <div class="polaroid1">
            <img src={require('./assets/8.png')} class="img1-responsive" style={{width: 300}} />
            <div class="container">
              <p class="infor"><b>น้องแมวน่ารัก</b></p>
              <p class="infor"><b>จ.กรุงเทพฯ</b></p>
            </div>
          </div>
      
          <Footer/>
        </div>
      </div>
     </div>
    </div>
  );
  }
}

export default User;