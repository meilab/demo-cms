import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/about-page.scss";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const CulturePageTemplate = (props) => {
  const { page } = props;
  // const str = page.frontmatter.mainImage.image;
  const str = '/img/blog-index.jpg';

  return (
    <article className="about">
      <div className="about-container  container">
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${str})`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem",
            }}
          >
            {page.frontmatter.title}
          </h1>
        </div>
        <section className="section">
          <h2 className="purpose-title">{"协会介绍"}</h2>
          {/* The page.html is actually markdown when viewing the page from the netlify CMS,
              so we must use the ReactMarkdown component to parse the markdown in that case  */}
          {page.bodyIsMarkdown ? (
            <ReactMarkdown className="about-description" source={page.html} />
          ) : (
            <HTMLContent className="about-description" content={page.html} />
          )}
        </section>
      </div>
      <section className="section  purpose  about-purpose">
        <div className="container  purpose-container">
          <h2 className="purpose-title">{page.frontmatter.purpose.title}</h2>
          <ul className="purpose-list">
            {page.frontmatter.purpose.gallery.map((galleryImage, index) => (
              <li key={index} className="purpose-listItem">
                <div
                  style={{ width: "300px", height: "auto" }}
                  className="purpose-listItemImage"
                >
                  <PreviewCompatibleImage imageInfo={galleryImage} />
                </div>
                <span className="purpose-listItemName">
                  {galleryImage.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

const CulturePage = ({ data }) => {
  const { markdownRemark: page } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;

  return (
    <Layout>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <CulturePageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

CulturePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CulturePage;

export const culturePageQuery = graphql`
  query CulturePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        mainImage {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageAlt
        }
        purpose {
          title
          gallery {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageAlt
            name
          }
        }
        seo {
          browserTitle
          title
          description
        }
      }
    }
  }
`;
