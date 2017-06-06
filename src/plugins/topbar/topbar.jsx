import React, { PropTypes } from "react"

//import "./topbar.less"
import Logo from "./logo_small.png"
import LogoUAL from "./logo_ual.png"

export default class Topbar extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = { url: props.specSelectors.url() }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ url: nextProps.specSelectors.url() })
  }

  onUrlChange =(e)=> {
    let {target: {value}} = e
    this.setState({url: value})
  }

  downloadUrl = (e) => {
    this.props.specActions.updateUrl(this.state.url)
    this.props.specActions.download(this.state.url)
    e.preventDefault()
  }

  render() {
    let { getComponent, specSelectors } = this.props
    const Button = getComponent("Button")
    const Link = getComponent("Link")

    let isLoading = specSelectors.loadingStatus() === "loading"
    let isFailed = specSelectors.loadingStatus() === "failed"

    let inputStyle = {}
    if(isFailed) inputStyle.color = "red"
    if(isLoading) inputStyle.color = "#aaa"
    return (
        <div className="topbar">
          <div className="wrapper">
            <div className="topbar-wrapper">
              <Link href="#" title="eBaoCloud">
                <img height="30" width="110" src={ Logo } alt="eBaoCloud"/>
                <span>eBaoCloud API</span>
              </Link>
              <img height="60" width="160" src={ LogoUAL } alt="UAL"/>
            </div>
          </div>
        </div>

    )
  }
}

Topbar.propTypes = {
  specSelectors: PropTypes.object.isRequired,
  specActions: PropTypes.object.isRequired,
  getComponent: PropTypes.func.isRequired
}
