module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
  },
  maxWidth: {
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
  },
  aspectRatio: {
    none: 0,
    square: [1, 1],
    "16/9": [16, 9],
    "4/3": [4, 3],
    "21/9": [21, 9]
    },
  inset: {
    '1/2': '50%',
    '1/8': '12.5%'
  },
    customForms: (theme) => ({
      default: {
        input: {
          borderRadius: theme("borderRadius.lg"),
          boxShadow: theme("boxShadow.sm"),
          backgroundColor: theme("colors.gray.100"),
          "&:focus": {
            backgroundColor: theme("colors.white"),
            ringColor: theme("colors.gray.200"),
          },
        },
        textarea: {
          borderRadius: theme("borderRadius.lg"),
          boxShadow: theme("boxShadow.sm"),
          backgroundColor: theme("colors.gray.100"),
          "&:focus": {
            backgroundColor: theme("colors.white"),
            ringColor: theme("colors.gray.200"),
          },
        },
        select: {
          backgroundColor: theme("colors.gray.100"),
          borderRadius: theme("borderRadius.lg"),
          boxShadow: theme("boxShadow.sm"),
        },
        checkbox: {
          width: theme("spacing.6"),
          height: theme("spacing.6"),
        },
        radio: {
          iconColor: theme("colors.green.200"),
        },
      },
    }),
    extend: {
      spacing: {
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
      },
      colors: {
        'velvet-left': '#ffafbd',
        'velvet-right': '#ffc3a0',
        'dusk-left': '#2c3e50',
        'dusk-right': '#fd746c',
      },
      backgroundImage: theme => ({
        'topo-pattern': "url('/public/topo.svg')",
      })
    },
  },
  variants: {
    aspectRatio: ['responsive'],
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ],
};
