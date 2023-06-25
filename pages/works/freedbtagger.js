import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Wordpress">
    <Container>
      <Title>
       Wordpress
      </Title>
      <P>
      บริการครบวงจรสำหรับผู้ที่ทำเว็บไซต์ด้วย Wordpress หรือ ท่านที่ต้องาการมีเว็บไซต์ขายสินค้า เว็บไซต์บริษัทฯ องค์กร ที่ต้องมีการอัปเดทข้อมูลอยู่บ่อยๆ 
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Details</Meta>  <br></br>     
          <span>• บริการConfig Cloud Service ของ  Google Cloud, Azure, Digital Ocean, Vultr โดยลูกค้าชำระค่าใช้จ่ายของ Cloud เอง ทางเราจะเข้าไปจัดการระบบ ติดตั้ง Web Control Panel จนถึงขั้น Install Wordpress หรือย้าย Website Wordpress ของท่าน </span><br></br>
          <span>• บริการ Cloud Hosting สำหรับ Wordpress โดยแยก Database Server ต่างหากคนละ IP และ SSL 
มีระบบ Firewall และ Backup รันด้วยระบบคอนโทรลพาเนล CWP   </span><br></br>
          <span>• บริการแก้ปัญหา Wordpress หน้าขาว, ย้ายเว็บไซต์ Wordpress ไปโฮสอื่นๆ หรือใช้บริการโฮสของเรา, ตรวจสอบสแปมและจัดการให้เว็บไซต์ทำงานได้ดี </span><br></br>
          <span>• Wordpress All in one Service | Wordpress Cloud Hosting | Migrate | SSL | SEO | CDN | Security </span>

        </ListItem>
        <ListItem>
          <Meta>language</Meta>
          <span> - </span>
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
