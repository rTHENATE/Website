import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/post/p1.png'
import thumbMyDeskSetup from '../public/images/post/p2.png'
import thumb500PaidUsers from '../public/images/post/p3.png'
import thumbFinancialGoal from '../public/images/post/p4.png'
import thumbHowToPriceYourself from '../public/images/post/p5.png'
import thumb50xFaster from '../public/images/post/p6.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Performance
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title=""
            thumbnail={thumbFishWorkflow}
            
          />
          <GridItem
            title=""
            thumbnail={thumbMyDeskSetup}
           
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title=""
            thumbnail={thumb500PaidUsers}
            
          />
          <GridItem
            title=""
            thumbnail={thumbFinancialGoal}
            
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title=""
            thumbnail={thumbHowToPriceYourself}
          
          />
          <GridItem
            title=""
            thumbnail={thumb50xFaster}
          
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
