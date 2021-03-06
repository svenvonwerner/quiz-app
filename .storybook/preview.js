import "../styles/index.css";

import "../styles/colors.css";
import "../styles/base.css";
import "../styles/utilty.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
