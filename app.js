var objPeople = [
   {
      username: "nguyenvanduy@gmail.com",
      password: "123456"
   },
   {
      username: "anncream@gmail.com",
      password: "toiladuy"
   }
]

function Login() {
   var check = 1;
   var username = document.getElementById("username").value
   var password = document.getElementById("password").value
   for(var i = 0; i < objPeople.length; i++) {
      if(username == objPeople[i].username && password == objPeople[i].password) {
         check = 0;
         
      }
   }
   if(check == 0) {
      document.location = "trangchu.html"; 
   }
   if(check == 1) {
      alert("Nhập sai email hoặc mật khẩu");
   }
}

function registerUser() {
   var checkAdd = 0;
   var addUser = document.getElementById("newUser").value
   var addPassword = document.getElementById("newPassword").value
   var checkemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ //regress expression 
   var newUser = {
      username: addUser,
      password: addPassword
   }
   if(!checkemail.test(addUser)) {
      alert("Vui lòng nhập đúng định dạng email")
      return
   }
   for(var i = 0; i < objPeople.length; i++) {
      if(addUser === objPeople[i].username) {
         checkAdd = 1
      }
   }
   if(checkAdd == 1) {
      alert("Email đã tồn tại")
   }
   if(checkAdd == 0) {
      objPeople.push(newUser)
      alert("Đăng kí thành công")
   }
   
}

