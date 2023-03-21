import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";


const UspSection = ({ blok }) => {
  return (
    <div className="uspSection" {...storyblokEditable(blok)}>
        <h3>{blok.title}</h3>
        <p>{blok.description}</p>
        <ul>
          {blok.projects.map((project) => {
            return (
              <li key={project.slug} className="projectShowcase">
                <Link href={`projects/${project.slug}`}>
                  <a className="projectLink">
                    <img src={project.content.image.filename} className="projectImage" alt={project.content.image.alt} />
                    <h2 className="projectTitle">
                      {project.content.title}
                    </h2>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
    </div>
  );
};

export default UspSection;
