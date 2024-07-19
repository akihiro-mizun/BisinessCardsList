import { useEffect , useState } from 'react';
import { useLocation } from "react-router-dom";
import { getDocs, query, collection, where } from "firebase/firestore";
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
  useEffect( () =>{
    // URL引数取得
    const urlquery = new URLSearchParams(search);
    let dId= urlquery.get('id');
    if (dId === null || dId === '') {
      dId = '00000000000000000000'
    }
    select(dId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ユーザ情報取得
  const select = async (did: string) => {
    const userCollectionRef = collection(db, "UserInfo");
    const q = query(userCollectionRef, where("DisplayUserId", "==", did));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
      setCompanyName(document.data().CompanyName);
      setUserName(document.data().UserName);
      setPost(document.data().Post);
      setPostNo(document.data().PostNo);
      setAddress1(document.data().Address1);
      setAddress2(document.data().Address2);
      setTelNo(document.data().TelNo);
      setURL(document.data().Url);
    });
  };

    return (
      <div className={styles.tmpImageBGI}>
      <div className={ styles.companyNameStyle }>{ companyName }</div>
      <div className={ styles.brockStyle }>
        <div className={ styles.postStyle }>{post}：</div>
        <div className={ styles.userNameStyle }>{ userName }</div>
      </div>
      <div>
        <div className={ styles.postNoStyle }>〒{postNo}</div>
        <div className={ styles.address1Style }>{address1}</div>
        <div className={ styles.address2Style }>{address2}</div>
        <div className={ styles.telNoStyle }>Tel：{telNo}</div>
        <div className={ styles.urlStyle }>URL：{url}</div>
      </div>
    </div>
    );
  };
  
  export default Sample002;