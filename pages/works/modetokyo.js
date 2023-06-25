import { Container,  Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Resume">
    <Container>
      <Title>
    Resume 
      </Title>
      <P>
      เรซูเม่เป็นเครื่องมือในนำเสนอตัวเองดังนั้นจึงควรใส่ใจและสร้างความประทับใจในครั้งแรก เพื่อเพิ่มโอกาสในการเรียกสัมภาษณ์งานมากขึ้น
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Details</Meta>  <br></br>     
          <span>• เลือกว่าจะให้ทำเป็นรูปแบบภาษาไทย / อังกฤษ หรือทั้งสอง</span><br></br>
          <span>• เสนอความต้องการ สไตล์ หรือรูปแบบ ธีม ฟอนท์ที่ต้องการ </span><br></br>
          <span>• รองรับการแสดงผลในทุกหน้าจอ (Responsive Website)</span><br></br>
          <span>• สามารถปรับแก้ชิ้นงานได้เอง (SourceCode)</span><br></br>
          <span>• ปรึกษาปัญหาและแก้ไข ฟรี </span>
        </ListItem>
        <ListItem>
          <Meta>Working period</Meta>
          <span> 1-7 วัน</span>
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
        <ListItem>
          <Meta>Vive-Resume</Meta>
          <Link href="https://resume-nine-smoky.vercel.app/">
          Resume
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Resume1.png" alt="Inkdrop" />
      <WorkImage src="/images/works/Resume2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/Resume3.png" alt="Inkdrop" />
    </Container>
  </Layout>
)


export default Work
export { getServerSideProps } from '../../components/chakra'
