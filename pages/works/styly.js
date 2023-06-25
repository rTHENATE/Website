import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Website">
    <Container>
      <Title>
    Website System
      </Title>
      <P>
      รับทำเว็บไซต์ ครบวงจร ไม่ว่าจะเป็น เว็บไซต์บริษัท เว็บองค์กร เว็บขายสินค้า เว็บโชว์ผลงาน
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>feature</Meta>  <br></br>     
          <span>• Responsive Design รองรับทุกอุปกรณ์การแสดงผล มือถือ แท็บเล็ต และคอมพิวเตอร์ </span><br></br>
          <span>• ออกแบบเว็บไซต์ตาม Design ของลูกค้า </span><br></br>
          <span>• ระบบรักษาความปลอดภัยของเว็บไซต์ SSL จาก Let’s Encrypt</span><br></br>
          <span>• SEO ติดอันดับการค้นหา Google</span><br></br>
          <span>• บริการให้คำปรึกษา แนะนำแก้ไขระบบ ตลอดอายุการใช้งาน  </span><br></br>
 <span>• เว็บโหลดเร็ว ไม่ต้องมาคอยแก้ปัญหาเว็บช้า </span><br></br>
 <span>• ติดตั้ง PDPA ตาม พรบ. คอมพิวเตอร์ </span><br></br>
          <span>• ฟรี Domain Name 1 ปี + Hosting 1 ปี  </span>
        </ListItem>
        <ListItem>
          <Meta>working period</Meta>
          <span>ตามสเกลงาน</span>
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

      <WorkImage src="/images/works/Website.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
