import React,{ Component } from 'react';
import './User5.css';
//import Header from './Header';
import Footer from './Footer';



class User5 extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
 
      <div class="box00">
        <div class="box1">

          <i class="fas fa-user-circle" ></i>
          <p class="user"><b>Username</b></p>
          
          <table className="buttonn" >
          <button class="button3u5 button4u5"><b>แก้ไขข้อมูล</b></button>
          <button class="button3u5 button5u5"><b>แก้ไขรหัสผ่าน</b></button>
          <button class="button3u5 button6u5"><b>ประกาศของฉัน</b></button>
          <button class="button3u5 button7u5"><b>ประกาศที่ดูล่าสุด</b></button>
          </table>

          <div class="polaroid2u5">
            <img src={require('./assets/10.png')} class="img3-responsive" style={{width: 300}} />
            <div class="containeru5">
              <p class="infor"><b>น้องแมวน่ารัก</b></p>
              <p class="infor"><b>จ.กรุงเทพฯ</b></p>
            </div>
          </div>

          <div class="polaroid3u5">
            <img src={require('./assets/11.png')} class="img3-responsive" style={{width: 300}} />
            <div class="containeru5">
              <p class="infor"><b>น้องแมวน่ารัก</b></p>
              <p class="infor"><b>จ.กรุงเทพฯ</b></p>
            </div>
          </div>

          <div class="polaroid4u5">
            <img src={require('./assets/12.png')} class="img3-responsive" style={{width: 300}} />
            <div class="containeru5">
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

export default User5;