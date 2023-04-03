import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
// import presetExt from '@twind/preset-ext'
// import presetTypography from '@twind/preset-typography'
import presetTailwind from '@twind/preset-tailwind'
import hash from '@emotion/hash'

export default defineConfig({
  ignorelist: [
    'ag-',
    /^Mui.*$/,
    /css-.*$/,
    /PrivateSwitch.*$/,
    /ReactModal.*$/,
    /lt-toolbar.*$/,
    /lt-.*$/
  ],
  presets: [
    presetAutoprefix(),
    // presetExt(),
    // presetTypography(/* options */),
    presetTailwind(/* options */)
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      gugi: ['Gugi', 'cursive']
    }
  },
  hash: (string) => 'manelrv-' + hash(string) + '-prtfl'
})
