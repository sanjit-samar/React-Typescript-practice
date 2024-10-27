import axios from "axios";

let token;
export const LoginApi = async (payload: any) => {

    try{
        const base_url = 'https://api.escuelajs.co/api/v1/auth/login';
        const response = await axios.post(base_url, payload);
        token = localStorage.setItem("access_token",response?.data?.access_token)
        console.log(response?.data?.access_token, 'da');
        return response;
    }
    catch(err){
        console.log(err,"Error")
    }
}


export const LoginprofileApi = async (token: any) => {
    try{
        const base_url = "https://api.escuelajs.co/api/v1/auth/profile";
        const res = await axios.get(base_url,{
             headers: {
                // Authorization: "Bearer {your access token}"
                Authorization: `Bearer ${token}`
             }
        })
        console.log(res,"token")
        return res;
    }catch(err){
        console.log(err, "token_err");
    }
}
