import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <>
          <section className="hero_section">
            <div className="container">
              <div className="hero-wrap">
                <div className="hero">
                  <div className="brand">
                    <a href="/">
                      <img src="uigate.png" className="logomark"/>
                      <img src="uigate-logo.png" className="logotype"/>
                    </a>
                  </div>
                  <div className="txt">
                    <h2>A modern age digital <strong>creative studio</strong></h2>
                    <p> We are a team of designers, dreamer, storyteller, illustrator, and developers with the aim to build great design solutions for even the most complicated problems.</p>
                  </div>
                  <div className="worked">
                    <h4>Worked with</h4>
                    <div className="brand">
                      <img src="eversend.png" />
                      <img src="feedly.png" />
                      <img src="learnapp.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="product_section">
            <div className="container">
              <div className="product-list-wrap">
                <h4>Our Products</h4>
                <div className="product-list">
                  <div className="product-wrap">
                    <a href="https://illlustrations.co" className="product" target="__blank">
                      <img src="/illlustrations.png" />
                      <p>Open-source illustrations library, contain more than 100+ illustrations</p>
                      <h5>illlustrations.co</h5>
                      <div className="tags ph">
                        #3 of the day at product hunt
                      </div>
                    </a>
                  </div>

                  <div className="product-wrap">
                    <a href="https://uiprint.co" className="product" target="__blank">
                      <img src="/uiprint.png" />
                      <p>Collection of printable wireframe, mockup and dot grid sketchpad templates.</p>
                      <h5>uiprint.co</h5>
                      <div className="tags ph">
                        #1 of the day at product hunt
                      </div>
                    </a>
                  </div>

                  <div className="product-wrap">
                    <a href="https://uilogos.co" className="product">
                      <img src="/uilogos.png" />
                      <p>Sketch and XD Plugin to insert professional logos in design persentations.</p>
                      <h5>uilogos.co</h5>
                    </a>
                  </div>

                  <div className="product-wrap">
                    <a href="https://instagram.com/uihues" className="product">
                      <img src="/uihues.png" />
                      <p>Curated collection of color palettes and gradient.</p>
                      <h5>uihues.com</h5>
                    </a>
                  </div>

                  <div className="product-wrap">
                    <a href="https://graficspark.com" className="product">
                      <img src="/graficspark.png" />
                      <p>Digital Market place for design mockups and illustrations.</p>
                      <h5>graficspark.com</h5>

                    </a>
                  </div>

                  <div className="product-wrap">
                    <a href="https://makerofthis.co" className="product">
                      <img src="/mot.png" />
                      <p>Curated list of real makers.</p>
                      <div className="tags soon">
                        comming soon
                      </div>
                    </a>
                  </div>

                  <div className="product-wrap">
                    <a href="#" className="product">
                      <img src="/uischool.png" />
                      <p>Next generation design school.</p>
                      <div className="tags soon">
                        comming soon
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <section className="team_section">
            <div className="container">
              <div className="team-list-wrap">
                  <h4>Who we are</h4>
                  <div className="team-wrap">

                    <div className="team">
                      <div className="t-img">
                        <img src="vijay-verma.jpg" />
                      </div>
                      <div className="t-txt">
                        <h1>vijay verma</h1>
                        <h3>Founder / Design Cheif</h3>
                        <ul className="social">
                          <li>
                            <a href="https://dribbble.com/uigate" target="__blank"><img src="/dribbble.svg"/></a>
                          </li>
                          <li>
                            <a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg"/></a>
                          </li>
                          <li>
                            <a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg"/></a>
                          </li>
                          <li>
                            <a href="https://facebook.com/realvjy" target="__blank"><img src="/linkedin.svg"/></a>
                          </li>
                        </ul>
                        <p>A designer, maker and dreamer. Working towards excelling at creating memorable design solutions. Creates touch point between brands and people they serve through his wisdom of user experience.</p>
                      </div>

                    </div>
                  </div>
              </div>
            </div>
          </section>
        </>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
