import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const TabbedAccordeon = ({ blok }) => {
    return (<div className = "tabbedAccordeon" {...storyblokEditable(blok) } > {
            blok.tabbedGroup.map((nestedBlok) => ( <
                StoryblokComponent blok = { nestedBlok }
                key = { nestedBlok._uid }/>
            ))
        } </div>
    );
};

export default TabbedAccordeon;