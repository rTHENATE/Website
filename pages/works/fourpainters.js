import { Container,  Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Website">
    <Container>
      <Title>
      Website 
      </Title>
      <P>
      Backend Website
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>feature</Meta>  <br></br>     
          <span>1. รับดูแลระบบหลังบ้าน </span><br></br>
          <span>2. จัดการฐานข้อมูล  </span><br></br>
          <span>3. โครงสร้างเว็บไซต์  </span><br></br>
          <span>4. การเขียนโค้ดควบคุม </span>
        </ListItem>
        <ListItem>
          <Meta>System</Meta>      
          Backend
        </ListItem>
        <ListItem>
          <Meta>Version</Meta>
          <span>1.0+</span>
        </ListItem>
        <ListItem>
          <Meta>language</Meta>
          <span> เลือกภาษาที่ต้องการได้ </span>
        </ListItem>
        <ListItem>
          <Meta>Contact to buy</Meta>
          <Link href="#">
          Discord
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Backend.png" alt="Inkdrop" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
