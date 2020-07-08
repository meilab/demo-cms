import React, { Component, Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

function AthleteRoll({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  const emptyQuery = "";
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState(emptyQuery);

  useEffect(() => {
    setFilteredData(posts);
  }, [])

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    // this is how we get all of our posts
    const posts = data.allMarkdownRemark.edges || [];
    // return all filtered posts
    const filteredData = ( newQuery === emptyQuery ) ? posts : posts.filter((post) => {
      // destructure data from post frontmatter
      const { description, title, tags } = post.node.frontmatter;
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the newQuery string
        description.toLowerCase().includes(newQuery.toLowerCase()) ||
        title.toLowerCase().includes(newQuery.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(newQuery.toLowerCase()))
      );
    });
    // update state according to the latest newQuery and results
    setFilteredData(filteredData);
    setQuery(newQuery);
  };

  return (
    <div className="columns is-multiline">
      <input
        type="text"
        aria-label="Search"
        placeholder="Type to filter posts..."
        onChange={handleInputChange}
      />
      {filteredData &&
        filteredData.map(({ node: post }) => (
          <div className="is-parent column is-6" key={post.id}>
            <article
              className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  );
}

AthleteRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query AthleteRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "athlete-info" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                tags
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <AthleteRoll data={data} count={count} />}
  />
);
