import React from "react"
import { Link } from "gatsby"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
        Landing page for uigate coming soon
      </>
    )
    return (
      <div className="uigate_index">
        <header>{header}</header>
        <main className="up_i">{children}</main>
      </div>
    )
  }
}

export default Layout
