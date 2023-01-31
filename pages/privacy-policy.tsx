import Head from "next/head";
import React from "react";
import { Wrapper } from "../components/Layout/Wrapper/Wrapper";
import { PrivacyPolicyContent } from "../components/PrivacyPolicy/PrivacyPolicyContent";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>HEI - Privacy Policy</title>
      </Head>
      <Wrapper>
        <PrivacyPolicyContent />
      </Wrapper>
    </>
  );
};

export default PrivacyPolicyPage;
