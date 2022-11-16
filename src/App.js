import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chart from "./Pages/chart";
import Form from "./Pages/Form";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/chart" component={Chart} />
      </Switch>
    </BrowserRouter>
  );
}
