import React, { useEffect, useState } from "react";
import styles from "./css/UserDashboardBlank.module.css";
import axios from "axios";

import nothingImg from "./resources/nothingImg.png";
import logoutImg from "./resources/logoutImg.png";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";

function UserDashboardBlank() {
  
  const navigate = useNavigate();

  const { user, logout } = useMoralis();

  const [account, setAccount] = useState('nothing');

  const [cert, setCert] = useState([]);

  const handelLogout = async () => {
    await logout();
    navigate("/signin");
  }

  useEffect(() => {
    if(!user){
      navigate('/signin');
    } else {
      setAccount(user.get('ethAddress'));
    }
    async function workPlease() {
      const [server, temp] = await Promise.all([
        axios.get(`https://deep-index.moralis.io/api/v2/${account}/nft/${process.env.REACT_APP_RINKEBY}?chain=rinkeby&format=decimal`, {
          headers: {
              'X-API-Key': process.env.REACT_APP_MORALIS_API_KEY
          }
        }).then(data => data.data.result),
        axios.get(`https://deep-index.moralis.io/api/v2/${account}/nft/${process.env.REACT_APP_MUMBAI}?chain=mumbai&format=decimal`, {
          headers: {
              'X-API-Key': process.env.REACT_APP_MORALIS_API_KEY
          }
        }).then(data => data.data.result)
      ]);
      const toGet = [];
      const metaData = [];
      server.push(...temp);
      server.forEach(element => {
        if (element.metadata==null) toGet.push(element.token_uri);
        else metaData.push(JSON.parse(element.metadata));
      });
      if (toGet.length >= 0) {
        const toGetData = await Promise.all(toGet.map(element => axios.get(element).then(data => data.data)));
        metaData.push(...toGetData);
      }
      if (metaData.length > 0) setCert(metaData);
  }
  if (account!=='nothing') workPlease();

  }, [account, navigate, user]);

  function notPresent() {
    return (
      <div className={styles.nothingContainer}>
        <img
        className={styles.undrawBlankCanvas3Rbb1}
        alt=""
        src={nothingImg}
      />
      <div className={styles.nothingPresentText}>Nothing Present</div>
      </div>
    )
  }

  function present(element) {
    return (
      <div className={styles.purple}>
        <div className={styles.fix}>
          <img src={"https://gateway.moralisipfs.com/ipfs/" + element.image.substring(7)} alt={element.name} width="330px" height="260px" style={{border: '5px solid #e5e5e5'}}/>
          <p className={styles.name}>{element.name}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.userDashboardBlank}>
      <div className={styles.frameContainer1}>
        <b className={styles.certificatesText}>Certificates</b>
      </div>
      {cert.length===0 && notPresent()}
      {cert.length>0 && 
      <div className={styles.presentContainer}>
        {cert.map(element => {
        return present(element);
        })}
      </div>
      }
      
      <div className={styles.frameContainer}>
        <input type="image" className={styles.image20Icon} alt="" src={logoutImg} onClick={handelLogout}/>
        {/* <img className={styles.image20Icon} alt="" src={logoutImg} /> */}
        <div className={styles.logoutText}>Logout</div>
      </div>
    </div>
  );
}

export default UserDashboardBlank;
