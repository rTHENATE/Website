import { Container,Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Custom  Script">
    <Container>
      <Title>
      FiveM Script
      </Title>
      <P>
      รับเขียน Script, แก้บัค, Error ต่างๆ
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>System</Meta>      
          es_extended , Legacy ฯลฯ 
        </ListItem>
        <ListItem>
          <Meta>Version</Meta>
          <span>1</span>
        </ListItem>
        <ListItem>
          <Meta>language</Meta>
          <span> Lua, Javascript, MySql, MongoDB </span>
        </ListItem>
        <ListItem>
          <Meta>Contact to buy</Meta>
          <Link href="#">
          Discord
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Script.gif" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
