import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
  fonts: {
    body: "'Rubik', sans-serif",
    heading: "'Rubik', sans-serif",
  },
  styles: {
    global: {
      'h1': {
        color: 'white',
        fontSize: '26px',
        fontWeight: '500',
        marginBottom: '14px',
      },
      'h2' : {
        color: 'hsl(0, 0%, 59%)',
        fontSize: '10px',
        fontWeight: '700',
      },
      p : {
        fontWeight: '500',
        fontSize: '18px',
      },
      button : {
        borderRadius: '0 0.5rem 0.5rem 0',
        background: 'black',
        height: 'inherit',
        width:'100%',
      }
    }
  }
});

