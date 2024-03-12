import { useEffect , useState } from 'react';

import { db } from "../firebase";
import { collection, query, doc, getDoc, getDocs } from "firebase/firestore";

function  Sample001() {
  const [id, setId] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const q = query(collection(db, "UserInfo") );
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setId(doc.id);
        setUserName(doc.data().UserName);
      });
    }); 
  }, []);
  
  return (
    <div className="Sample001">
      <div>{userName}</div>
    </div>
  );
};

export default Sample001;