import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

declare module 'styled-components/native' {
  export interface Elevation {
    level0: string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  }

  export interface Colors {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    shadow: string;
    scrim: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    elevation: Elevation;
    surfaceDisabled: string;
    onSurfaceDisabled: string;
    backdrop: string;
  }

  export interface DefaultTheme {
    colors: Colors;
  }
}

export const theme = {
  ...DefaultTheme,
};
