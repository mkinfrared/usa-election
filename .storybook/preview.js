import "../src/index.scss";
import viewports from "./viewports";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports }
};
