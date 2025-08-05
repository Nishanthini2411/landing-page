import { useContext } from "react";
import StageTwo from "./stage2";
import ThemeContext from "./UseContext";

function StageOne() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Stage One - {theme}</h1>
      <StageTwo />
    </div>
  );
}

export default StageOne;