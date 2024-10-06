import { useContext } from "react";
import { UserContext } from "../../providers/userProvider";

function UseInfo() {
    const {user}=useContext(UserContext);
  return (
    <div className="text-center py-10 border m-5">
          {
             <p>{user.email}</p>
          }
    </div>
  )
}

export default UseInfo
