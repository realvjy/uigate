import React from "react"
import { Link } from "gatsby"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
      </>
    )
    return (
      <div className="uigate_index">
        <header>{header}</header>
        <main className="up_i">{children}</main>
        <footer>
          <div className="container">
            <div className="uigate">
              <div className="brand">
                <a href="#"><img src="/uigate-color.png"/></a>
                <ul className="s-lnk">
                  <li>
                    <a href="https://dribbble.com/realvjy" target="__blank"><img src="/dribbble.svg"/></a>
                  </li>
                  <li>
                    <a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg"/></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg"/></a>
                  </li>
                </ul>
              </div>
              <div className="credit">
                <p>© 2019 uigate. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
