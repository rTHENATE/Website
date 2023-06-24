import { Container, Link, List, ListItem } from '@chakra-ui/react'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="AFK system">
    <Container>
      <Title>
      Base ESX
      </Title>
      <P>
      FiveM Base Last version 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>feature</Meta>  <br></br>     
          <span>• รองรับ 700+ slots</span><br></br>
          <span>• เซิฟเวอร์ไม่มีเทรด </span><br></br>
          <span>• esx last version</span><br></br>
          <span>• การเก็บข้อมูลที่มีประสิทธิภาพ maria DB / mongo DB</span><br></br>
          <span>• user inventory</span><br></br>
          <span>• support & update free</span>
        </ListItem>
        <ListItem>
          <Meta>System</Meta>      
          es_extended last version 
        </ListItem>
        <ListItem>
          <Meta>language</Meta>
          <span> Lua </span>
        </ListItem>
        <ListItem>
          <Meta>Contact to buy</Meta>
          <Link href="#">
          Discord
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/FiveM-x.jpg" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
