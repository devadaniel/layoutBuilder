// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="responsive-configuration-container ">
          <h1 className="configuration-heading">Layout</h1>
          <div className="controller-container">
            <div className="content-container">
              <input
                type="checkbox"
                id="content"
                onChange={onChangeContent}
                checked={showContent}
              />
              <label htmlFor="content" className="content-label">
                Content
              </label>
            </div>
            <div className="left-navbar-container">
              <input
                type="checkbox"
                id="leftNavBar"
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavBar" className="content-label">
                Left Navbar
              </label>
            </div>
            <div className="right-navbar-container">
              <input
                type="checkbox"
                id="RightNavBar"
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="RightNavBar" className="content-label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
