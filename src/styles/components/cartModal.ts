import { keyframes, styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

const slideIn = keyframes({
  '0%': { transform: 'translateX(480px)' },
  '100%': { transform: 'translateX(0px)' },
})

const slideOut = keyframes({
  '0%': { transform: 'translateX(0px)' },
  '100%': { transform: 'translateX(480px)' },
})

export const Overlay = styled(Dialog.Overlay, {
  background: 'blue',
  position: 'absolute',
  right: 0,
  top: 0,
  height: '100vh',
  width: 480,
  transform: 'translateX(480px)',
  zIndex: 2,

  animationFillMode: 'forwards',

  '&[data-state="open"]': {
    animation: `${slideIn} 0.2s ease-in-out`,
    animationFillMode: 'forwards',
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 0.2s ease-in-out`,
    animationFillMode: 'forwards',
  },
})

export const Content = styled(Dialog.Content, {
  '&[data-state="closed"]': {
    animation: `${slideOut} 0.2s ease-in-out`,
    animationDelay: '0.2s', // to ensure that my content wont desapear before Overlay slideOut
    animationFillMode: 'forwards',
  },
})
