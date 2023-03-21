import { storyblokEditable } from "@storyblok/react";

const ContentHero = ({ blok }) => (
  <div className="contentHero" {...storyblokEditable(blok)}>
    <h1>{blok.title}</h1>
    <p>{blok.leadText}</p>
  </div>
);

export default ContentHero;
