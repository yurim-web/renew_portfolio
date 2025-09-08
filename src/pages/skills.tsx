import StrengthContentsBox from "../common/box/StrengthContentsBox";
import StrenthToggleBox from "../common/box/StrenthToggleBox";
import "../styles/skills.css";

const Skills = () => {
  return (
    <article className="strength">
      <h1 className="strength_title">Strength.</h1>
      <StrenthToggleBox />
      <StrengthContentsBox />
    </article>
  );
};

export default Skills;
