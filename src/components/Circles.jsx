import "./Circles.css";
function Circles({ svgColor, negativeColor }) {
  const lightenColor = (color, percent) => {
    const hexToRgb = (hex) =>
      hex
        .replace(/^#/, "")
        .match(/.{1,2}/g)
        .map((v) => parseInt(v, 16));

    const rgbToHex = (r, g, b) =>
      `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;

    const [r, g, b] = hexToRgb(color);
    const factor = percent / 100;

    const newR = Math.min(255, r + (255 - r) * factor);
    const newG = Math.min(255, g + (255 - g) * factor);
    const newB = Math.min(255, b + (255 - b) * factor);

    return rgbToHex(newR, newG, newB);
  };
  return (
    <section id="circles" style={{ backgroundColor: negativeColor }}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="100" fill={svgColor} />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="100" fill={lightenColor(svgColor, 20)} />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="100" fill={lightenColor(svgColor, 50)} />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="100" fill={lightenColor(svgColor, 80)} />
      </svg>
    </section>
  );
}
export default Circles;
