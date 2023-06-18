import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/Twice.png'
import thumbInkdrop from '../public/images/links/youtube.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={6}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.10')}
      >
        Hello! I&apos;m NateCoding 
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="page-title" align="center">
          NateCoding
          </Heading>
          <p>Developer (Front end / Back end / Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="#f67b35"
            borderWidth={3}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/Nate.png" //png jpg gif
            alt="Profile image"
          />
        </Box>
      </Box>

      {/* Work */}
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" >
          Work
        </Heading>
        <Paragraph>
          freelance and full-stack developer with passion for
          building digital services/stuff wants from planning and designing all
          the way to solving real-life problems with code and Developed more
          than 60 Webapp systems.{' '}
          <NextLink href="https://github.com/rTHENET">
            <Link>github</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={5}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              My Works
            </Button>
          </NextLink>
        </Box>
      </Section>

      {/* Bio */}
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Thailand
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Learn about computer language
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Learn about Web Graphic Design, Web Programming Skills
        </BioSection>
        <BioSection>
          <BioYear >2020</BioYear>
          Learn about Database, Web server & Application server, Security
        </BioSection>
        <BioSection >
          <BioYear>2022 To Present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>

      {/* I  love */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" >
          I 🤍
        </Heading>
        <Paragraph>
          Football, {' '}
          <Link
          href="https://youtu.be/tVIXY14aJms"
            target="_blank"
            color="lightgreen"
          >
           listen to music,
          </Link>
          ⠀Coding, {' '}
          <Link
            href=""
            target="_blank"
            color="red"
          >
            Take a photo,
          </Link>
          ⠀Learn
        </Paragraph>
      </Section>

      {/* Coding skills*/}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Coding skill
        </Heading>
        <Paragraph>
          Kotlin, Dart, Java/Javascript, CSS HTML, PHP, Python, Go, C C#
        </Paragraph>
      </Section>

      {/* Database skills*/}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Database Skill
        </Heading>
        <Paragraph>
        MySql, MongoDB, MariaDB
        </Paragraph>
      </Section>

      {/*  On the web */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/rTHENET" target="_blank">
              <Button
                variant="ghost"
                color="silver"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Natecoding 
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                color="skyblue"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @Natecoding 
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/rt._net/" target="_blank">
              <Button
                variant="ghost"
                color="orange"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @_nxte.a
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* Contact */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <BioSection>
            <BioYear>Facebook⠀</BioYear>
            <Link
              href="https://www.facebook.com/Tim.tim026"
              target="_blank"
              color="green"
            >
              Facebook
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>Discord ⠀⠀</BioYear>
            <Link
              href="https://discord.gg/3cP3m3g7"
              target="_blank"
              color="green"
            >
              Natecool
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>Line⠀⠀⠀⠀⠀</BioYear>
            <Link href="#" target="_blank" color="green">
              Linelink
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>Phone ⠀⠀⠀</BioYear>
            <Link color="green">
              062-1401663
            </Link>
          </BioSection>
        </Section>
        <br></br>

        {/* GridItem */}
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.twitch.tv/rthenetx"
            title=""
            thumbnail={thumbYouTube}
          >
            My twitch channel
          </GridItem>
          <GridItem
            href="https://www.youtube.com/channel/UCXjA6uAXQ5KQio8fHe3V7sw/channels"
            title=""
            thumbnail={thumbInkdrop}
          >
            My youtube channel
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={8}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Performance
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
