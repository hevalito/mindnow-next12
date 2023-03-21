import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import ContentHero from "../components/ContentHero";
import ApproachAccordeon from "../components/ApproachAccordeon";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";

const components = {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
    contentHero: ContentHero,
    approachAccordeon: ApproachAccordeon
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