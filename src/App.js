import "./App.scss";

import banner from "./assets/banner.jpg";
import articleImg1 from "./assets/img_2.png";
import articleImg2 from "./assets/img_1.png";
import img1 from "./assets/img_4.png";
import img2 from "./assets/img_5.png";
import img3 from "./assets/img_6.png";
import img4 from "./assets/img_7.png";

const App = () => {
  const showArticle = true;

  const greeting = () => {
    alert("email submitted!");
  };

  return (
    <div className="App">
      <div id="banner">
        <img src={banner} className="image" />
      </div>
      {showArticle ? (
        <div className="article article-1">
          <div className="image-wrapper">
            <img src={articleImg1} className="image" />
          </div>
          <div className="content-wrapper">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
      {showArticle ? (
        <div className="article article-2">
          <div className="image-wrapper-mobile">
            <img src={articleImg2} className="image" />
          </div>
          <div className="content-wrapper">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="image-wrapper">
            <img src={articleImg2} className="image" />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div id="horizontal">
        <div className="image-wrapper">
          <img src={img1} className="image image-1" />
        </div>
        <div className="image-wrapper">
          <img src={img2} className="image image-2" />
        </div>
        <div className="image-wrapper">
          <img src={img3} className="image image-3" />
        </div>
        <div className="image-wrapper">
          <img src={img4} className="image image-4" />
        </div>
        <div className="image-wrapper">
          <img src={img1} className="image image-1" />
        </div>
      </div>
      <div id="newsletter">
        <div className="title-wrapper">
          <h3>NEWSLETTER</h3>
        </div>
        <div className="forms-wrapper">
          <input placeholder="Email" />
          <button onClick={greeting}>SUBMMIT</button>
        </div>
      </div>
    </div>
  );
}

export default App;
