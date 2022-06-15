import 'styled-components'

declare module 'styled-components'{
  export interface DefaultTheme{
    title: string;
    colors:{
      backgroundColor: string;
      title: string;

      backgroundColorButton: string,
      titleButton: string,
      boxShadow: string
    },
  }
}