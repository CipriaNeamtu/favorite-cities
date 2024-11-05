import { createSystem, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  cssVarsRoot: ":where(:root, :host)",

	globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },

})

export default createSystem(config)