import React from "react"
import PropTypes from "prop-types"
import { sanitizeUrl } from "core/utils"
import { safeBuildUrl } from "core/utils/url"
import { OAS3ComponentWrapFactory } from "../helpers"

const baseSPDXurl = "https://spdx.org/licenses"
const createSPDXurl = (identifier) => {
  return `${baseSPDXurl}/${identifier}.html`
}

const License = (props) => {
  const { license, getComponent, selectedServer, url: specUrl } = props
  const Link = getComponent("Link")
  const name = license.get("name") || "License"
  const url = safeBuildUrl(license.get("url"), specUrl, { selectedServer })
  const identifier = license.get("identifier") || "" // OAS3.1 field
  const identifierUrl = createSPDXurl(identifier)

  return (
    <div className="info__license">
      {
        url && !identifier ? <Link target="_blank" href={sanitizeUrl(url)}>{name}</Link>
          : <div>{name}</div>
      }
      {
        identifier && !url && <div className="info__license__identifier"><Link target="_blank" href={sanitizeUrl(baseSPDXurl)}>SPDX License</Link>: <Link target="_blank" href={sanitizeUrl(identifierUrl)}>{identifier}</Link></div>
      }
      {
        identifier && url && <div>Render Error: License.url and License.identifier are mutually exclusive fields</div>
      }
    </div>
  )
}

License.propTypes = {
  license: PropTypes.shape({
    get: PropTypes.func,
  }),
  getComponent: PropTypes.func.isRequired,
  specSelectors: PropTypes.object.isRequired,
  selectedServer: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default OAS3ComponentWrapFactory(License)