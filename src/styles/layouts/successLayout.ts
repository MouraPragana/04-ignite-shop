import { styled } from '..'

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '2rem 0',
  width: '100%',
  height: '120px',
  maxWidth: 1180,
  margin: '0 auto',
  alignItems: 'center',
})

export const IconContainer = styled('button', {
  background: '#202024',
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  padding: 12,
  border: 0,

  position: 'relative',

  '&:hover': {
    cursor: 'pointer',
  },

  div: {
    position: 'absolute',
    top: -12,
    right: -6,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 7,
    paddingLeft: 7,
    background: '$green500',
    display: 'flex',
    borderRadius: '50%',
    border: '3px solid $gray900',

    p: {
      fontSize: 14,
      color: '$gray100',
    },
  },
})
