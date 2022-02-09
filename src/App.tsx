import './styles.css'
import IMAGE from  './react.png'
import LOGO from  './logo.svg'
function App() {
  return <>
  <h1>React TypeScript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}</h1>
  <img src={IMAGE} alt="React Logo" width="300" height="200" />
  <img src={LOGO} alt="React Logo" width="300" />
  </>;
}

export default App;
