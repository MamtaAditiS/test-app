import React from 'react'
import { List , Header } from 'semantic-ui-react'
import '../styles/sidebar.css'


const SideBar = () => {
    return(
        <List>
            <List.Item>Profile</List.Item>
            <List.Item>Images</List.Item>
            <List.Item>Shared</List.Item>
            <List.Item>Settings</List.Item>
            <List.Item>Documents</List.Item>
            <List.Item>Contact Info</List.Item>
        </List>
    )
}

export default SideBar;