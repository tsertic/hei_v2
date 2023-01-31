import Head from "next/head";
import React, { ReactElement, useState } from "react";
import { FaqHeader } from "../components/FAQ/FaqHeader";
import { FaqList } from "../components/FAQ/FaqList";
import { Wrapper } from "../components/Layout/Wrapper/Wrapper";
import { Search } from "../components/UI/Search";
import { FAQ } from "./../db/FAQ";
const Faq = () => {
  const [faqQuestions, setFaqQuestions] = useState(FAQ);
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (e: any) => {
    setSearchValue(e.target.value);
    const searchValue = e.target.value;
    const filteredQuestions = [];
    for (let question of FAQ) {
      if (
        question.answer.includes(searchValue) ||
        question.question.includes(searchValue)
      ) {
        filteredQuestions.push(question);
      }
    }
    setFaqQuestions(filteredQuestions);
  };
  return (
    <>
      <Head>
        <title>HEI - FAQ</title>
      </Head>
      <Wrapper>
        <FaqHeader />
        <Search
          placeholder="Pretraga po sadrzaju"
          changeHandler={searchHandler}
          value={searchValue}
        />
        <FaqList questions={faqQuestions} />
      </Wrapper>
    </>
  );
};

export default Faq;

export const getStaticProps = () => {
  return {
    props: {
      questions: FAQ,
    },
  };
};
