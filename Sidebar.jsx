import React,{useState} from 'react'
import {assets} from '../../assets/assets'
import './Sidebar.css'

const Sidebar = () => {

  const[extend,setExtend] = useState(false);

  return (
    <div className='sidebar'>
        {/*Top content of the sidebar*/}
        <div className="top">
            <img src={assets.menu_icon} className='menu' alt="" onClick={()=>setExtend(prev => !prev)}/>

          <div className="new-chat">
            <img onClick={()=>setExtend(prev => !prev)} src={assets.plus_icon} alt="" />
            {extend?<p>New Chat</p>:null}
          </div>

          {extend?<div className="recents">
            <p className='recentTitle'>Recent</p>
            <div className="recentEntry">
              <img src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
          :null
          }
      </div>

      {/*Bottom content of the sidebar */}
      <div className="bottom">
        <div className="bottomItem recentEntry">
          <img src={assets.question_icon} alt="" />
          {extend?<p>Help</p>:null}
        </div>

        <div className="bottomItem recentEntry">
          <img src={assets.history_icon} alt="" />
          {extend?<p>Activity</p>:null}
        </div>

        <div className="bottomItem recentEntry">
          <img src={assets.setting_icon} alt="" />
          {extend?<p>Settings</p>:null}
        </div>
      </div>

  </div>
  )
}

export default Sidebar