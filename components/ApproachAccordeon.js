import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const ApproachAccordeon = ({ blok }) => {
  return (
    <div className="approachAccordeon" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default ApproachAccordeon;
