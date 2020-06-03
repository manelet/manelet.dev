module.exports = {
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)'
      },
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' }
      }
    }
  }
}
