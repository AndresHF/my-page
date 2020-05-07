import { useWindowSize } from "react-use";

export type Breakpoints = {
    xs: boolean;
    xsOnly: boolean;
    sm: boolean;
    smOnly: boolean;
    smAndDown: boolean;
    smAndUp: boolean;
    md: boolean;
    mdOnly: boolean;
    mdAndDown: boolean;
    mdAndUp: boolean;
    lg: boolean;
    lgOnly: boolean;
    lgAndDown: boolean;
    lgAndUp: boolean;
    xl: boolean;
    xlOnly: boolean;
    xlAndDown: boolean;
    xlAndUp: boolean;
    xxl: boolean;
  };
  
  export const useResponsive = (): Breakpoints => {
    const { width } = useWindowSize()
  
    return {
      xs: width < 600, 
      xsOnly: width < 600,
      sm: width >= 600,
      smOnly: width >= 600 && width < 768,
      smAndDown: width < 768,
      smAndUp: width >= 600,
      md: width >= 768,
      mdOnly: width >= 768 && width < 992,
      mdAndDown: width < 992,
      mdAndUp: width >= 768,
      lg: width >= 992,
      lgOnly: width >= 992 && width < 1200,
      lgAndDown: width < 1200,
      lgAndUp: width >= 992,
      xl: width >= 1200,
      xlOnly: width >= 1200 && width < 1600,
      xlAndDown: width < 1600,
      xlAndUp: width >= 1200,
      xxl: width >= 1600
    }
  }