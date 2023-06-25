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
      บอทที่รับทำเบื้องต้น หรือต้องการแบบไหนลองมาคุยกันก่อนได้ ราคาถูก ใช้งานและติดตั้งง่าย
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Details</Meta>  <br></br>     
          <span>• บอทกลั่นกรอง Discord เนื้อหาที่ไม่เหมาะสม
</span><br></br>

          <span>• บอทโพล ความบันเทิง ดนตรี
และ เกมส์
</span><br></br>

          <span>• บอทจัดการดูแล Discord</span><br></br>
 
         <span>• Open Source 
</span><br></br>

        </ListItem>
        <ListItem> 
          <Meta>Version</Meta>
          <span>-</span>
        </ListItem>
        <ListItem>
          <Meta>language</Meta>
          <span>Python, NodeJs </span>
        </ListItem>
      </List>
      
      <WorkImage src="/images/works/salebot.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
