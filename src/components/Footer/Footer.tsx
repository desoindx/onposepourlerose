import React from "react";
import styles from "./Footer.module.css";
import { useTranslations } from "next-intl";
import Link from "../Link/Link";

const Footer = () => {
  const t = useTranslations("footer");
  const tGlobal = useTranslations("global");
  return (
    <div className={styles.footer}>
      <div className="flex-container">
        <div>
          {t("trademark")} - {tGlobal("name")}
        </div>
        <div>
          <div className={styles.logos}>
            <Link
              href="mailto:web@onposepourlerose.fr"
              target="_blank"
              rel="noopener noreferer"
            >
              Nous contacter
            </Link>
            <Link
              href="https://www.facebook.com/onPosepourLeRose/"
              target="_blank"
              rel="noopener noreferer"
            >
              <svg
                width="1.5rem"
                height="1.5rem"
                viewBox="-5 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>facebook [#176]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-385.000000, -7399.000000)"
                    fill="currentcolor"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                        id="facebook-[#176]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/onposepourlerose/"
              target="_blank"
              rel="noopener noreferer"
            >
              <svg
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                    fill="currentcolor"
                  ></path>
                </g>
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC6L25DcU1AbDMYQ5TDmgF9g/"
              target="_blank"
              rel="noopener noreferer"
            >
              <svg
                fill="currentcolor"
                width="1.5rem"
                height="1.5rem"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="7935ec95c421cee6d86eb22ecd1368a9">
                    <path d="M34.354,0.5h45.959l29.604,91.096h2.863L141.013,0.5h46.353l-53.107,133.338v94.589H88.641V138.08 L34.354,0.5z M192.193,98.657c0-13.374,5.495-24.003,16.493-31.938c10.984-7.934,25.749-11.901,44.3-11.901 c16.893,0,30.728,4.192,41.506,12.55c10.805,8.358,16.193,19.112,16.193,32.287v89.2c0,14.771-5.301,26.373-15.868,34.782 c-10.579,8.408-25.151,12.625-43.684,12.625c-17.859,0-32.143-4.342-42.866-13.024c-10.709-8.683-16.074-20.36-16.074-35.057 V98.657z M234.205,191.424c0,4.766,1.44,8.409,4.354,11.029c2.907,2.595,7.055,3.867,12.451,3.867c5.532,0,9.93-1.297,13.18-3.942 c3.256-2.669,4.891-6.313,4.891-10.954V97.359c0-3.768-1.672-6.812-4.99-9.132c-3.318-2.321-7.679-3.494-13.081-3.494 c-4.972,0-9.027,1.173-12.133,3.494c-3.119,2.32-4.672,5.364-4.672,9.132V191.424z M459.992,57.588v172.711h-40.883v-19.063 c-7.547,7.037-15.381,12.375-23.541,16.069c-8.146,3.643-16.068,5.489-23.729,5.489c-9.455,0-16.592-2.57-21.383-7.71 c-4.791-5.141-7.186-12.85-7.186-23.13V57.588h40.895v132.39c0,4.117,0.861,7.061,2.57,8.907c1.723,1.822,4.492,2.745,8.322,2.745 c3.018,0,6.824-1.223,11.4-3.643c4.604-2.42,8.82-5.514,12.65-9.282V57.588H459.992z M421.68,363.262 c-2.008-2.221-5.203-3.368-9.594-3.368c-4.59,0-7.883,1.147-9.879,3.368c-1.996,2.245-2.994,5.963-2.994,11.153v10.754h25.473 v-10.754C424.686,369.225,423.688,365.507,421.68,363.262z M300.855,444.228c2.195,0.898,4.516,1.322,6.961,1.322 c3.543,0,6.113-0.849,7.785-2.595c1.67-1.722,2.494-4.591,2.494-8.533v-62.178c0-4.191-1.023-7.36-3.068-9.531 c-2.059-2.171-5.064-3.244-8.957-3.244c-2.059,0-4.092,0.399-6.102,1.198c-2.008,0.823-3.991,2.096-5.95,3.792v75.402 C296.364,441.907,298.646,443.354,300.855,444.228z M490.496,312.587c0-29.941-30.754-54.219-68.654-54.219 c-54.068-1.822-109.396-2.62-165.842-2.521c-56.427-0.1-111.756,0.698-165.843,2.521c-37.881,0-68.633,24.277-68.633,54.219 c-2.277,23.678-3.263,47.381-3.175,71.085c-0.087,23.703,0.898,47.406,3.175,71.11c0,29.916,30.752,54.192,68.633,54.192 c54.087,1.797,109.416,2.596,165.843,2.521c56.446,0.075,111.774-0.724,165.842-2.521c37.9,0,68.654-24.276,68.654-54.192 c2.27-23.704,3.254-47.407,3.154-71.11C493.75,359.968,492.766,336.265,490.496,312.587z M121.251,463.465v1.797H88.778v-1.797 V321.644H55.182v-1.771v-22.605v-1.771h99.672v1.771v22.605v1.771h-33.603V463.465z M236.768,341.33v122.135v1.797h-28.831v-1.797 v-11.901c-5.327,5.064-10.848,8.882-16.592,11.527c-5.757,2.619-11.334,3.942-16.748,3.942c-6.662,0-11.684-1.847-15.065-5.515 c-3.387-3.692-5.078-9.231-5.078-16.617v-1.797V341.33v-1.772h28.844v1.772v93.216c0,2.92,0.599,5.065,1.802,6.363 c1.217,1.322,3.175,1.971,5.876,1.971c2.127,0,4.803-0.873,8.047-2.595c3.231-1.747,6.2-3.967,8.914-6.662V341.33v-1.772h28.831 V341.33z M347.775,370.847v66.943v1.797c0,8.808-2.258,15.544-6.773,20.235c-4.518,4.641-11.055,6.986-19.588,6.986 c-5.639,0-10.652-0.898-15.07-2.695c-4.428-1.821-8.532-4.616-12.325-8.384v7.735v1.797h-29.105v-1.797V297.267v-1.771h29.105 v1.771v52.297c3.893-3.793,8.009-6.662,12.376-8.608c4.379-1.971,8.809-2.969,13.273-2.969c9.107,0,16.094,2.645,20.896,7.935 c4.803,5.289,7.211,12.999,7.211,23.13V370.847z M454.365,374.64v29.767v1.797h-55.152v21.581c0,6.513,0.947,11.029,2.844,13.549 c1.908,2.521,5.152,3.793,9.742,3.793c4.779,0,8.135-1.073,10.043-3.219c1.896-2.121,2.844-6.837,2.844-14.123v-6.811v-1.796h29.68 v1.796v7.51v1.796c0,12.7-3.605,22.257-10.84,28.694c-7.225,6.438-18.016,9.631-32.375,9.631c-12.912,0-23.066-3.418-30.49-10.229 c-7.41-6.812-11.127-16.193-11.127-28.096v-1.796V374.64v-1.771c0-10.754,4.078-19.512,12.213-26.299 c8.146-6.762,18.689-10.155,31.588-10.155c13.199,0,23.328,3.144,30.416,9.406c7.061,6.264,10.615,15.296,10.615,27.048V374.64z"></path>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
