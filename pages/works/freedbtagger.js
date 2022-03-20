import { Container, Link, List, ListItem } from '@chakra-ui/react'
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
      รับทำเว็บไซต์ ครบวงจร ไม่ว่าจะเป็น เว็บไซต์บริษัท เว็บองค์กร เว็บขายสินค้า เว็บโชว์ผลงาน
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>feature</Meta>  <br></br>     
          <span>1. เว็บรองรับการแสดงผลในทุกหน้าจอ (Responsive Website) </span><br></br>
          <span>2. เชื่อมต่อ Social Media ทุกช่องทาง Facebook, Line ,Messenger</span><br></br>
          <span>3. https หรือกุญแจสีเขียว เว็บไซต์ปลอดภัย น่าเชื่อถือ</span><br></br>
          <span>4. คอยดูแลซัพพอร์ตเว็บไซต์และอัพเดตให้ตลอด  </span><br></br>
          <span>5. ฟรี Domain Name  + Hosting 1 ปี  </span>
        </ListItem>
        <ListItem>
          <Meta>working period</Meta>
          <span>3-15 วัน</span>
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

      <WorkImage src="/images/works/web-2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/web-3.png" alt="Inkdrop" />
      <WorkImage src="/images/works/web-4.png" alt="Inkdrop" />
      <WorkImage src="/images/works/web-5.png" alt="Inkdrop" />
    </Container>
  </Layout>
)



export default Work
export { getServerSideProps } from '../../components/chakra'
