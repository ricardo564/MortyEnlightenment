/** @type {import('tailwindcss').Config} */
/* eslint @typescript-eslint/no-var-requires: "off" */
module.exports = {
  content: ['./src/**/*.{tsx,js,ts}'],
  plugins: [],
  theme: {
    extend: {
      colors: {},
      animation: {
        fadeOut: 'fadeOut 5s ease-in-out',
        'fade-in-from-left': 'fade-in-from-left 0.2s ease-in-out',
        'fade-in-from-right': 'fade-in-from-right 0.2s ease-in-out',
        pop: 'pop 0.2s ease-in-out',
        'flip-and-bounce': 'flip-and-bounce 2s ease-in-out',
        'enter-from-left': 'enter-from-left 0.4s ease-in-out',
        'leave-to-left': 'leave-to-left 1s ease-in-out'
      },
      keyframes: {
        fadeOut: {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0,
            transform: 'translateY( -100px )'
          }
        },
        'fade-in-from-left': {
          '0%': {
            opacity: 0,
            transform: 'translateX( -100px )'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX( 0 )'
          }
        },
        'fade-in-from-right': {
          '0%': {
            opacity: 0,
            transform: 'translateX( 100px )'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX( 0 )'
          }
        },
        pop: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'flip-and-bounce': {
          '0%': {
            transform: 'rotateY(180deg) translateX(-20px)'
          },
          '50%': {
            transform: 'rotateY(0deg)'
          },
          '80%': {
            transform: 'rotateY(0deg) translateX(0)',
            width: '95%'
          },
          '100%': {
            transform: 'rotateY(0deg)',
            width: '100%'
          }
        },
        'enter-from-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: 1
          }
        },
        'leave-to-left': {
          '0%': {
            transform: 'translateX(0%)',
            opacity: 1
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: 0
          }
        }
      }
    }
  }
}
