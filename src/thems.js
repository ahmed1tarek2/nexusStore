import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: {
          value: "'Inter', sans-serif",
        },
        heading: {
          value: "'Inter', sans-serif",
        },
      },
      colors: {
        mainColor: { value: "#061449" },
        hovermainColor: { value: "#08164B" },
        primaryContainer: { value: "#eff4ff" },
        primaryText: { value: "#061449" },
        textColor: { value: "#45464f" },
        secColor: { value: "#fe6a34" },
        hoversecColor: { value: "#ab3500" },
      },
    },
  },
});

export default system;
