import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
import { Provider } from "react-redux";
import store from "./store";
// import { useContext, useEffect, useState } from "react";
// import PageLoader from "./components/loaders/PageLoader";
// import { AuthContext } from "./ContextAPI/AuthProvider/AuthProvider";

function App() {
  // const token = localStorage.getItem("HeyLinkToken")
  // const { userData } = useContext(AuthContext)

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // });

  return (
    <Provider store={store}>
      <div className="">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </Provider>
  );
}

export default App;
