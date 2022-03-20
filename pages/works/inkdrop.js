import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Custom Ui">
    <Container>
      <Title>
      FiveM Custom UI
      </Title>
      <P>
      รับทำ Ui FiveM สวยๆคลีนๆ ทุกรูปแบบ 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>System</Meta>      
          Custom UI 
        </ListItem>
        <ListItem>
          <Meta>Version</Meta>
          <span>(อัพเดทและซัพพอร์ตตลอดการใช้งาน)</span>
        </ListItem>
        <ListItem>
          <Meta>language</Meta>
          <span> Lua, Javascript, Html, Css, Vue </span>
        </ListItem>
        <ListItem>
          <Meta>Contact to buy</Meta>
          <Link href="#">
          Discord
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Ui.gif" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
