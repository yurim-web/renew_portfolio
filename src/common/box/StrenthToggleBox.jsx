import StrengthToggle from "../button/StrengthToggle";
import "../../styles/skills.css";

const StrenthToggleBox = () => {
  return (
    <div className="strength_toggle_container">
      <StrengthToggle strength={"HTML"} />
      <StrengthToggle strength={"CSS"} />
      <StrengthToggle strength={"Javascript"} />
      <StrengthToggle strength={"React"} />
      <StrengthToggle strength={"Next.js"} />
      <StrengthToggle strength={"Gsap.js"} />
      <StrengthToggle strength={"API"} />
      <StrengthToggle strength={"Git/Github"} />
      <StrengthToggle strength={"Notion"} />
      <StrengthToggle strength={"Photoshop"} />
      <StrengthToggle strength={"Illustrator"} />
    </div>
  );
};

export default StrenthToggleBox;
