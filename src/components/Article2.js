import { useContext } from "react";
import { ThemeContext } from "../utils/contexts/theme-context";

const Article2 = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="article article-2"
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      <div className="image-wrapper-mobile">
        <img src={props.img} className="image" />
      </div>
      <div className="content-wrapper">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="image-wrapper">
        <img src={props.img} className="image" />
      </div>
    </div>
  );
};

export default Article2;
