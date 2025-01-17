import React, { useState } from "react";
import StyledPresale from "./Presale.styles";
import bgImage from "../../img/private_sale_background.png";
import greedyVerseLogo from "../../img/gameLogo.png";
import socialMediaLink from "../../utils/socialMediaLink.array";
import socialIconDecorator from "../../img/SocialIconDecorator.svg";
import ProgressBar from "./progressBar/ProgressBar";
import buyCoinBg from "../../img/greedyVerseButton.svg";
import Support from "../support/Support";
import Header from "../header/Header";
import SelectWallet from "./selectWallet/SelectWallet";
import TransactionDetails from "./transactionDetails/TransactionDetails";

function Presale() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  return (
    <StyledPresale
      style={{
        backgroundImage: `url(${bgImage}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#000",
      }}
    >
      <div className="bg_shade"></div>
      <section id="main">
        <header className="logoContainer">
          <img src={greedyVerseLogo} alt="logo" id="logoImg" />
        </header>
        <div className="socialMediaLinks">
          {socialMediaLink.map((item) => (
            <a href={item.link}>
              <div
                className="socialLink"
                title={item.title}
                style={{
                  backgroundImage: `url(${socialIconDecorator}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img
                  src={item.icon}
                  className="socialIcon"
                  alt={item.alt}
                  title={item.title}
                />
              </div>
            </a>
          ))}
        </div>

        <Header text="presale" />

        <section className="connectWalletSection">
          <main className="connectWalletContainer">
            <div className="textProgressBarContainer">
              <header className="progressBarContainerHeader">
                Don't miss out on Greedyverse presale!
              </header>
              <main className="progressBarMainText">
                Greedyverse is an innovative gamefi project building the next
                generation of play-to-earn games that are fun and immersive
                starting with greedy clans - A multiplayer real-time battle
                strategy game built on the blockchain where players can build,
                battle, earn and connect. Our Solutions.
              </main>
              <aside>
                <ProgressBar />
              </aside>
            </div>
            {!isWalletConnected && (
              <div className="buyCoinContainer">
                <div className="coinRate">1 USDT = 30.77 $GVERSE</div>
                <div className="hurryNowText">
                  Hurry before the end of presale!
                </div>

                <main className="buyButtonContainer">
                  <div className="buyButtonHeader">
                    Connect your wallet to buy tokens:
                  </div>
                  <button
                    onClick={() => setConnectWallet(true)}
                    style={{
                      backgroundImage: `url(${buyCoinBg}) `,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundColor: "transparent",
                    }}
                    className="buttonContainer"
                  >
                    <span>Connect Wallet</span>
                  </button>
                  <aside className="accessoryContainer">
                    <a href="/#" className="connectWalletHelperLink">
                      How to buy
                    </a>
                    |
                    <a href="/#" className="connectWalletHelperLink">
                      New to crypto?
                    </a>
                    |
                    <a href="/#" className="connectWalletHelperLink">
                      Buy ETH with card
                    </a>
                  </aside>

                  {connectWallet && (
                    <SelectWallet
                      setConnectWallet={setConnectWallet}
                      connectWallet={connectWallet}
                    />
                  )}
                </main>
              </div>
            )}
            {isWalletConnected && <TransactionDetails />}
          </main>
        </section>
      </section>
      <Support />
    </StyledPresale>
  );
}

export default Presale;
