
declare module 'styled-components' {

  export interface Colors {
    primary: string;
    background: string;
    border: string;
    heading1: string;
    heading2: string;
    badge: string;
    badgeText: string;
  }

  export interface DefaultTheme {
    colors: Colors;
  }
}

export const theme = {
  colors: {
    primary: '#6200ee',
    background: '#ffffff',
    border: '#f2f2f2',
    heading1: '#1b1b1b',
    heading2: '#1b1b1b',
    badge: '#1b1b1b',
    badgeText: '#ffffff',
  }
};
