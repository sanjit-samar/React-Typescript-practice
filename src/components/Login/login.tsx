import { useState } from "react";
import "./login.styles.css";
import { LoginApi } from "../../services/loginApi";
import { LoginprofileApi } from "../../services/loginApi";


export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [profileData, setProfiledata] = useState<any>();

  const handleEmailLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };

    LoginApi(payload);
  };

  const handleProfile = () => {
    let token = localStorage.getItem("access_token")
    LoginprofileApi(token).then(res => setProfiledata(res?.data))
  };

  return (
    <div className="logincontainer">
      <p className="bold">Enter Your Email</p>
      <input type="text" onChange={handleEmailLogin} />
      <p className="bold">Enter Your Password</p>
      <input type="password" onChange={handlePassword} />
      <br />
      <button className="loginButton" onClick={handleSubmit}>
        Submit Login
      </button>

      <button className="ProfileButton" onClick={handleProfile}>
        Get Profile
      </button>

      {profileData && <div>
          <img alt="profileData" src={profileData.avatar}/>
          <p>{profileData.name}</p>
          <p>{profileData.role}</p>
          <p>{profileData.email}</p>
        </div>}
    </div>
  );
};
