// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import defaultTheme from './default';
import { hexTorgba } from '../utils/style';

const colors = {
  primary: {
    lightest: '#88b2ff',
    lighter: '#5d96ff',
    light: '#327aff',
    main: '#075fff',
    dark: '#004ddb',
    darker: '#0042bb',
    darkest: '#002f85'
  },

  secondary: {
    light: '#ff8e74',
    main: '#ff7654',
    dark: '#e86c4d'
  },

  error: {
    lightest: '#FCF7F6',
    lighter: '#F5DDD5',
    light: '#FF927C',
    primary: '#C52000',
    dark: '#9E3319',
    darker: '#89301A',
    darkest: '#791800'
  },

  success: {
    lightest: '#EBF1EA',
    lighter: '#CEE0C8',
    light: '#50CD49',
    primary: '#067000',
    dark: '#305D1D',
    darker: '#2C511D',
    darkest: '#184206'
  },

  info: {
    lightest: '#DADFE7',
    lighter: '#C4CCD9',
    light: '#418AFD',
    primary: '#2555A0',
    dark: '#264A82',
    darker: '#243F6B',
    darkest: '#123366'
  },

  warning: {
    lightest: '#FAF8EA',
    lighter: '#F7E79E',
    light: '#F9DC60',
    primary: '#F9CC09',
    dark: '#665A2A',
    darker: '#584E26',
    darkest: '#534201'
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
  bgd: colors.greys.white,
  text: colors.greys.grey80,
  fontSize: defaultTheme.fontSizes.baseFontSize
};

const shadows = {
  none: 'none',
  small: `0 0.09375rem 0.0625rem 0 ${hexTorgba(colors.greys.grey100, 0.15)}`,
  medium: `0 0.5rem 0.85rem 0 ${hexTorgba(colors.greys.black, 0.15)}`,
  large: `0 0.75rem 1.875rem 0 ${hexTorgba(colors.greys.black, 0.15)}`
};

const buttons = {
  primary: {
    shadow: shadows.none,
    static: {
      bgd: colors.primary.light,
      border: `0.03125rem solid ${colors.primary.darker}`,
      text: colors.greys.white,
      shadow: 'none',
    },
    hover: {
      bgd: colors.primary.dark,
      border: `0.03125rem solid ${colors.primary.darkest}`,
      text: colors.greys.white,
      shadow: 'none',
    },
    focus: {
      bgd: colors.primary.dark,
      border: `0.03125rem solid ${colors.primary.darker}`,
      text: colors.greys.white,
      shadow: `0 0 0 0.25rem ${colors.primary.lightest}`  
    },
    active: {
      bgd: colors.primary.darker,
      border: `0.03125rem solid ${colors.greys.black}`,
      text: colors.greys.white,
      shadow: `0 0 0 0.25rem ${colors.primary.lightest}`  
    },
    selected: {
      bgd: colors.primary.light,
      border: `0.03125rem solid ${colors.primary.dark}`,
      text: colors.greys.white,
      shadow: `none`,
    },
    disabled: {
      bgd: colors.greys.white,
      border: `0.03125rem solid ${colors.greys.grey10}`,
      text: colors.greys.grey40,
      shadow: `none`,
    }
  },

  secondary: {
    shadow: shadows.none,
    static: {
      bgd: colors.greys.white,
      border: `0.03125rem solid ${colors.greys.grey30}`,
      text: colors.greys.grey80,
      shadow: 'none',
    },
    hover: {
      bgd: colors.greys.grey10,
      border: `0.03125rem solid ${colors.greys.grey30}`,
      text: colors.greys.grey80,
      shadow: 'none',
    },
    focus: {
      bgd: colors.greys.grey10,
      border: `0.03125rem solid ${colors.primary.dark}`,
      text: colors.greys.grey80,
      shadow: `0 0 0 0.25rem ${colors.primary.light}` 
    },
    active: {
      bgd: colors.greys.grey20,
      border: `0.03125rem solid ${colors.greys.grey40}`,
      text: colors.greys.grey80,
      shadow: `0 0 0 0.25rem ${colors.primary.dark}` 
    },
    selected: {
      bgd: colors.greys.grey10,
      border: `0.03125rem solid ${colors.greys.grey30}`,
      text: colors.greys.grey80,
      shadow: `0 0 0 0.25rem ${colors.primary.dark}`,
    },
    disabled: {
      bgd: colors.greys.white,
      border: `0.03125rem solid ${colors.greys.grey10}`,
      text: colors.greys.grey40,
      shadow: 'none'
    }
  },

  icon: {
    shadow: shadows.none,
    static: {
      bgd: 'transparent',
      border: `0.03125rem  solid transparent`,
      text: colors.greys.grey80,
      shadow: 'none',
    },
    hover: {
      bgd: colors.primary.dark,
      border: `0.03125rem  solid transparent`,
      text: colors.greys.white,
      shadow: 'none',
    },
    focus: {
      bgd: 'transparent',
      border: `0.03125rem  solid ${colors.primary.darker}`,
      text: colors.greys.grey80,
      shadow: `0 0 0 0.25rem ${colors.primary.lightest}` 
    },
    active: {
      bgd: colors.primary.darker,
      border: `0.03125rem  solid ${colors.primary.darker}`,
      text: colors.greys.white,
      shadow: `0 0 0 0.25rem ${colors.primary.lightest}` 
    },
    selected: {
      bgd: colors.primary.light,
      border: `0.03125rem  solid ${colors.primary.darker}`,
      text: colors.greys.white,
      shadow: 'none',
    },
    disabled: {
      bgd: 'transparent',
      border: 'none',
      text: colors.greys.grey40,
      shadow: 'none',
    }
  }
};

const inputs = {
  bgd: colors.greys.white,
  border: `0.03125rem solid ${colors.greys.grey30}`,
  borderRadius: defaultTheme.radii.default,
  fontColor: colors.greys.grey80,
  placeholder: colors.greys.grey40,
  shadow: `0 0.0625rem 0.0625rem 0 ${hexTorgba(colors.greys.black, 0.1)}`,
  clearBg: colors.greys.grey50,

  focus: {
    bgd: colors.greys.white,
    border: `solid 0.03125rem ${colors.primary.lighter}`,
    shadow: `0 0 0 0.125rem ${colors.primary.lightest}`
  },

  error: {
    border: `0.03125rem solid ${colors.error.dark}`,
    fontColor: colors.error.primary,
    shadow: `0 0 0 0.125rem ${colors.error.light}`
  },

  checked: {
    bgd: colors.primary.main,
    border: `solid 0.03125rem ${colors.primary.main}`,
    fontColor: colors.greys.white,
    shadow: `0 0.03125rem 0.03125rem 0 ${hexTorgba(colors.primary.dark, 0.7)}`
  }
};

const modal = {
  bgd: colors.greys.white,
  text: colors.greys.grey80,
  wrapperBgd: hexTorgba(colors.greys.grey50, 0.9),
  titleSize: defaultTheme.fontSizes.h5.fontSize,
  titleWeight: 'normal',
  shadow: shadows.large,
  border: colors.greys.grey30
};

const popOver = {
  menuBgd: `${hexTorgba(colors.greys.grey10, 0.85)}`,
  menuBorder: `0.5px solid ${colors.greys.grey20}`,
  shadow: shadows.large,
  itemBgd: 'transparent',
  itemText: colors.greys.grey70,
  titleText: colors.greys.grey60,
  active: {
    itemBgd: colors.primary.dark,
    itemText: colors.greys.white,
  },
  disabled: colors.greys.grey40,
  separator: `${hexTorgba(colors.greys.grey40, 0.3)}`,
};

const notification = {
  shadow: shadows.large,
  error: {
    text: colors.error.lightest,
    closeButton: {
      text: colors.error.lighter,
      hover: {
        bgd: colors.error.lighter,
        text: colors.error.dark
      },
      active: {
        bgd: colors.error.lightest,
        text: colors.error.darker
      }
    }
  },

  success: {
    text: colors.success.lightest,
    closeButton: {
      text: colors.success.lighter,
      hover: {
        bgd: colors.success.lighter,
        text: colors.success.dark
      },
      active: {
        bgd: colors.success.lightest,
        text: colors.success.darker
      }
    }
  },

  info: {
    text: colors.info.lightest,
    closeButton: {
      text: colors.info.lighter,
      hover: {
        bgd: colors.info.lighter,
        text: colors.info.dark
      },
      active: {
        bgd: colors.info.lightest,
        text: colors.info.darker
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
  text: colors.greys.grey70,
  shadow: shadows.large,
  bgd: colors.greys.white,
  border: `0.03125rem solid ${colors.greys.grey20}`,
  opacity: 1,
  selected: {
    text: buttons.primary.selected.text,
    bgd: buttons.primary.selected.bgd,
  },
};

const roster = {
  title: colors.greys.grey100,
  primaryText: colors.greys.grey80,
  secondaryText: colors.greys.grey50,
  headerBorder: colors.greys.grey40,
  containerBorder: colors.greys.grey30,
  bgd: colors.greys.grey10,
  fgd: colors.greys.white,
  shadow: shadows.large,
  maxWidth: '18.5rem'
};

const navbar = {
  text: colors.greys.grey80,
  bgd: colors.greys.grey10,
  headerBorder: colors.greys.grey40,
  wrapperBgd: hexTorgba(colors.greys.grey50, 0.9)
};

const videoGrid = {
  bgd: colors.greys.white
};

const chatBubble = {
  incoming: {
    bgd: colors.greys.white,
    fontColor: colors.greys.grey60,
    linkColor: colors.primary.main,
    linkColorHover: colors.primary.dark,
    linkColorActive: colors.primary.darker,
    linkColorVisited: colors.primary.darkest,
  },
  outgoing: {
    bgd: colors.primary.main,
    fontColor: colors.greys.grey10,
    linkColor: colors.greys.white,
    linkColorHover: colors.greys.grey10,
    linkColorActive: colors.greys.grey20,
    linkColorVisited: colors.greys.grey30,
  },
  container: {
    fontColor: colors.greys.grey70,
    bgd: colors.greys.grey10,
  }
}

const messageAttachment = {
  size: {
    fontColor: colors.greys.grey40,
    bgd: colors.greys.white,
    letterSpacing: '-0.07px',
    lineHight: '16px',
    fontSize: '10.4px'
  },
  icon: {
    bgd: colors.greys.grey10,
    color: colors.greys.grey80
  },
  name: {
    fontColor: colors.greys.grey80
  },
  content: {
    letterSpacing: '-0.09px',
    bgd: colors.greys.white,
    fontColor: colors.greys.grey80
  }
}

const channelList = {
  bgd: colors.greys.white,
  fontColor: colors.greys.grey70,
  border: '1px solid transparent',
  active: {
    bgd: colors.primary.dark,
    fontColor: colors.greys.white,
  },
  hover: {
    bgd: colors.greys.grey10,
  },
  focus: {
    border: `1px solid ${colors.primary.dark}`,
    selectedBorder: `1px solid ${colors.greys.grey10}`,
  },
  selected: {
    bgd: colors.primary.light,
    fontColor: colors.greys.white,
  },
  iconButton: {
    activeBgd: colors.greys.white,
  }
}

const chatDateHeader = {
  bgd: colors.greys.grey60,
  fontColor: colors.greys.white
}

export const lightTheme = {
  name: 'Light Theme',
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

export default lightTheme;
