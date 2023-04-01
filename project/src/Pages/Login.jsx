import React from "react";
import banner from "../photos/minibanner.png"
import "../CSS/login.css"
import { Button} from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";

 function Login(){
    const { loginWithRedirect } = useAuth0();

return(
   <div className="login-board">
<img src={banner}/>
<div className="button">
<Button onClick={() => loginWithRedirect()} color="white"  bg="red"m={2}><b>LOGIN</b>/<b>SIGN UP</b></Button>
<p>By continuing , I agree to the <b>terms of use</b> & <b>Privacy policy</b></p>
</div>

   </div>
)
}
export default Login