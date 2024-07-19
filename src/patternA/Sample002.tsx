import { useEffect , useState } from 'react';
import { useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useQRCode } from 'next-qrcode';

import { db } from "../firebase";
import styles from "./Sample002.module.css";


function  Sample002() {
  const [companyName, setCompanyName] = useState('');
  const [userName, setUserName] = useState('');
  const [post, setPost] = useState('');
  const [postNo, setPostNo] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [telNo, setTelNo] = useState('');
  const [url, setURL] = useState('');

  const { Canvas } = useQRCode();
  const search = useLocation().search;

  // 初回のみ実行
  useEffect(() => {

    // URL引数取得
    const urlquery = new URLSearchParams(search);
    let dId= urlquery.get('id');
    if (dId === null || dId === '') {
      dId = '00000000000000000000'
    }

    const q = doc(db, "UserInfo", dId );
    getDoc(q).then((userInfoResult) => {
      setCompanyName(userInfoResult!.data()!.CompanyName);
      setUserName(userInfoResult!.data()!.UserName);
      setPost(userInfoResult!.data()!.Post);
      setPostNo(userInfoResult!.data()!.PostNo);
      setAddress1(userInfoResult!.data()!.Address1);
      setAddress2(userInfoResult!.data()!.Address2);
      setTelNo(userInfoResult!.data()!.TelNo);
      setURL(userInfoResult!.data()!.Url);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return (
      <div className={styles.tmpImageBGI}>
        <div>Hello World Sample002</div>
        <div className={ styles.companyNameStyle }>{ companyName }</div>
      </div>
    );
  };
  
  export default Sample002;