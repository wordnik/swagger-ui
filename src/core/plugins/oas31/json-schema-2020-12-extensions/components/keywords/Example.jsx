/**
 * @prettier
 */
import React from "react"
import PropTypes from "prop-types"

const Example = ({ schema, fn }) => {
  const { hasKeyword, stringify } = fn.jsonSchema202012.useFn()

  if (!hasKeyword(schema, "example")) return null

  return (
    <div className="json-schema-2020-12-keyword json-schema-2020-12-keyword--example">
      <span className="json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary">
        Example
      </span>
      <span className="json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const">
        {stringify(schema.example)}
      </span>
    </div>
  )
}

Example.propTypes = {
  schema: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  fn: PropTypes.shape({
    jsonSchema202012: PropTypes.shape({
      useFn: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Example
