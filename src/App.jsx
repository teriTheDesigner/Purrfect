import "./App.css";
import { HexColorPicker } from "react-colorful";
import { useState, useEffect } from "react";
import SittingCats from "./components/SittingCats";
import Pawsitive from "./components/Pawsitive";
import Scratch from "./components/Scratch";
import Meow from "./components/Meow";
import Pattern from "./components/Pattern";
import Circles from "./components/Circles";

function App() {
  const [svgColor, setSvgColor] = useState("#0A382B");

  const [negativeColor, setNegativeColor] = useState("#ffffff");

  useEffect(() => {
    // Function to calculate lightness
    function hexToLightness(hex) {
      // Remove the hash if present
      hex = hex.replace(/^#/, "");

      // Convert to RGB
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;

      // Normalize RGB values to the range [0, 1]
      const rFraction = r / 255;
      const gFraction = g / 255;
      const bFraction = b / 255;

      // Find the maximum and minimum values among the RGB components
      const max = Math.max(rFraction, gFraction, bFraction);
      const min = Math.min(rFraction, gFraction, bFraction);

      // Calculate lightness
      const lightness = (max + min) / 2;

      // Convert lightness to percentage
      const lightnessPercentage = Math.round(lightness * 100);

      return lightnessPercentage;
    }

    const lightness = hexToLightness(svgColor);

    // Update negativeColor based on lightness
    setNegativeColor(lightness > 50 ? "#000000" : "#ffffff");
  }, [svgColor]);

  return (
    <div>
      <section id="header" style={{ backgroundColor: negativeColor }}>
        <div style={{ color: svgColor }}>
          <h3>The</h3>
          <h1>PURRFECT</h1>
          <h3>Website</h3>
        </div>
        <HexColorPicker
          style={{ height: "60%", width: "25%" }}
          color={svgColor}
          onChange={setSvgColor}
        />
      </section>
      <SittingCats svgColor={svgColor} negativeColor={negativeColor} />
      <Pawsitive svgColor={svgColor} negativeColor={negativeColor} />
      <Scratch svgColor={svgColor} negativeColor={negativeColor} />
      <Meow svgColor={svgColor} negativeColor={negativeColor} />
      <Pattern svgColor={svgColor} negativeColor={negativeColor} />
      <Circles svgColor={svgColor} negativeColor={negativeColor} />
    </div>
  );
}

export default App;
