"use client";
import { useEffect } from "react";
import Contect from "@/components/Contect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Port from "@/components/Port";
import Site from "@/components/Site";
import Skill from "@/components/Skill";
import Skip from "@/components/Skip";

import lenis from "@/utils/lenis";
import link from "@/utils/link";

export default function Page() {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <>
      <Skip />
      <Header />
      <Intro />
      <Skill />
      <Site />
      <Port />
      <Contect />
      <Footer />
    </>
  );
}
