import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import ContentHero from "../components/ContentHero";
import TabbedAccordeon from "../components/TabbedAccordeon";
import AccordeonTab from "../components/AccordeonTab";
import AccordeonItem from "../components/AccordeonItem";
import UspSection from "../components/UspSection";
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
    tabbedAccordeon: TabbedAccordeon,
    accordeonTab: AccordeonTab,
    accordeonItem: AccordeonItem,
    article: Article,
    uspSection: UspSection
};

storyblokInit({
    accessToken: "0oB00tz0KBA0yDcvWFZwvgtt",
    use: [apiPlugin],
    components,
});

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps }
    />;
}

export default MyApp;