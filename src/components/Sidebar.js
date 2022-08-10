import React from 'react'
import '../styles/Sidebar.css'
import { Avatar } from '@material-ui/core'
import sidebarTopBg from '../assets/images/sidebar_top_bg.jpg'

function Sidebar() {

    const recentItem = (topic) => {
       return <div class="sidebar__recentItem">
            <div class="sidebar__hash">#{topic}</div>
        </div>
    }

  return (
    <div className='sidebar'>

        <div class="sidebar__top">
            <img src={sidebarTopBg} alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Wassiou Ayedoun</h2>
                <h4>wayedoun@gmail.com</h4>
        </div>
        <div class="sidebar_stats">
            <div class="sidebar__stat">
                <p>Who viewed you</p>
                <p class="sidebar__statNumber">1,145</p>
            </div>
            <div class="sidebar__stat">
            <p>Views on post</p>
                <p class="sidebar__statNumber">278</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactJs")}
            {recentItem("frontenddevs")}
            {recentItem("softwareengineering")}
            {recentItem("javascript")}
            {recentItem("frontend")}
        </div>
    </div>
  )
}

export default Sidebar