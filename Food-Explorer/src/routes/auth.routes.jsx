import {Routes, Route } from "react-router-dom"

import {SingUp} from "../pages/login/Sing-Up"
import {SingIn} from "../pages/login/Sing-In"


export function AuthRoutes(){

return(

<Routes>

  <Route path="/" element={<SingIn/>}/>
  <Route path="/register" element={<SingUp/>}/>

</Routes>

)

}