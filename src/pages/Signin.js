import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Signin.module.css";
import { useMoralis } from "react-moralis";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useCookies } from "react-cookie";
import axios from "axios";

import loginGoogleImg from "./resources/loginGoogleImg.png";
import loginMetamaskImg from "./resources/loginMetamaskImg.png";
import "./resources/firebaseConfig";

import BusinessNameImg from "./resources/BusinessNameImg.png";

function Signin() {
  const navigate = useNavigate();
  const { authenticate, isAuthenticated } = useMoralis();
  const provider = new GoogleAuthProvider();
  const [cookies, setCookie] = useCookies([
    "email",
    "name",
    "companyName",
    "apiKey",
  ]);
  const [popUp, setPopUp] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [tempData, setTempData] = useState({});

  const auth = getAuth();
  auth.languageCode = "en";

  const onSignInWithMetaMaskClick = useCallback(() => {
    async function login() {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          navigate("/user");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    async function handelLogin() {
      if (!isAuthenticated) {
        await login();
      } else {
        navigate("/user");
        // console.log(user.get("ethAddress"));
      }
    }
    handelLogin();
  }, [isAuthenticated, authenticate, navigate]);

  const handelSignUp = useCallback(async () => {
    if (businessName === "") {
      return;
    }
    const dbUser = await axios.post(`${process.env.REACT_APP_API}/signup`, {
      email: tempData.email,
      name: tempData.displayName,
      companyName: businessName,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    const returnedData = dbUser.data;
    setCookie("email", returnedData.email, {
      path: "/",
      expires: new Date(Date.now() + 3600 * 1000),
    });
    setCookie("name", returnedData.name, {
      path: "/",
      expires: new Date(Date.now() + 3600 * 1000),
    });
    setCookie("companyName", returnedData.companyName, {
      path: "/",
      expires: new Date(Date.now() + 3600 * 1000),
    });
    setCookie("apiKey", returnedData._id, {
      path: "/",
      expires: new Date(Date.now() + 3600 * 1000),
    });
    navigate("/business");
  }, [tempData, businessName, navigate, setCookie]);

  const onSignInWithGoogleClick = () => {
    if (cookies.email && cookies.user) {
      navigate("/business");
      return;
    }
    async function login() {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const dbUser = await axios.post(
        `${process.env.REACT_APP_API}/login`,
        {
          email: user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      const returnedData = dbUser.data;
      if (!returnedData) {
        setTempData(user);
        setPopUp(true);
        return;
      }
      setCookie("email", user.email, {
        path: "/",
        expires: new Date(Date.now() + 3600 * 1000),
      });
      setCookie("name", returnedData.name, {
        path: "/",
        expires: new Date(Date.now() + 3600 * 1000),
      });
      setCookie("companyName", returnedData.companyName, {
        path: "/",
        expires: new Date(Date.now() + 3600 * 1000),
      });
      setCookie("apiKey", returnedData._id, {
        path: "/",
        expires: new Date(Date.now() + 3600 * 1000),
      });
      navigate("/business");
    }
    login();
    // navigate('/business')
  };

  function handelPopUp() {
    return (
      <div className={styles.popup}>
        <div className={styles.popupstyle}>
          <h2>Entre your Business name</h2>
          <div className={styles.styleInput}>
            <input
              className={styles.inputfield}
              type="text"
              placeholder="Business name"
              value={businessName}
              onChange={(e) => {
                setBusinessName(e.target.value);
                }
              }
              style={{  border: "none" ,color: "white", fontSize: "1.5rem", }}
            ></input>
            <button type="submit" className={styles.submitBtn} style={{fontSize: "1.5rem"}} onClick={handelSignUp}>
               Submit
            </button>
          </div>  
          <img className={styles.imgPostionBusiness} alt="" src={BusinessNameImg}/>
        </div>
        
      </div>
    );
  }

  return (
    <div className={styles.signinContainer}>
      <div className={styles.frameContainer}>
        <div className={styles.areYouA1}>Are you a Business?</div>
        <div className={styles.areYouA}>Are you a Student?</div>
      </div>
      <div className={styles.lineLine} />
      <div
        className={styles.signInWithGoogle}
        onClick={onSignInWithGoogleClick}
      >
        <img className={styles.image37} alt="" src={loginGoogleImg} />
        <div className={styles.signInWith1}>Sign in with Google</div>
      </div>
      <div
        className={styles.signInWithMetaMask}
        onClick={onSignInWithMetaMaskClick}
      >
        <img className={styles.image38} alt="" src={loginMetamaskImg} />
        <div className={styles.signInWith}>Sign in with MetaMask</div>
      </div>
      {popUp && handelPopUp()}
    </div>
  );
}

export default Signin;
