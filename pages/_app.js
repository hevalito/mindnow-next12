import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import ContentHero from "../components/ContentHero";
import ApproachAccordeon from "../components/ApproachAccordeon";
import AccordeonTab from "../components/AccordeonTab";
import AccordeonItem from "../components/AccordeonItem";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Article from "../components/Article";
import Teaser from "../components/Teaser";

const components = {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
    contentHero: ContentHero,
    approachAccordeon: ApproachAccordeon,
    accordeonTab: AccordeonTab,
    accordeonItem: AccordeonItem,
    article: Article
};

storyblokInit({
    accessToken: process.env.sbAccessToken,
    use: [apiPlugin],
    components,
});

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps }
    />;
}

export default MyApp;