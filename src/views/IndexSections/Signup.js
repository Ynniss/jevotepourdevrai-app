
import React from "react";
import { useEffect, useState } from 'react';
import YoutubeEmbed from "components/YoutubeEmbed";
import { Link } from "react-router-dom";
import contract from '../../contracts/NFTCollectible.json';
import { ethers } from 'ethers';


// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const contractAddress = "0x355638a4eCcb777794257f22f50c289d4189F245";
const abi = contract.abi;

export default function Signup() {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  const connectWalletButton = () => {
    return(
      <Button onClick={connectWalletHandler} color="primary">
        Connecter votre wallet
      </Button>
      )
  }

  const goToElectionPage = () => {
    return(
      <Button  color="primary" to="register-page">
        Commencer l'aventure
      </Button>
      )
  }

  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="5">
            <h3 className="display-3 text-white">
              Agacé par le scrutin uninomial majoritaire à deux tours ? N'en dites pas plus.
              {" "}
            </h3>
            <div className="btn-wrapper">
            {currentAccount ? goToElectionPage() : connectWalletButton()}
            </div>
          </Col>
          <Col className="mb-lg-auto">
            <YoutubeEmbed embedId="0tXc_-rUwdg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
