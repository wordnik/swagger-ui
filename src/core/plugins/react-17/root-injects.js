export const render = (getSystem, getStore, getComponent, getComponents) => (domNode) => {
    const App = getComponent(getSystem, getStore, getComponents)("App", "root")
    const ReactDOM = require("react-dom")
    ReactDOM.render(<App/>, domNode)
}