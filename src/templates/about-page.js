import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/about-page.scss";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const AboutPageTemplate = (props) => {
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
      <section className="section  developerGroups  about-developerGroups">
        <div className="container">
          <ReactMarkdown source={page.frontmatter.developerGroups} />
        </div>
      </section>
      <section className="about-header">
        <div className="about-titleWrapper">
          <h1 className="about-title">{page.frontmatter.orgImage.name}</h1>
        </div>
        <div className="about-imageWrapper">
          <PreviewCompatibleImage imageInfo={page.frontmatter.orgImage} />
        </div>
      </section>
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
                {/* <img
                  className="purpose-listItemImage"
                  src={galleryImage.image}
                  alt={galleryImage.imageAlt}
                /> */}
                <span className="purpose-listItemName">
                  {galleryImage.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <h2 className="purpose-title">{page.frontmatter.companyMember.title}</h2>
        <ul className="about-gallery  galleryList">
          {page.frontmatter.companyMember.gallery.map((galleryImage, index) => (
            <li key={index} className="galleryList-item">
              <PreviewCompatibleImage imageInfo={galleryImage} />
              {/* <img src={galleryImage.image} alt={galleryImage.imageAlt} /> */}
            </li>
          ))}
        </ul>
      </section>
      <section className="section">
        <h2 className="purpose-title">{page.frontmatter.personalMember.title}</h2>
        <ul className="about-gallery  galleryList">
          {page.frontmatter.personalMember.gallery.map((galleryImage, index) => (
            <li key={index} className="galleryList-item">
              <PreviewCompatibleImage imageInfo={galleryImage} />
              {/* <img src={galleryImage.image} alt={galleryImage.imageAlt} /> */}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

const AboutPage = ({ data }) => {
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
      <AboutPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
        orgImage {
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
        developerGroups
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
        companyMember {
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
        personalMember {
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
