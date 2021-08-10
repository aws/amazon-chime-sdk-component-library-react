// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import defaultTheme from './default';
import { hexTorgba } from '../utils/style';

const colors = {
  primary: {
    lightest: '#9DEFFB',
    lighter: '#8AEBFA',
    light: '#62E5F9',
    main: '#4FE2F8',
    dark: '#29DCF8',
    darker: '#22B6CB',
    darkest: '#1FA1B5'
  },

  secondary: {
    light: '#FF8B70',
    main: '#FF9B83',
    dark: '#FFB4A1'
  },

  error: {
    lightest: '#FBC1C0',
    lighter: '#FDA8A6',
    light: '#FD9B99',
    primary: '#FF8B8A',
    dark: '#583A39',
    darker: '#452F2E',
    darkest: '#302020'
  },

  success: {
    lightest: '#F4FBF1',
    lighter: '#D2F1C5',
    light: '#BAF39E',
    primary: '#A3E881',
    dark: '#4F6444',
    darker: '#46573D',
    darkest: '#324129'
  },

  info: {
    lightest: '#F0F5FD',
    lighter: '#D8E6FB',
    light: '#C4DBFF',
    primary: '#BAD4FF',
    dark: '#555B69',
    darker: '#494F59',
    darkest: '#343C48'
  },

  warning: {
    lightest: '#FDFDF7',
    lighter: '#3F4149',
    light: '#FFEB96',
    primary: '#FBDF64',
    dark: '#6D653C',
    darker: '#5E5736',
    darkest: '#47422D'
  },

  greys: {
    black: '#000000',
    grey100: '#1b1c20',
    grey90: '#2e2f34',
    grey80: '#3f4149',
    grey70: '#50545e',
    grey60: '#616672',
    grey50: '#7d818b',
    grey40: '#989da5',
    grey30: '#d4d5d8',
    grey20: '#e4e9f2',
    grey10: '#f0f1f2',
    white: '#ffffff'
  }
};

const global = {
  bgd: colors.greys.grey80,
  text: colors.greys.white,
  fontSize: defaultTheme.fontSizes.baseFontSize
};

const shadows = {
  none: 'none',
  small: '',
  medium: '',
  large: `0 0.75rem 1.875rem 0 ${hexTorgba(colors.greys.black, 0.15)}`
};

const buttons = {
  primary: {
    shadow: shadows.none,
    static: {
      bgd: colors.primary.main,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.grey80,
      shadow: 'none'
    },
    hover: {
      bgd: colors.primary.dark,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.grey80,
      shadow: 'none'
    },
    focus: {
      bgd: colors.primary.dark,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.grey80,
      shadow: `0 0 0 0.25rem ${colors.primary.darkest}`,
    },
    active: {
      bgd: colors.primary.darker,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.grey80,
      shadow: 'none'
    },
    selected: {
      bgd: colors.primary.light,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.grey80,
      shadow: 'none'
    },
    disabled: {
      bgd: colors.greys.grey80,
      border: `0.03125rem solid ${hexTorgba(colors.greys.black, 0.4)}`,
      text: colors.greys.grey40,
      shadow: 'none'
    },
  },

  secondary: {
    shadow: shadows.none,
    static: {
      bgd: colors.greys.grey50,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.white,
      shadow: 'none'
    },
    hover: {
      bgd: colors.greys.grey60,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.white,
      shadow: 'none'
    },
    focus: {
      bgd: colors.greys.grey60,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.white,
      shadow: `0 0 0 0.25rem ${colors.primary.lighter}`,
    },
    active: {
      bgd: colors.greys.grey70,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.white,
      shadow: 'none'
    },
    selected: {
      bgd: colors.greys.grey60,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.white,
      shadow: 'none'
    },
    disabled: {
      bgd: colors.greys.grey80,
      border: `0.03125rem solid ${hexTorgba(colors.greys.black, 0.6)}`,
      text: colors.greys.grey40,
      shadow: 'none'
    },
  },

  icon: {
    shadow: shadows.none,
    static: {
      bgd: 'transparent',
      border: `0.03125rem solid transparent`,
      text: colors.greys.grey20,
      shadow: 'none'
    },
    hover: {
      bgd: colors.primary.dark,
      border: `0.03125rem  solid ${colors.greys.black}`,
      text: colors.greys.grey80,
      shadow: 'none'
    },
    focus: {
      bgd: 'transparent',
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.grey80,
      shadow: `0 0 0 0.25rem ${colors.primary.darker}` 
    },
    active: {
      bgd: colors.primary.darker,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.grey80,
      shadow: 'none'
    },
    selected: {
      bgd: colors.primary.light,
      border: `0 solid ${colors.greys.black}`,
      text: colors.greys.grey80,
      shadow: 'none'
    },
    disabled: {
      bgd: 'transparent',
      border: 'none',
      text: colors.greys.grey40,
      shadow: 'none'
    },
  }
};

const inputs = {
  bgd: colors.greys.grey80,
  border: `0.03125rem solid ${colors.greys.black}`,
  borderRadius: defaultTheme.radii.default,
  fontColor: colors.greys.white,
  placeholder: colors.greys.grey50,
  shadow: `0 0.0625rem 0.0625rem 0 ${hexTorgba(colors.greys.black, 0.1)}`,
  clearBg: colors.greys.white,

  focus: {
    bgd: colors.greys.white,
    border: `solid 0.03125rem ${colors.primary.main}`,
    shadow: `0 0 0 0.125rem ${colors.primary.lighter}`
  },

  error: {
    border: `0.03125rem solid ${colors.error.primary}`,
    fontColor: colors.error.primary,
    shadow: `0 0 0 0.125rem ${colors.error.light}`
  },

  checked: {
    bgd: colors.primary.main,
    border: `solid 0.03125rem ${colors.primary.dark}`,
    fontColor: colors.greys.grey80,
    shadow: `inset 0 0.03125rem 0 0 ${hexTorgba(colors.greys.white, 0.1)}`
  }
};

const modal = {
  bgd: colors.greys.grey80,
  text: colors.greys.white,
  wrapperBgd: hexTorgba(colors.greys.grey60, 0.9),
  titleSize: defaultTheme.fontSizes.h5.fontSize,
  titleWeight: 'normal',
  shadow: `0 1rem 2rem 0 rgba(0, 0, 0, ${hexTorgba(colors.greys.black, 0.15)})`,
  border: colors.greys.black
};

const popOver = {
  menuBgd: `${hexTorgba(colors.greys.grey90, 0.85)}`,
  menuBorder: colors.greys.grey100,
  shadow: shadows.large,
  itemBgd: 'transparent',
  itemText: colors.greys.white,
  titleText: colors.greys.white,
  active: {
    itemBgd: colors.primary.dark,
    itemText: colors.greys.grey80,
  },
  disabled: colors.greys.grey40,
  separator: colors.greys.grey100,
};

const notification = {
  shadow: shadows.large,
  error: {
    text: colors.error.darker,
    closeButton: {
      text: colors.error.dark,
      hover: {
        bgd: colors.error.dark,
        text: colors.greys.white
      },
      active: {
        bgd: colors.error.darker,
        text: colors.greys.white
      }
    }
  },

  success: {
    text: colors.success.darker,
    closeButton: {
      text: colors.success.dark,
      hover: {
        bgd: colors.success.dark,
        text: colors.greys.white
      },
      active: {
        bgd: colors.success.darker,
        text: colors.greys.white
      }
    }
  },

  info: {
    text: colors.info.darker,
    closeButton: {
      text: colors.info.dark,
      hover: {
        bgd: colors.info.dark,
        text: colors.greys.white
      },
      active: {
        bgd: colors.info.darker,
        text: colors.greys.white
      }
    }
  },

  warning: {
    text: colors.warning.darker,
    closeButton: {
      text: colors.warning.dark,
      hover: {
        bgd: colors.warning.dark,
        text: colors.greys.white
      },
      active: {
        bgd: colors.warning.darker,
        text: colors.greys.white
      }
    }
  }
};

const links = {
  fontColor: colors.primary.main,
  fontColorHover: colors.primary.dark,
  fontColorActive: colors.primary.darker,
  fontColorVisited: colors.primary.darkest
};

const controlBar = {
  text: colors.greys.grey20,
  shadow: shadows.large,
  bgd: colors.greys.grey100,
  border: 'none',
  opacity: 1,
  selected: {
    text: buttons.primary.selected.text,
    bgd: buttons.primary.selected.bgd,
  },
};

const roster = {
  title: colors.greys.white,
  primaryText: colors.greys.white,
  secondaryText: colors.greys.grey20,
  headerBorder: colors.greys.black,
  containerBorder: colors.greys.black,
  bgd: colors.greys.grey100,
  fgd: colors.greys.grey60,
  shadow: shadows.large,
  maxWidth: '18.5rem'
};

const navbar = {
  text: colors.greys.white,
  bgd: colors.greys.grey100,
  headerBorder: colors.greys.black,
  wrapperBgd: hexTorgba(colors.greys.grey60, 0.9)
};

const videoGrid = {
  bgd: colors.greys.grey90
};

const chatBubble = {
  incoming: {
    bgd: colors.greys.grey80,
    fontColor: colors.greys.grey30,
    linkColor: colors.primary.main,
    linkColorHover: colors.primary.dark,
    linkColorActive: colors.primary.darker,
    linkColorVisited: colors.primary.darkest,
  },
  outgoing: {
    bgd: colors.primary.dark,
    fontColor: colors.greys.grey70,
    linkColor: colors.greys.grey80,
    linkColorHover: colors.greys.grey70,
    linkColorActive: colors.greys.grey60,
    linkColorVisited: colors.greys.grey50,
  },
  container: {
    fontColor: colors.greys.grey30,
    bgd: colors.greys.black,
  }
}

const messageAttachment = {
  size: {
    fontColor: colors.greys.grey30,
    bgd: colors.greys.grey10,
    letterSpacing: '-0.07px',
    lineHight: '16px',
    fontSize: '10.4px'
  },
  icon: {
    bgd: colors.greys.grey40,
    color: colors.greys.grey10
  },
  name: {
    fontColor: colors.greys.white
  },
  content: {
    letterSpacing: '-0.09px',
    bgd: colors.greys.grey60,
    fontColor: colors.greys.white
  }
}

const channelList = {
  bgd: colors.greys.grey80,
  fontColor: colors.greys.grey10,
  border: '1px solid transparent',
  active: {
    bgd: colors.primary.dark,
    fontColor: colors.greys.grey70,
  },
  hover: {
    bgd: colors.greys.grey70,
  },
  focus: {
    border: `1px solid ${colors.primary.dark}`,
    selectedBorder: `1px solid ${colors.greys.grey70}`,
  },
  selected: {
    bgd: colors.primary.light,
    fontColor: colors.greys.grey70,
  },
  iconButton: {
    activeBgd: colors.greys.grey80,
  }
}

const chatDateHeader = {
  bgd: colors.greys.grey10,
  fontColor: colors.greys.grey80
}

export const darkTheme = {
  name: 'Dark Theme',
  buttons,
  colors,
  global,
  links,
  shadows,
  inputs,
  modal,
  popOver,
  notification,
  controlBar,
  roster,
  navbar,
  videoGrid,
  chatBubble,
  channelList,
  chatDateHeader,
  messageAttachment,
  ...defaultTheme
};

export default darkTheme;
