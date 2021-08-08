import axios from "axios";

export const LoginLogic = async (email, password) => {
  let bodyFormData = new FormData();
 
        bodyFormData.append('email', email);
        bodyFormData.append('password', password);


  let res = await axios({
    method: "post",
    
    url: "http://crypto.studentgroup.ir/api/v1/auth/login",
   headers: {"Content-Type": "multipart/form-data"},
    data: bodyFormData
    
  });
  return res;
};




      // 'content-type': 'text/json',