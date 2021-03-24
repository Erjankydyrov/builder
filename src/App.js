import "./App.css";
import DangoBuilder from "./components/DangoBuilder/DangoBuilder";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        Dango-builder by Erjan Kydyrov
        <DangoBuilder />
      </Layout>
    </div>
  );
}

export default App;
