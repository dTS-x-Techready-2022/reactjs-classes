import "./App.scss";
import { useState, useEffect, useReducer } from "react";
import { ThemeContext, theme } from "./utils/contexts/theme-context";

import Banner from "./components/Banner";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Horizontal from "./components/Horizontal";
import Newsletter from "./components/Newsletter";

import banner from "./assets/banner.jpg";
import articleImg1 from "./assets/img_2.png";
import articleImg2 from "./assets/img_1.png";
import img1 from "./assets/img_4.png";
import img2 from "./assets/img_5.png";
import img3 from "./assets/img_6.png";
import img4 from "./assets/img_7.png";
import { initialState, showArticleReducer } from "./store/reducers";

const App = () => {
  // const [showArticle, setShowArticle] = useState(true);
  const [themeId, setThemeId] = useState("light");
  const [state, dispatch] = useReducer(showArticleReducer, initialState);

  const greeting = () => {
    // setShowArticle(showArticle ? false : true);
    // setThemeId(themeId === "light" ? "dark" : "light");
    dispatch({ type: `${state}` });
  };

  useEffect(() => {
    // console.log("showArticle has changed to", state);
  }, [state]);

  return (
    <ThemeContext.Provider value={theme[themeId]}>
      <div className="App">
        <Banner img={banner} />
        <Article1 img={articleImg1} state={state} />
        {state && <Article2 img={articleImg2} />}
        <Horizontal imgs={[img1, img2, img3, img4, img1]} />
        <Newsletter greetingFn={greeting} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
