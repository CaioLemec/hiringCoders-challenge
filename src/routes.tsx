import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { GlobalStyle } from "./styles/global";


export function Routes() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
