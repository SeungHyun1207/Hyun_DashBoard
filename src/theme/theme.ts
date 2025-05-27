import { createTheme, PaletteOptions } from "@mui/material";

// 추가 색상은 여기서
declare module '@mui/material/styles' {
    interface Palette {
        black : {
            main : '#000000',
        }
    }
    interface PaletteOptions {
        black? : {
            main : '#000000',
        }
    }
}

const palette : PaletteOptions = {
    primary: {
        light: '#FFD9D9',
        main: '#DF0A24',
        dark: '#A50000',
      },
      error: {
        light: '#F6EFE9',
        main: '#FF4545',
        dark: '#F44007',
      },
      info: {
        light: '#E9F4FF',
        main: '#176EF0',
        dark: '#0E489F',
      },
      success: {
        light: '#DCF3F2',
        main: '#1EBFC7',
        dark: '#116E72',
      },
      warning: {
        light: '#FFF5E1',
        main: '#FBC436',
        dark: '#C58E00',
      },
      secondary: {
        main: '#E3BA8A',
        dark: '',
      },
      background: {
        default: '#FFFFFF',
      },
    
}

export const defaultTheme = createTheme({palette})