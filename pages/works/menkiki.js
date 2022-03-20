import { Container,  List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title=" Bot Discord">
    <Container>
      <Title>
      Bot Discord
      </Title>
      <P>
      Bot Discord
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>feature</Meta>  <br></br>     
          <span>1. บันทึก ข้อความแชท </span><br></br>
          <span>2. บันทึก เข้าสู่เซิร์ฟเวอร์ Discord</span><br></br>
          <span>3. จัดการดูแล Discord</span><br></br>
          <span>4. ตรวจสอบบทบาทในกลุ่ม Discord</span><br></br>
          <span>5. บันทึกกิจกรรมอื่นๆ</span>
        </ListItem>
        <ListItem> 
          <Meta>Version</Meta>
          <span>1.0</span>
        </ListItem>
        <ListItem>
          <Meta>language</Meta>
          <span>Javascript, NodeJs ++</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/salebot.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
