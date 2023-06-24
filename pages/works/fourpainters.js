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
      รับพัฒนาเว็บไซต์ ออกแบบระบบ แก้ไขบัค เพิ่มฟังก์ชันของเว็บไซต์
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>feature</Meta>  <br></br>     
          <span>• ระบบหลังบ้าน Backend  System</span><br></br>
          <span>• ระบบจัดการฐานข้อมูล Database  </span><br></br>
          <span>• ระบบจัดการ service API  </span><br></br>
          <span>• โครงสร้างเว็บไซต์ UX&UI  </span><br></br>
          <span>• ทำระบบเชื่อมต่อกับ Payment Gateway เช่น Paypal, qr code 
</span><br></br>
          <span>• ออกแบบระบบเว็บไซต์ on cloud AWS, Google หรือ Firebase
</span><br></br>
          <span>• ออกแบบระบบที่เชื่อมต่อกับ Line Api, Chatbot, Messager 
</span><br></br>


        </ListItem>
        <ListItem>
          <Meta>System</Meta>      
          Website 
        </ListItem>
        <ListItem>
          <Meta>Version</Meta>
          <span>-</span>
        </ListItem>
        <ListItem>
          <Meta>language</Meta>
          <span> NodeJs, .NetCore, Nest.js, Python, Angular, Vue, React, HTML, JavaScript, TypeScript, Jquery, CSS, Bootstrap </span>
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
