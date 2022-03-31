import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/LandingPage.module.css";

// import images from "./resources/index.js";
import {
  DeCertLogo,
  HeroImageOne,
  HeroImageTwo,
  BG1,
  BG2,
  BG3,
  BG4,
  BG5,
  equalImg,
  ethLogo,
  plusImg,
  polygonImg,
  filecoinImg,
  whatareweImg,
  certImg,
  cer2Img,
  cert3Img,
  dividerImg,
  githubImg,
  linkdinImg,
  discordImg,
} from "./resources";

function LandingPage() {
  const navigate = useNavigate();

  const onConnectBtnContainerClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  return (
    <div className={styles.landingPageDiv}>
      <img className={styles.bGIcon} alt="" src={BG5} />
      <img className={styles.bGIcon1} alt="" src={BG2} />
      <img className={styles.bGIcon2} alt="" src={BG3} />
      <img className={styles.bGIcon4} alt="" src={BG1} /> 
      <img className={styles.bGIcon5} alt="" src={BG4} />
      <div className={styles.navBarDiv}>
        <div className={styles.div} />
        <div className={styles.frameDiv}>
          <img className={styles.deCert1Icon} alt="" src={DeCertLogo} />
          <div className={styles.navnavMenueDiv}>
            <div className={styles.navHomeDiv}>
              <div className={styles.homeDiv}>Home</div>
            </div>
            <div className={styles.navHomeDiv}>
              <div className={styles.homeDiv}>About</div>
            </div>
            <div className={styles.navHomeDiv}>
              <div className={styles.homeDiv}>Services</div>
            </div>
            <div className={styles.navHomeDiv}>
              <div className={styles.homeDiv}>Docs</div>
            </div>
          </div>
          <div
            className={styles.connectBtnDiv}
            onClick={onConnectBtnContainerClick}
          >
            <div className={styles.rectangleDiv} />
            <div className={styles.rectangleDiv1} />
            <div className={styles.loginSingup}>Sign in</div>
          </div>
        </div>
      </div>
      <div className={styles.whatAreWe}>
        <div className={styles.frameDiv1}>
          <div className={styles.whatAreWe1}>What are we?</div>
        </div>
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <img
          className={styles.casualLife3dGirlAndBoySiIcon}
          alt=""
          src={whatareweImg}
        />
      </div>
      <div className={styles.featuresDiv}>
        <div className={styles.featuresDiv1}>Features</div>
        <div className={styles.card1Div}>
          <div className={styles.rectangleDiv2} />
          <div className={styles.loremIpsumDolorSitAmetCo1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            tellus molestie nunc non blandit massa enim. Volutpat consequat
            mauris nunc congue nisi vitae suscipit tellus.{" "}
          </div>
          <div className={styles.certificateOwnershipInBlock}>
            Certificate ownership in blockchain
          </div>
          <img
            className={styles.casualLife3dRewardBadgeWiIcon}
            alt=""
            src={certImg}
          />
        </div>
        <div className={styles.card3Div}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.loremIpsumDolorSitAmetCo2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            tellus molestie nunc non blandit massa enim. Volutpat consequat
            mauris nunc congue nisi vitae suscipit tellus.{" "}
          </div>
          <img
            className={styles.casualLife3dWomanTakingAIcon}
            alt=""
            src={cert3Img}
          />
        </div>
        <div className={styles.card2Div}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.loremIpsumDolorSitAmetCo3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            tellus molestie nunc non blandit massa enim. Volutpat consequat
            mauris nunc congue nisi vitae suscipit tellus.{" "}
          </div>
          <div className={styles.neverLoseYourCertificate}>
            Never lose your certificate
          </div>
          <img
            className={styles.casualLife3dDiplomaCertifiIcon}
            alt=""
            src={cer2Img}
          />
        </div>
        <div className={styles.easyToUseAPI}>Easy to use API</div>
        <img className={styles.dividerIcon} alt="" src={dividerImg} />
      </div>
      <div className={styles.fAQDiv}>
        <div className={styles.frameDiv2}>
          <div className={styles.fAQsDiv}>FAQ’s</div>
        </div>
        <div className={styles.whatAreWe2}>
          <div className={styles.whatIsDeCert}>What is DeCert? </div>
          <div className={styles.lineDiv} />
          <div className={styles.weAreProvingASimpleFastA}>
            We are proving a simple fast API to ed-tech businesses to make their
            certificates into NFTs and send to the receiver. We are making the
            NFTs non-transferable so maintain the legitimacy of the certificates
          </div>
        </div>
        <div className={styles.canWeTransferOurCertificat}>
          <div className={styles.whatAreWe1}>
            Can we transfer our Certificates?
          </div>
          <div className={styles.lineDiv} />
          <div className={styles.weAreProvingASimpleFastA}>
            No, you cannot transfer your certificates, though it follows ERC-721
            token standard{" "}
          </div>
        </div>
        <div className={styles.whyShouldIUseIt}>
          <div className={styles.whatAreWe1}>Why should I use it?</div>
          <div className={styles.lineDiv} />
          <div className={styles.weAreProvingASimpleFastA}>
            For businesses there is no hasle of crypto wallet. Get legitimate
            ownership of your certificate over secure blockchain, certificates
            stay for life-time even if our server crashes
          </div>
        </div>
        <div className={styles.whereAreMyCertificatesStor}>
          <div className={styles.whatAreWe1}>
            Where are my Certificates stored?
          </div>
          <div className={styles.lineDiv} />
          <div className={styles.weAreProvingASimpleFastA}>
            The certificates are stored over a decentralized network - FileCoin.
            The ownership is maintained over etherium or polygon blockchain
          </div>
        </div>
      </div>
      <div className={styles.midDiv}>
        <img className={styles.deCert112} alt="" src={DeCertLogo} />
        <img className={styles.image30Icon} alt="" src={equalImg} />
        <img className={styles.image24Icon} alt="" src={ethLogo} />
        <img className={styles.image29Icon} alt="" src={plusImg} />
        <img className={styles.image26Icon} alt="" src={polygonImg} />
        <img className={styles.image29Icon} alt="" src={plusImg} />
        <img className={styles.image25Icon} alt="" src={filecoinImg} />
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.rightsReservedToDeCert20}>
          Rights Reserved to DeCert © 2022
        </div>
        <img className={styles.deCert1121} alt="" src={DeCertLogo} />
        <div className={styles.groupDiv}>
          <img className={styles.image32Icon} alt="" src={githubImg} />
          <img className={styles.image34Icon} alt="" src={discordImg} />
          <img className={styles.image35Icon} alt="" src={linkdinImg} />
        </div>
      </div>
      <div className={styles.heroFrameDiv}>
        <div className={styles.heroImageDiv}>
          <img
            className={styles.casualLife3dBooksAndGraduIcon}
            alt=""
            src={HeroImageTwo}
          />
          <img
            className={styles.casualLife3dYoungWomanPraIcon}
            alt=""
            src={HeroImageOne}
          />
        </div>
        <div className={styles.landingHeroDiv}>
          <div className={styles.txtHolderDiv}>
            <div className={styles.decentralizedCertificateDiv}>
              Decentralized certificate
            </div>
            <div className={styles.deCertDiv}>
              <span className={styles.deCertSpan}>DeCert</span>
              <span className={styles.span}> </span>
            </div>
          </div>
          <img className={styles.deCert2Icon} alt="" src={DeCertLogo} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
