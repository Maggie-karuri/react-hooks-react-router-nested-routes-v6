import users from "../data.js";
import { useParams } from "react-router-dom";

function UserProfile() {
  const params = useParams();

  const user = users.find(user => user.id === parseInt(params.id))

  return(
      <main>
        <h1>{user.name}</h1>
      </main>
  );
};

export default UserProfile;