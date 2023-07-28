import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  marginTop: '50px',
  justifyContent: 'center',
  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  minWidth: '132px',
  borderRadius: '50%',
  padding: '0.25rem .5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4rem',

  boxShadow: '-10px -5px 15px rgba(0,0,0,0.4)',

  img: {
    objectFit: 'cover',
    minWidth: '132px',
  },

  variants: {
    moreThanOneImage: {
      true: { '& + div': { marginLeft: '-4rem' } },
    },
  },
})

export const Images = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
})
