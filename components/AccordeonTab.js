import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const AccordeonTab = ({ blok }) => {
  return (
    <div className="accordeonTab" {...storyblokEditable(blok)}>
        <h2>{blok.title}</h2>
        {blok.columns.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  );
};

export default AccordeonTab;
