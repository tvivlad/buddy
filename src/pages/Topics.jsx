import React,{useState} from 'react'
import TopicsList from "../components/TopicsList"
import CreateTopic from '../components/modals/CreateTopic'

import {Button} from 'react-bootstrap'


const Topics = () => {
  const [createTopicShow, setCreateTopicShow]=useState(false)
  return (
  <>  
      <TopicsList/>
      <Button variant="warning" onClick={()=>setCreateTopicShow(true)}  style={{fontSize:'28px', bottom:'20px', right:'20px'}} className="m-4 px-4 position-fixed" > + </Button>
      {/* <CreateTopic show={createTopicShow} onHide={()=>setCreateTopicShow(false)}/> */}
      {/* <CreateDialog show={createTopicShow} onHide={()=>setCreateTopicShow(false)}/> */}
      <CreateTopic show={createTopicShow} onHide={()=>setCreateTopicShow(false)}/>

  </>
  )
}

export default Topics