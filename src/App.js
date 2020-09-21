/** @jsx jsx */
import { jsx, Box, Link, ThemeProvider, Heading, Text, Flex } from 'theme-ui'
import theme from './theme'
import './index.css'
import { GoLightBulb, GoStar } from 'react-icons/go';
import { FaLightbulb, FaStar, FaEnvelope } from 'react-icons/fa'
import { IconContext } from "react-icons";

export default props =>
<ThemeProvider theme={theme}>
<IconContext.Provider value={{ style: { fill:'#f89938', color: '#f89938', verticalAlign: 'middle', height:'.85em', lineHeight:'.8em', padding:'3px', paddingBottom:'6px'} }}>
<Box m={4}>
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '80vh',
    }}>
    <header
      sx={{
        width: '100%'}}>
        <Heading color="#993333" p='1' as='h1' sx={{fontSize: '4em'}}>
          Hello.<br/>
        </Heading>
        <Heading p='1' as='h2'sx={{fontSize: '3em'}}>
          I'm Tyler.<br/>
        </Heading>

    </header>
    <main
      sx={{
        width: '100%',
        flex: '1 1',
      }}>
        <Box my='1'>
                <Text color='#fff' p='1' sx={{lineHeight:'.825em', fontSize:'2em'}}>Want to make your<FaLightbulb />into a<FaStar />?</Text>
                <Text color='#fff' p='1' sx={{lineHeight:'1em', fontSize:'2em'}}>Let's see if I can help.</Text>
                </Box>
                <br/>
                <Box mt='1'>
                <Link
      to='/'
      sx={{
        variant: 'styles.link',
        px: 1,
        py: 2,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: '600',
        color: '#fff'
      }}>
      hello@humancalled.tv
    </Link>
    </Box>
    </main>
  </div>
  </Box>
  </IconContext.Provider>
  </ThemeProvider>