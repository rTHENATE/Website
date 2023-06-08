import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 500ms ease;
  }

  &:hover img {
    transform: rotate(720deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={30} height={30} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.800')}
            opacity={1.0}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
           NateCoding 
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
