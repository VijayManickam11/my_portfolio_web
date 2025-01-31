import { BrowserRouter, useRoutes } from "react-router-dom";
import HomePage from "./Pages/homePage";
import Header from "./Header/header";


  const AppRoutes = () => {
    const routes = useRoutes([

      { path:"/",       element:<HomePage />},      

    ]);
    return routes;
  };
  
  const App = () => {
    return (
      <BrowserRouter>
        <Header/>
        <AppRoutes />
      </BrowserRouter>
    );
  };  
  


export default App;