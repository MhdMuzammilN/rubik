import { useState } from "react";
import {useNavigate} from 'react-router-dom';



const AdminPage = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const sendData = {username,password};
    const navigate = useNavigate();
     const adminlogin = () => {

    const getLoginData = async()=>{


        try{
            const response = await fetch('http://localhost:4000/admin',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(sendData)
            })

            const data = await response.json();
            if(data.admin){
                navigate('/adminhome');
            }
            else{
                console.log("not admin and we will add a 404 page later");
            }
            
        }
        catch(e){
            console.log(e)
        }
        
    }


    getLoginData();

    setUsername('');
    setPassword('');
  };

  return (
    <div className="login flex flex-col bg-[#123456] gap-3 content-center items-center pt-20 pb-20">
      <div>
        <div>
          <label for="username">User name</label>
        </div>
        <div>
          <input className="rounded-md w-60 h-8 p-3" type="text" name="usename" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
      </div>
      <div>
        <div >
          <label for="username">Password</label>
        </div>
        <div>
          <input className="rounded-md w-60 h-8 p-3" type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
        </div>
      </div>
      <button
      className="w-24 bg-[#ef233c] rounded-md mt-6"
        onClick={(e) => {
          adminlogin();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default AdminPage;
