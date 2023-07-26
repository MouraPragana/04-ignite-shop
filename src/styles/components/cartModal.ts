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
  background: '$gray800',
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
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  paddingTop: 72,
  paddingLeft: 48,
  paddingRight: 48,
  paddingBottom: 48,

  '&[data-state="closed"]': {
    animation: `${slideOut} 0.2s ease-in-out`,
    animationDelay: '0.2s', // to ensure that my content wont desapear before Overlay slideOut
    animationFillMode: 'forwards',
  },
})

export const ItemContainer = styled('div', {
  overflowX: 'auto',
  height: 'calc(100% - 300px)',

  '&::-webkit-scrollbar': {
    width: '3px',
    height: '3px',
  },

  '&::-webkit-scrollbar-track': {
    background: 'transparent',
    padding: '2px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray300',
  },
})

export const ContentTitle = styled(Dialog.Title, {
  fontSize: '$lg',
  lineHeight: 1.6,
  fontWeight: 700,
  marginBottom: 31.61,
})

export const Item = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  '& + div': {
    marginTop: 24,
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export const ItemDetails = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  p: {
    color: '$gray300',
    lineHeight: 1.6,
    fontSize: '$md',
    fontWeight: 400,
  },

  span: {
    color: '$gray100',
    lineHeight: 1.6,
    fontSize: '$md',
    fontWeight: 'bold',
  },

  button: {
    color: '$green500',
    background: 'transparent',
    border: 'none',
    textAlign: 'left',
    fontSize: '$sm',
    fontWeight: 'bold',

    transition: 'all 0.2s',

    '&:hover': {
      color: '#E83F5B',
    },

    cursor: 'pointer',
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  marginRight: 24,
})

export const Footer = styled('footer', {
  position: 'fixed',
  bottom: 48,
  width: 'calc(100% - 96px)',

  div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    marginTop: 57,
    background: '$green500',
    width: '100%',
    padding: '20px 32px',
    borderRadius: 8,
    border: 'transparent',
    cursor: 'pointer',
    fontSize: '$md',
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$white',
    transition: 'all 0.2s',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})

export const NormalSpan = styled('span', {
  fontSize: '1rem',
  lineHeight: 1.6,
  color: '$gray100',
  marginBottom: '7px',
})

export const StrongSpan = styled('span', {
  fontSize: '$md',
  lineHeight: 1.6,
  color: '$gray100',
  fontWeight: 'bold',
})

export const ValueSpan = styled('span', {
  fontSize: '$xl',
  lineHeight: 1.4,
  color: '$gray100',
  fontWeight: 'bold',
})

export const CloseButton = styled(Dialog.Close, {
  background: 'transparent',
  border: 'none',
  position: 'fixed',
  top: 24,
  right: 24,
  color: '#8D8D99',
  cursor: 'pointer',
  transition: 'all .2s',

  '&:hover': {
    scale: '1.1',
    color: '#E83F5B',
  },
})
