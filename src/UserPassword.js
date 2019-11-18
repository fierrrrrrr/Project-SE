import React,{ Component } from 'react';
import './UserPassword.css';
import Adheader from './Adheader';
import Footer from './Footer';



class UserPassword extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
      <div class="box0000">
        <div class="box1">

          <i class="fas fa-user-circle" ></i>
          <p class="user"><b>Username</b></p>
          
          <table className="buttonn" >
          <button class="button3u6 button4u6"><b>แก้ไขข้อมูล</b></button>
          <button class="button3u6 button5u6"><b>แก้ไขรหัสผ่าน</b></button>
          <button class="button3u6 button6u6"><b>ประกาศของฉัน</b></button>
          <button class="button3u6 button7u6"><b>ประกาศที่ดูล่าสุด</b></button>
          </table>

          <div class="containeru7000">

          <table class="tableinfor0">
          <tr>
            <td><p class="infor11"><b><font size="5" ><u>แก้ไขรหัสผ่าน</u></font></b></p></td>
          </tr>
          </table>

          <table class="tableinfor1">
            
          <tr>
            <th><label for="password"><font size="5" ><b>รหัสผ่านเดิม</b></font></label>
              <input class="pass" type="password" id="password" name="password"></input></th>
          
          </tr>

           <tr>
            <th><label for="newpassword"><font size="5" ><b>รหัสผ่านใหม่&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></font></label>
              <input class="pass" type="password" id="newpassword" name="newpassword" ></input></th>
          </tr>

          <tr>
            <th><label for="confirmpassword"><font size="5" ><b>ยืนยันรหัสผ่าน&nbsp;&nbsp;&nbsp;&nbsp;</b></font></label>
              <input class="pass" type="password" id="confirmpassword" name="confirmpassword" ></input></th>
          </tr>
        
          </table>
       
       
          <br/><br/><br/><br/>
      
          <button class="button3u7 button8u7"><b>บันทึก</b></button>
       
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

export default UserPassword;