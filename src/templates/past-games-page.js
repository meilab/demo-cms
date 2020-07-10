import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import isBefore from "date-fns/is_before";
import ReactMarkdown from "react-markdown";

import GameMetaInfoTemplate from "./game-meta";
import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/past-games-page.scss";

export const PastGamesPageTemplate = ({
  title,
  content,
  games = null,
  bodyIsMarkdown = false,
}) => {
  return (
    <article className="pastMeetups">
      <div className="container  pastMeetups-container">
        <h1 className="pastMeetups-title">{title}</h1>
        {bodyIsMarkdown ? (
          <ReactMarkdown className="pastMeetups-description" source={content} />
        ) : (
          <HTMLContent className="pastMeetups-description" content={content} />
        )}
        {games &&
          games.map((game, index) => (
            <GameMetaInfoTemplate
              key={index}
              className="pastMeetups-game"
              game={game.node.frontmatter}
              slug={game.node.fields.slug}
            />
          ))}
      </div>
    </article>
  );
};

PastGamesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  games: PropTypes.array,
};

const PastGamesPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;
  let games = data.allMarkdownRemark.edges;

  // Find all the games that occured in the past
  games = games.filter((game) => {
    return isBefore(game.node.frontmatter.rawDate, new Date()) && game;
  });

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <PastGamesPageTemplate
        title={page.frontmatter.title}
        content={page.html}
        games={games}
      />
    </Layout>
  );
};

PastGamesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PastGamesPage;

export const pastGamesPageQuery = graphql`
  query PastGamesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        seo {
          browserTitle
          title
          description
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { presenters: { elemMatch: { text: { ne: null } } } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
            rawDate: date
            presenters {
              name
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              text
              presentationTitle
              links {
                linkText
                linkURL
              }
            }
            location {
              name
            }
          }
        }
      }
    }
  }
`;
