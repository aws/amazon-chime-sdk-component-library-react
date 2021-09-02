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
  lightest?: string;
  lighter?: string;
  light: string;
  main?: string;
  primary?: string;
  dark: string;
  darker?: string;
  darkest?: string;
}

interface ButtonType {
  bgd: string;
  border: string;
  text: string;
  shadow: string;
}

interface ButtonGroupType {
  shadow: string;
  static: ButtonType;
  hover: ButtonType;
  focus: ButtonType;
  active: ButtonType;
  selected: ButtonType;
  disabled: ButtonType;
}

interface NotificationType {
  text: string;
  closeButton: {
    text: string;
    hover: {
      bgd: string;
      text: string;
    };
    active: {
      bgd: string;
      text: string;
    };
  };
}

interface BreakpointSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Breakpoints extends Array<string> {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name?: string;

    fonts: {
      body: string;
      monospace: string;
    };

    global: {
      bgd: string;
      text: string;
      fontSize: string;
    };

    radii: {
      default: string;
      circle: string;
    };

    breakpoints: Breakpoints;

    mediaQueries: {
      min: BreakpointSizes;
      max: BreakpointSizes;
    };

    fontSizes: {
      baseFontSize: string;
      fontWeight: string;
      h1: HeadingType;
      h2: HeadingType;
      h3: HeadingType;
      h4: HeadingType;
      h5: HeadingType;
      h6: HeadingType;
      text: TextType;
      label: TextType;
      small: TextType;
      footnote: TextType;
    };

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
      };
    };

    buttons: {
      primary: ButtonGroupType;
      secondary: ButtonGroupType;
      icon: ButtonGroupType;
    };

    zIndex: {
      navigation: string | number;
      controlBar: string | number;
      modal: string | number;
      popOver: string | number;
      notificationGroup: string | number;
    };

    inputs: {
      bgd: string;
      border: string;
      borderRadius: string;
      fontColor: string;
      placeholder: string;
      shadow: string;
      clearBg: string;

      focus: {
        bgd: string;
        border: string;
        shadow: string;
      };

      error: {
        border: string;
        fontColor: string;
        shadow: string;
      };

      checked: {
        bgd: string;
        border: string;
        fontColor: string;
        shadow: string;
      };
    };

    modal: {
      bgd: string;
      text: string;
      wrapperBgd: string | number;
      titleSize: string;
      titleWeight: string;
      shadow: string;
      border: string;
    };

    popOver: {
      menuBgd: string;
      menuBorder: string;
      shadow: string;
      itemBgd: string;
      itemText: string;
      titleText: string;
      active: {
        itemBgd: string;
        itemText: string;
      };
      disabled: string;
      separator: string;
    };

    notification: {
      shadow: string;
      error: NotificationType;
      success: NotificationType;
      info: NotificationType;
      warning: NotificationType;
    };

    links: {
      fontColor: string;
      fontColorHover: string;
      fontColorActive: string;
      fontColorVisited: string;
    };

    controlBar: {
      text: string;
      shadow: string;
      bgd: string;
      border: string;
      opacity: string | number;
      selected: {
        text: string;
        bgd: string;
      };
    };

    roster: {
      title: string;
      primaryText: string;
      secondaryText: string;
      headerBorder: string;
      containerBorder: string;
      bgd: string;
      fgd: string;
      shadow: string;
      maxWidth: string;
    };

    videoGrid: {
      bgd: string;
    };

    modalSizes: {
      md: {
        width: string;
        height: string;
      };
      lg: {
        width: string;
        height: string;
      };
      fullscreen: {
        width: string;
        height: string;
      };
    };

    iconButtonSizes: {
      sm: string;
      md: string;
      lg: string;
    };

    navbar: {
      text: string;
      bgd: string;
      headerBorder: string;
      wrapperBgd: string;
    };

    chatBubble: {
      outgoing: {
        bgd: string;
        fontColor: string;
      };
      incoming: {
        bgd: string;
        fontColor: string;
      };
      container: {
        fontColor: string;
        bgd: string;
      };
    };

    messageAttachment: {
      size: {
        fontColor: string;
        bgd: string;
        letterSpacing: string;
        lineHight: string;
        fontSize: string;
      };
      icon: {
        color: string;
        bgd: string;
      };
      name: {
        fontColor: string;
      };
      content: {
        letterSpacing: string;
        bgd: string;
        fontColor: string;
      };
    };

    channelList: {
      bgd: string;
      fontColor: string;
      border: string;
      active: {
        bgd: string;
        fontColor: string;
      };
      hover: {
        bgd: string;
      };
      focus: {
        border: string;
        selectedBorder: string;
      };
      selected: {
        bgd: string;
        fontColor: string;
      };
      iconButton: {
        activeBgd: string;
      };
    };

    chatDateHeader: {
      bgd: string;
      fontColor: string;
    };
  }
}
