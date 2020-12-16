import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";

const logoUri =
  "https://sxsjsyjxh.oss-cn-beijing.aliyuncs.com/shanxishengjianshenyujiaxiehuibiaoshi.jpg?OSSAccessKeyId=TMP.3KhseE38K4gaSVM1MRVNhjY7N9uaGkJpmu6J2sTo7BBFiBPtmXFTQsdU82u8EQAVyVEYfSV8kwx6vmxn4TGjSppZACrhci&Signature=sS6beOguBF2atstqzuRyJS1gBhg%3D&versionId=CAEQDBiBgIDF35S1sRciIDY4ZTU5YjYzMTQxYTRkZGNiMDFmM2M2Y2U3MWIwM2Yy&response-content-type=application%2Foctet-stream";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      },
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container" style={{ justifyContent: "space-between" }}>
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logoUri}
                alt="Yoga"
                style={{ width: 120, height: 120, maxHeight: 120 }}
              />
              陕西省健身瑜伽协会
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            style={{ flexGrow: 0 }}
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/news">
                新闻资讯
              </Link>
              <Link className="navbar-item" to="/notifications">
                公告通知
              </Link>
              {/* <Link className="navbar-item" to="/pastGames">
                竞赛工作
              </Link> */}
              {/* <Link className="navbar-item" to="/certificate"> */}
              {/* <Link className="navbar-item" to="/coming">
                证书查询
              </Link> */}
              <Link className="navbar-item" to="/culture">
                瑜伽文化
              </Link>
              <Link className="navbar-item" to="/about">
                协会介绍
              </Link>
              <Link className="navbar-item" to="/coming">
                会员机构
              </Link>
              <Link className="navbar-item" to="/coming">
                人才库
              </Link>
              <Link className="navbar-item" to="/coming">
                下载专区
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
              {/* <Link className="navbar-item" to="/home2">
                Home2
              </Link> */}
            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
