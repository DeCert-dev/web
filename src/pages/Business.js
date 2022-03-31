import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styles from "./css/BusinessDashboard.module.css";
import { useCookies } from "react-cookie";
import { getAuth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

import userDefaultImg from "./resources/userDefaultImg.png";
import logoutImg from "./resources/logoutImg.png";
import dashboardBG from "./resources/dashboardBG.png";
import copyImg from "./resources/copyImg.png";
import addImg from "./resources/addImg.png";

function BusinessDashboard() {

  function divPopulate(name, address, date, key) {
    return (
      <div className={styles.frameContainer} key={key}>
          <div className={styles.groupContainer}>
            <div className={styles.rotarySafariText}>{name} </div>
            <div className={styles.x73e989cc5E69c2254327a1bC31725Text}>
              {address}
            </div>
            <div className={styles.text}>{date}</div>
          </div>
        </div>
    )
  };
  async function handelLogout(){
    await gAuth.signOut();
    setCookie('email', undefined, { path: '/', expires: new Date(Date.now() - 3600 * 1000) });
    setCookie('name', undefined, { path: '/', expires: new Date(Date.now() - 3600 * 1000) });
    setCookie('companyName', undefined, { path: '/', expires: new Date(Date.now() - 3600 * 1000) });
    setCookie('apiKey', undefined, { path: '/', expires: new Date(Date.now() - 3600 * 1000) });
  };

  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState("Hello");
  const [copyToClipBoard, setCopyToClipBoard] = useState("Copy API key");
  const [businessName, setBusinessName] = useState("Business Name");
  const [minted, setMinted] = useState([]);
  const [cookies, setCookie] = useCookies(['email', 'name', 'companyName', 'apiKey']);

  const gAuth = getAuth();

  useEffect(() => {
    if (cookies.email === undefined) {
      navigate('/signin');
      return;
    }
    async function handelPromise() {
      setApiKey(cookies.apiKey);
      setBusinessName(cookies.companyName);
      await axios.post(`${process.env.REACT_APP_API}/minted`, {
          email: cookies.email
        },{
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
          }
        }).then(res => {
          setMinted(res.data.mintedCertificates);
        });
    }
    handelPromise();
      
  }, [cookies, navigate]);

  const onCopyAPIKey1Click = useCallback(async() => {
    navigator.clipboard.writeText(apiKey);
    setCopyToClipBoard("Copied!");
    await new Promise(resolve => setTimeout(resolve, 2000));
    setCopyToClipBoard("Copy API key");
  }, [apiKey]);

  return (
    <div className={styles.businessDashboardContainer}>
      <div className={styles.image18} />
      <div className={styles.tableDataContainer}>
        <div className={styles.frameContainer4}>
          <div className={styles.frameContainer5}>
            <div className={styles.nameText}>Name</div>
            <div className={styles.nameText}>Address</div>
            <div className={styles.nameText}>Date</div>
          </div>
          <div className={styles.lineLine} />
        </div>
        {minted.map((item, key) => {
            return divPopulate(item.name, item.address, item.date, key);
          })
        }
      </div>
      <img className={styles.add} alt="" src={addImg} />
      <div className={styles.userLogOutContainer}>
        <img className={styles.image19} alt="" src={userDefaultImg} />
        <div className={styles.logoutContainer}>
          <div className={styles.logoutText}>Logout</div>
          <input type="image" className={styles.image20Icon} alt="" src={logoutImg} onClick={handelLogout}/>
          {/* <img className={styles.image20Icon} alt="" src={logoutImg} /> */}
        </div>
      </div>
      <div className={styles.welcomeTextContainer}>
        <b className={styles.nameText}>
          <p className={styles.welcomeP}>Welcome</p>
          <p className={styles.businessNameP}>{businessName}</p>
        </b>
        <img
          className={styles.casualLife3d241Image}
          alt=""
          src={dashboardBG}
        />
      </div>
      <div className={styles.copyAPIKey} onClick={onCopyAPIKey1Click}>
        <div className={styles.copyAPIKey1}>{copyToClipBoard}</div>
        <img className={styles.image39Icon} alt="" src={copyImg} />
      </div>
    </div>
  );
}

export default BusinessDashboard;
