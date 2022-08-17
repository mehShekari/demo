import Layout from './components/layout/Layout';
import { ThemeProvider } from "styled-components";


import { theme } from './theme/theme';
import GlobalStyles from "./styles/Global";
import RouteComponent from './routes/Routes';
import ShppingProvider from './context/StoreContext';

function App() {
  return (
    <div className="App">
      <ShppingProvider>
        <ThemeProvider theme={theme()}>
          <GlobalStyles />
          <Layout>
            <RouteComponent />
          </Layout>
        </ThemeProvider>
      </ShppingProvider>
    </div>
  );
}

export default App;
