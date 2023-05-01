import Conteudo from "../components/section";
import NavHome from "../components/navbar";
import Patrocinio from "../components/patrocinio";
import WhatIs from "../components/what-is-gpt";
import OpenAi from "../components/open-ai";
import CaseStudies from "../components/case-studies";
//import Library from "../components/Library";
import Footer from "../components/footer";


export default function Home() {
    return (
        <>
            <NavHome />
            <Conteudo />
            <Patrocinio />
            <WhatIs />
            <OpenAi />
            <CaseStudies />

            <Footer />
        </>
    )
}