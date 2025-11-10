import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Toaster } from "react-hot-toast";

import { persistor, store } from "./redux/store";
import Router from "./router/router";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
      <Toaster
        position="top-center"
        toastOptions={{
          error: {
            duration: 3000,
          },
        }}
      />
    </>
  );
}

export default App;
