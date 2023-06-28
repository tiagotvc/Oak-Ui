import { DefaultTheme, css } from "styled-components";
import { VariantComponents } from "../../shared/types/types";

export const globalBackgroundTypeStyle = {
  primary: (theme: DefaultTheme, component: VariantComponents) => css`
    background: ${theme[component].colors.primary};
  `,
  secondary: (theme: DefaultTheme, component: VariantComponents) => css`
    background: ${theme[component].colors.secondary};
  `,
  dark: (theme: DefaultTheme, component: VariantComponents) => css`
    background: ${theme[component].colors.dark};
  `,
  sucess: (theme: DefaultTheme, component: VariantComponents) => css`
    background: ${theme[component].colors.sucess};
  `,
  danger: (theme: DefaultTheme, component: VariantComponents) => css`
    background: ${theme[component].colors.danger};
  `,
};

export const globalTypographTypeStyles = {
  title: (theme: DefaultTheme) => css`
    font-size: ${theme.typograph.size.title};
  `,
  subtitle: (theme: DefaultTheme) => css`
    font-size: ${theme.typograph.size.subtitle};
  `,
  body1: (theme: DefaultTheme) => css`
    font-size: ${theme.typograph.size.body1};
  `,
  body2: (theme: DefaultTheme) => css`
    font-size: ${theme.typograph.size.body2};
  `,
  body3: (theme: DefaultTheme) => css`
    font-size: ${theme.typograph.size.body3};
  `,
};

export const animations = {
  none: () => css`
    animation: none;
  `,
  gradient: ({ theme }: DefaultTheme) => css`
    color: rgba(255, 255, 255, 0.9);
    background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
    background-size: 600%;
    animation: ${theme.btn.animations.gradient} 16s linear infinite;
  `,
};
