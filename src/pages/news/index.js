import React from "react";

import Layout from "../../components/Layout";
import NewsRoll from "../../components/NewsRoll";
import { backgroundImage } from "../../constants";
export default class TrainingIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
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
            最新消息
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <NewsRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
