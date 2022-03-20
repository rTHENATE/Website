import { Container, Link, List, ListItem } from '@chakra-ui/react'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="AFK system">
    <Container>
      <Title>
      Base Servers
      </Title>
      <P>
      FiveM Base Servers
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>feature</Meta>  <br></br>     
          <span>1. ไม่ใช้งาน essentialmode โม เป็น Limit </span><br></br>
          <span>2. เซิฟเวอร์ไม่มีเทรด </span><br></br>
          <span>3. แก้ไขการบันทึกข้อมูลเป็นแบบ es_extended  1.2 </span><br></br>
          <span>4. การเก็บข้อมูลที่มีประสิทธิภาพ</span><br></br>
          <span>5. แปลง user inventory</span><br></br>
          <span>6. 300-700 Slot</span><br></br>
          <span>7. อัพเดทฟรีตลอดชีพ </span>
        </ListItem>
        <ListItem>
          <Meta>System</Meta>      
          es_extended 1.2 
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
