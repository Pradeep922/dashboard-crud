import { useContext, useEffect, useState } from "react";
import { userData } from "./UserContext";

const FilterUser = (userId) => {
  const [state, setState] = useState(null);
  const userArray = useContext(userData);

  useEffect(() => {
    const userObj = userArray.filter((data) => data.id === userId);
    setState(userObj);
    
  }, [userArray, userId]);

  return state ? state : null;

};

export default FilterUser;