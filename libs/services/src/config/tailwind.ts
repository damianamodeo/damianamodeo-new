import animate from 'tailwindcss-animate';

export const tailwindGlobal: any = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jw: {
          purple: '#5b3c88',
          purpleLight: '#c1a7e2',
          blue: '#4a6da7',
          blueLight: '#9fb9e3',
          orange: '#c48430',
          orangeLight: '#ecb368',
          green: '#28b04b',
          yellow: '#e48515',
          grey: '#626262',
          greyLight: '#a7a7a7',
          peach: '#f17e5f',
          turquoise: '#59b3be',
          mauve: '#9c638e',
          maroon: '#942926',
        },
        secondary: {
          light: '#799fcc',
          DEFAULT: '#4a6da7',
          100: '#dbe2ed',
          200: '#b7c5dc',
          300: '#92a7ca',
          400: '#6e8ab9',
          500: '#4a6da7',
          600: '#3b5786',
          700: '#2c4164',
          800: '#1e2c43',
          900: '#0f1621',
        },
        primary: {
          light: '#d27674',
          DEFAULT: '#942926',
          200: '#ead4d4',
          300: '#d4a9a8',
          400: '#bf7f7d',
          500: '#a95451',
          600: '#942926',
          700: '#76211e',
          800: '#591917',
          900: '#3b100f',
          1000: '#1e0808',
        },
        grey: {
          25: '#f2f2f2',
          50: '#ececec',
          75: '#e6e6e6',
          100: '#e0e0e0',
          125: '#dadada',
          150: '#d4d4d4',
          175: '#cecece',
          200: '#c8c8c8',
          225: '#c2c2c2',
          250: '#bcbcbc',
          275: '#b6b6b6',
          300: '#b0b0b0',
          325: '#aaaaaa',
          350: '#a4a4a4',
          375: '#9e9e9e',
          400: '#989898',
          425: '#929292',
          450: '#8c8c8c',
          475: '#868686',
          500: '#808080',
          525: '#7a7a7a',
          550: '#747474',
          575: '#6e6e6e',
          600: '#686868',
          625: '#626262',
          650: '#5c5c5c',
          675: '#565656',
          700: '#505050',
          725: '#4a4a4a',
          750: '#444444',
          775: '#3e3e3e',
          800: '#383838',
          825: '#323232',
          850: '#2c2c2c',
          875: '#262626',
          900: '#202020',
          925: '#1a1a1a',
          950: '#141414',
          975: '#0e0e0e',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))',
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))',
        // },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      // fontFamily: {
      //   sans: ['var(--font-sans)', ...fontFamily.sans],
      // },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  plugins: [animate],
};

export default tailwindGlobal;
