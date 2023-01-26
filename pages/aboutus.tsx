import React from "react";
import { AboutUsHeader } from "../components/AboutUs/AboutUsHeader";
import { AboutUsMembers } from "../components/AboutUs/AboutUsMembers";
import { OrganizationGoals } from "../components/AboutUs/OrganizationGoals";
import { Wrapper } from "../components/Layout/Wrapper/Wrapper";

const Aboutus = () => {
  return (
    <Wrapper>
      <AboutUsHeader />
      <AboutUsMembers />
      <OrganizationGoals />
    </Wrapper>
  );
};

export default Aboutus;
