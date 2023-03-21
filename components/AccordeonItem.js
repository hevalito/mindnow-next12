import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const AccordeonItem = ({ blok }) => {
  return (
    <div className="accordeonItem" {...storyblokEditable(blok)}>
        <h3>{blok.title}</h3>
        <p>{blok.introText}</p>
        {blok.articles.map((nestedBlok) => (
            <div>{nestedBlok.title}</div>
        ))}
    </div>
  );
};

export default AccordeonItem;
