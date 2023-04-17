import React from "react";

import { flushSync } from "react-dom";

import "./App.css";
import { Page2 } from "./Page2";
import { Page1 } from "./Page1";
import { Nav } from "./Nav/Nav";
import { PageProduct } from "./PageProduct";
import { Breadcrumbs } from "./Breadcrumbs/Breadcrumbs";

function App() {
  // Very basic page transition as the View Transition API is only available on SPA
  const [page, setPage] = React.useState(1);

  function changePage(toWhat) {
    // If the browser doesn't support view transitions, just change the page
    if (!document.startViewTransition) {
      setPage(toWhat);
      return;
    }

    // Based on https://twitter.com/jaffathecake/status/1625444221032316929
    document.startViewTransition(() => {
      flushSync(() => {
        setPage(toWhat);
      });
    });
  }

  return (
    <>
      <div className="App">
        <Nav changePage={changePage} />
        <Breadcrumbs labels={page === 3 ? ["🍩 Product"] : []} />
        <main>
          {page === 1 ? <Page1 changePage={changePage} /> : null}
          {page === 2 ? <Page2 changePage={changePage} /> : null}
          {page === 3 ? <PageProduct changePage={changePage} /> : null}
        </main>
      </div>
    </>
  );
}

export default App;
