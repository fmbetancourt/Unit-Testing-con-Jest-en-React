import {createStore} from "redux";
import reducer from "../reducers";
import initialState from "../initialState";
import { createBrowserHistory } from 'history';
import {Provider} from "react-redux";


const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const providerMock = props =>{
  <Provider store={store}>
    <Router history={history}>
      {props.children}
    </Router>
  </Provider>
};

export default providerMock;



