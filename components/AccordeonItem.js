import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const AccordeonItem = ({ blok }) => {
  return (
    <div className="accordeonItem" {...storyblokEditable(blok)}>
        <h3>{blok.title}</h3>
        <p>{blok.introText}</p>
        {blok.articles.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  );
};

export default AccordeonItem;
