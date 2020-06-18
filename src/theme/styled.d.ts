import 'styled-components';

interface TextType {
  fontSize: string;
  fontWeight?: string;
  lineHeight: string;
}

interface HeadingType extends TextType {
  mobile: TextType;
}

interface ColorType {
  lightest?: string,
  lighter?: string,
  light: string,
  main?: string,
  primary?: string;
  dark: string,
  darker?: string,
  darkest?: string,
}

interface ButtonType {
  bgd: string;
  border: string;
  text: string;
}

interface ButtonGroupType {
  shadow: string;
  static: ButtonType;
  hover: ButtonType;
  focus: ButtonType;
  active: ButtonType;
  selected: ButtonType;
}

interface NotificationType {
  text: string,
  closeButton: {
    text: string;
    hover: {
      bgd: string;
      text: string;
    },
    active: {
      bgd: string;
      text: string;
    },
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name?: string;
    
    fonts: {
      body: string;
      monospace: string;
    }

    global: {
      bgd: string;
      text: string;
      fontSize: string;
    }

    radii: {
      default: string;
      circle: string;
    }

    breakpoints: {
      mobilePortrait: string;
      mobileLandscape: string;
      tabletPortait: string;
      tabletLandscape: string;
      laptop: string;
    }

    fontSizes: {
      baseFontSize: string;
      fontWeight: string;
      "h1": HeadingType;
      "h2": HeadingType;
      "h3": HeadingType;
      "h4": HeadingType;
      "h5": HeadingType;
      "h6": HeadingType;
      "text": TextType;
      "label": TextType;
      "small": TextType;
      "footnote": TextType;
    }

    colors: {
      primary: ColorType;
      secondary: ColorType;
      error: ColorType;
      success: ColorType;
      info: ColorType;
      warning: ColorType;
      greys: {
        black: string;
        grey100: string;
        grey90: string;
        grey80: string;
        grey70: string;
        grey60: string;
        grey50: string;
        grey40: string;
        grey30: string;
        grey20: string;
        grey10: string;
        white: string;
      }
    }

    buttons: {
      primary: ButtonGroupType;
      secondary: ButtonGroupType;
      icon: ButtonGroupType;
    }

    zIndex: {
      navigation: string | number;
      modal: string | number;
      popOver: string | number;
    }

    inputs: {
      bgd: string;
      border: string;
      borderRadius: string;
      fontColor: string;
      placeholder: string;
      shadow: string;

      focus: {
        bgd: string;
        border: string;
        shadow: string;
      }

      error: {
        border: string;
        fontColor: string;
        shadow: string;
      }

      checked: {
        bgd: string;
        border: string;
        fontColor: string;
        shadow: string;
      }
    }

    modal: {
      bgd: string;
      text: string;
      wrapperBgd: string | number;
      titleSize: string;
      titleWeight: string;
      shadow: string;
      border: string;
    }

    popOver: {
      menuBgd: string;
      menuBorder: string;
      shadow: string;
      itemBgd:string;
      itemText: string;
      titleText: string;
      active: {
        itemBgd: string;
        itemText: string;
      }
      separator: string;
    }

    notification: {
      shadow: string;
      error: NotificationType;
      success: NotificationType;
      info: NotificationType;
      warning: NotificationType;
    }

    links: {
      fontColor: string;
      fontColorHover: string;
      fontColorActive: string;
      fontColorVisited: string;
    }

    controlBar: {
      text: string;
      shadow: string;
      bgd: string;
      border: string;
      opacity: string | number;
    }
  }
}