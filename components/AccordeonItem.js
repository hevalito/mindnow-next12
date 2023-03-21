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
                    {article}
                    {/* <img src={article.featuredImage.filename} className="articleFeaturedImage" alt={article.featuredImage.alt} />
                    <h2 className="articleTitle">
                      {article.title}
                    </h2> */}
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
