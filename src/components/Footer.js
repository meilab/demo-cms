import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
import logo from "../img/yoga-header-logo.jpeg";
import wechat from '../img/social/wechat.png'
import weibo from '../img/social/weibo.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          {/* <img
            src={logo}
            alt="Yoga"
            style={{ width: '14em', height: '10em' }}
          /> */}
          Yoga
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        主页
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        关于我们
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/game">
                        比赛
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/athlete">
                        运动员
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/products">
                        产品
                      </Link>
                    </li> */}
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        管理
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                  <li>
                      <Link className="navbar-item" to="/news">
                        新闻
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        我们的故事
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        联系我们
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="微信" href="https://wechat.com">
                  <img
                    src={wechat}
                    alt="wechat"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="微博" href="https://weibo.com">
                  <img
                    className="fas fa-lg"
                    src={weibo}
                    alt="weibo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="抖音" href="https://douyin.com">
                  <img
                    src={wechat}
                    alt="douyin"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="B站" href="https://bilibili.com">
                  <img
                    src={weibo}
                    alt="bilibily"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
