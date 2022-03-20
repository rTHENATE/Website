import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/FiveM.png'
import thumbWalknote from '../public/images/works/FiveM.png'
import thumbFourPainters from '../public/images/works/Backend.png'
import thumbMenkiki from '../public/images/works/BotMain.png'
import thumbModeTokyo from '../public/images/works/ResumeMain.png'
import thumbStyly from '../public/images/works/Website.png'
import thumbPichu2 from '../public/images/works/FiveM.png'
import thumbFreeDBTagger from '../public/images/works/Website.png'
import thumbAmembo from '../public/images/works/BotMain.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        MY-JOB

      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="inkdrop"
            title="Custom Ui"
            thumbnail={thumbInkdrop}>

          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Custom  Script"
            thumbnail={thumbWalknote}
          >

          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Backend Website"
            thumbnail={thumbFourPainters}
          >

          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki"
            thumbnail={thumbMenkiki}
            title="Discord Bot">

          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          CUSTOM

        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Resume"
          >

          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly"
            thumbnail={thumbStyly}
            title="Website ">

          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          SALE
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2"
            thumbnail={thumbPichu2}
            title="Base Servers">

          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="Website "
          >

          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo"
            thumbnail={thumbAmembo}
            title="Discord Bot">

          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
