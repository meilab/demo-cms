import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/about-page.scss";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const ComingPageTemplate = (props) => {
  const { page } = props;

  return (
    <article className="about">
      <div className="about-container  container">
        <section className="about-header">
          <div className="about-titleWrapper">
            <h1 className="about-title">{page.frontmatter.title}</h1>
          </div>
          <div className="about-imageWrapper">
            <PreviewCompatibleImage imageInfo={page.frontmatter.mainImage} />
            {/* <img
              src={page.frontmatter.mainImage.image}
              alt={page.frontmatter.mainImage.imageAlt}
            /> */}
          </div>
        </section>
        <section className="section">
          {/* The page.html is actually markdown when viewing the page from the netlify CMS,
              so we must use the ReactMarkdown component to parse the markdown in that case  */}
          {page.bodyIsMarkdown ? (
            <ReactMarkdown className="about-description" source={page.html} />
          ) : (
            <HTMLContent className="about-description" content={page.html} />
          )}
          <ul className="about-gallery  galleryList">
            {page.frontmatter.gallery.map((galleryImage, index) => (
              <li key={index} className="galleryList-item">
                <PreviewCompatibleImage imageInfo={galleryImage} />
                {/* <img src={galleryImage.image} alt={galleryImage.imageAlt} /> */}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="section  developerGroups  about-developerGroups">
        <div className="container">
          <ReactMarkdown source={page.frontmatter.developerGroups} />
        </div>
      </section>
      <section className="section  organizers  about-organizers">
        <div className="container  organizers-container">
          <h2 className="organizers-title">
            {page.frontmatter.organizers.title}
          </h2>
          <ul className="organizers-list">
            {page.frontmatter.organizers.gallery.map((galleryImage, index) => (
              <li key={index} className="organizers-listItem">
                <div
                  style={{ width: "300px", height: "auto" }}
                  className="organizers-listItemImage"
                >
                  <PreviewCompatibleImage imageInfo={galleryImage} />
                </div>
                {/* <img
                  className="organizers-listItemImage"
                  src={galleryImage.image}
                  alt={galleryImage.imageAlt}
                /> */}
                <span className="organizers-listItemName">
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

const ComingPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data;
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
      <ComingPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

ComingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ComingPage;

export const comingPageQuery = graphql`
  query ComingPage($id: String!) {
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
        gallery {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageAlt
        }
        developerGroups
        organizers {
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
