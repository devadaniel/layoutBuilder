// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showRightNavbar, showLeftNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <nav className="left-nav-container">
              <h1 className="left-nav-heading">Left Navbar Menu</h1>
              <ul className="list-items">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </nav>
          ) : null}

          {showContent ? (
            <div className="content-body-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <nav className="right-nav-container">
              <h1 className="right-nav-heading">Right Navbar</h1>
              <p className="add-1-box">Ad 1</p>
              <p className="add-1-box">Ad 2</p>
            </nav>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
