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
        Hello! I&apos;m Devel●per
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="page-title" align="center">
          rTHENATE
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
            borderColor="skyblue"
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
          rTHENATE is freelance and full-stack developer with passion for
          building digital services/stuff wants. from planning and designing all
          the way to solving real-life problems with code and Developed more
          than 60 Webapp systems.{' '}
          <NextLink href="https://github.com/rTHENET">
            <Link>rTHENATE</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={5}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="red">
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
          Learn about Web Graphic Design. Web Programming Skills
        </BioSection>
        <BioSection>
          <BioYear >2020</BioYear>
          Learn about Database. API. Security. JWT. OAuth. Token
        </BioSection>
        <BioSection >
          <BioYear>2021 To Present</BioYear>
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
            href="https://www.youtube.com/watch?v=kGzC2-ofves&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMkGzC2-ofves&start_radio=1"
            target="_blank"
            color="lightgreen"
          >
            Music,
          </Link>
          ⠀Coding, {' '}
          <Link
            href="https://news.mthai.com/app/uploads/2019/02/15-02-19-21.jpg"
            target="_blank"
            color="red"
          >
            Favorite Pic,
          </Link>
          ⠀Learning
        </Paragraph>
      </Section>

      {/* Coding skills*/}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Coding skill
        </Heading>
        <Paragraph>
          React, Node js, jQuery, Java/Javascript, CSS, PHP, Python, Go, C
        </Paragraph>
      </Section>

      {/* Database skills*/}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Database Skill
        </Heading>
        <Paragraph>
        Sql, MongoDB, MariaDB
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
                @rTHENATE
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
                @rTHENATE
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
                @rt._nate
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
              rTHENATE
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
