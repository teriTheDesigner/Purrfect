import "./Footer.css";
function Footer({ svgColor, negativeColor }) {
  return (
    <section id="footer" style={{ backgroundColor: negativeColor }}>
      <p style={{ color: negativeColor }}>Hello from the footer</p>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 732.41 837.13"
      >
        <g id="Layer_3" data-name="Layer 3">
          <path
            strokeWidth=" 0px"
            fill={svgColor}
            d="m.56,447.05c15.8,5.34,32.89,11.72,48.45,17.89,3.99,1.59,8.1,2.93,12.15,4.38,8.19,2.9,15.52,7.45,22.46,12.66,3.48,2.67,6.86,5.55,9.94,9.06l-.56,1.18c-9.05-.38-17.42-2.73-25.75-5.71-8.17-2.83-15.2-8.01-22.69-12.18-5.63-3.1-16.88-9.5-22.42-12.76-7.41-4.39-14.83-8.75-22.14-13.35l.56-1.18h0Z"
          />
          <path
            strokeWidth=" 0px"
            fill={svgColor}
            d="m.45,498.13c16.65-1.01,34.88-1.54,51.61-1.69,4.29-.03,8.61-.34,12.91-.52,8.67-.4,17.18,1.05,25.58,3.27,4.23,1.17,8.45,2.55,12.62,4.65l-.07,1.3c-4.38,1.62-8.73,2.53-13.06,3.22-8.59,1.27-17.21,1.77-25.78.41-7.38-1.3-18.03-2.64-25.56-3.54-12.4-1.72-26.04-3.65-38.32-5.81,0,0,.07-1.3.07-1.3H.45Z"
          />
          <path
            strokeWidth=" 0px"
            fill={svgColor}
            d="m11.29,532.54c15.82-5.28,33.3-10.51,49.42-14.99,4.14-1.14,8.22-2.55,12.33-3.84,8.27-2.64,16.87-3.43,25.55-3.47,4.39.03,8.82.28,13.4,1.23l.27,1.27c-7.45,5.16-15.54,8.35-23.98,11-8.22,2.68-16.95,2.79-25.44,4-6.35.93-19.2,2.62-25.57,3.36-8.55.98-17.11,1.97-25.71,2.73,0,0-.27-1.27-.27-1.27h0Z"
          />
          <path
            strokeWidth=" 0px"
            fill={svgColor}
            d="m732.41,443.22c-14.15,8.83-29.92,18-44.55,26.11-3.76,2.07-7.4,4.4-11.1,6.62-7.43,4.49-15.6,7.27-24.04,9.34-4.27.99-8.64,1.79-13.31,1.94l-.56-1.18c6.04-6.75,13.16-11.74,20.75-16.29,7.37-4.53,15.83-6.67,23.81-9.82,5.96-2.39,18.05-7.02,24.08-9.24,8.09-2.95,16.17-5.91,24.36-8.65l.56,1.18h0Z"
          />
          <path
            strokeWidth=" 0px"
            fill={svgColor}
            d="m732.03,494.43c-16.43,2.84-34.5,5.39-51.11,7.4-4.27.5-8.52,1.29-12.77,1.95-8.58,1.36-17.19.86-25.78-.41-4.33-.69-8.68-1.6-13.06-3.22l-.07-1.3c4.18-2.1,8.39-3.48,12.62-4.65,8.4-2.21,16.91-3.67,25.58-3.27,7.48.48,18.21.63,25.8.68,12.51.33,26.28.74,38.73,1.53,0,0,.07,1.3.07,1.3h0Z"
          />
          <path
            strokeWidth=" 0px"
            fill={svgColor}
            d="m720.85,528.81c-16.61-1.51-34.72-3.72-51.28-6.09-4.25-.62-8.56-.96-12.84-1.43-8.64-.9-16.83-3.62-24.8-7.07-4.01-1.79-7.97-3.79-11.78-6.5,0,0,.27-1.27.27-1.27,4.58-.95,9.01-1.19,13.4-1.23,8.69.04,17.28.83,25.55,3.47,7.1,2.39,17.43,5.32,24.74,7.34,12,3.56,25.19,7.52,37.01,11.5,0,0-.27,1.27-.27,1.27h0Z"
          />
        </g>
        <path
          strokeWidth=" 0px"
          fill={svgColor}
          d="m47.78,834.13c20.29-77.56,22.33-138.42,20-181-2-36.56-7.46-63.56-3-113,3.38-37.53,8.91-48.49,9-87,.07-33.45-4.75-61.08-9-86-6.18-36.29-10.41-45.19-16-73-9.33-46.44-9.65-81.79-10-122-.76-86.43-1.19-135.49,19-143,24.27-9.03,74.24,56.84,84,71,1.66,2.41,7.72,11.41,17,23,10.27,12.82,18.58,21.43,21,24,34.29,36.43,37.71,83.78,70,94,5.02,1.59,3.66.04,50-8,37.59-6.52,56.8-9.79,77-10,15.01-.16,32.2-.33,54,5,28.48,6.97,31.69,15.23,44,14,19.45-1.94,29.47-24.37,59-84,11-22.21,35.28-70.85,70-121C625.36,5.95,633.88-1.11,641.78.13c12.77,2.01,20.23,25.14,31,87,12.93,74.25,19.39,111.38,20,158,.33,25.39,1.21,92.11-15,172-4.77,23.49-9.73,41.81-11,72-1.98,46.87,7.64,58.1,10,99,3.59,62.25-16.45,75.06-22,152-2.91,40.3-.09,73.93,3,97"
        />
        <path
          strokeWidth=" 0px"
          fill={negativeColor}
          d="m219.78,488.13c15,2.04,38.67,5.27,61-9,20.27-12.95,27.53-32.71,29-37,9.33-27.15-1.24-50.63-5-59-3.43-7.61-14.8-32.92-42-44-38.82-15.81-76.52,10.97-85,17-11.71,8.32-30.44,21.63-35,45-6.24,31.98,18.06,62.5,41,76,13.48,7.93,26.46,9.7,36,11Z"
        />
        <path
          strokeWidth=" 0px"
          fill={negativeColor}
          d="m485.84,488.89c-14.91-2.66-38.42-6.84-55.3-27.27-15.33-18.54-16.17-39.58-16.26-44.11-.56-28.7,16.7-47.82,22.85-54.63,5.59-6.2,24.18-26.8,53.47-29,41.8-3.14,69.47,33.9,75.69,42.24,8.59,11.51,22.35,29.92,19.52,53.56-3.87,32.35-36.36,53.95-62.33,59.77-15.26,3.42-28.16,1.12-37.64-.57Z"
        />
        <ellipse
          strokeWidth=" 0px"
          fill={svgColor}
          cx="259.28"
          cy="420.63"
          rx="19"
          ry="35"
        />
        <ellipse
          strokeWidth=" 0px"
          fill={svgColor}
          cx="474.28"
          cy="412.63"
          rx="19"
          ry="35"
        />
        <path
          strokeWidth=" 0px"
          fill={negativeColor}
          d="m353.78,498.13c-.28,9.88,6.36,16.33,11,16,4.42-.31,9.72-6.95,9-16,5.78.06,10.21-1.06,13-2,3.93-1.32,7.02-2.36,8-5,.92-2.49-.55-4.98-3-9-2.57-4.22-7.42-12.17-14-12-1.78.05-3.25.68-4,1-4.84,2.08-5.13,5.8-8,6-1.97.14-2.13-1.6-7-4-2.44-1.2-3.92-1.93-6-2-3.53-.12-6.23,1.77-8,3-.67.47-2.34,1.7-5,5-4.48,5.57-6.72,8.36-6,11,.81,2.95,4.76,4.26,10,6,4.02,1.33,7.53,1.81,10,2Z"
        />
      </svg>
    </section>
  );
}

export default Footer;