import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";


const AccordeonItem = ({ blok }) => {
  return (
    <div className="accordeonItem" {...storyblokEditable(blok)}>
        <img src={blok.picture.filename} alt={blok.picture.alt} />
        <h3>{blok.title}</h3>
        <p>{blok.introText}</p>
        <ul>
          {blok.articles.map((article) => {
            return (
              <li key={article.slug} className="relatedArticle">
                <Link href={`articles/${article.slug}`}>
                  <a className="articleLink">
                    <img src={article.content.featuredImage.filename} className="articleFeaturedImage" alt={article.content.featuredImage.alt} />
                    <h2 className="articleTitle">
                      {article.content.title}
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

export default AccordeonItem;
