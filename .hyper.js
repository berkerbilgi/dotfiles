module.exports = {
  config: {
    updateChannel: 'stable',

    fontSize: 12.3,

    fontFamily: 'Source Code Pro for Powerline',

    fontWeight: 'bold',

    cursorColor: 'rgba(255,229,124,1.0)',

    cursorShape: 'BEAM',

    cursorBlink: true,

    foregroundColor: '#fff',

    backgroundColor: '#000',

    borderColor: '#333',

    lineHeight: 1,

    css: `
      .tab_tab {
        background-color: #1f2329 !important;
      }
      .tab_tab.tab_active {
        background-color: #282c34 !important;
      }
    `,

    termCSS: '',
    
    showHamburgerMenu: '',

    showWindowControls: '',

    padding: '10px 14px',

    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff'
    },

    shell: '/bin/zsh',

    shellArgs: ['--login'],

    env: {},

    bell: 'SOUND',
    
    copyOnSelect: false,

    hyperBorder: {
      borderColors: ['#1D976C', '#93F9B9'],
      blurredColors: ['#177C59', '#84E0A6'],
      borderWidth: '1.0px'
    }
  },

  plugins: [
    "hyperocean",
    "hyperterm-paste",
    "hyperlinks",
    "hyper-statusline",
    "hyper-tab-touchbar",
    "hyperborder",
    "hyper-tab-icons"
  ],

  localPlugins: [],

  keymaps: {
  }
};