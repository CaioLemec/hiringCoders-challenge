import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Offers } from './pages/Offers';
import { Register } from './pages/Register';
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/offers" exact component={Offers} />
      </Switch>
    </BrowserRouter>
  );
}
