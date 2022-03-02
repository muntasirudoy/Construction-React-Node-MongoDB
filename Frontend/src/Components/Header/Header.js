import React,{useState} from 'react';
import { Menu } from 'antd';
import { HomeOutlined, PhoneOutlined, MailOutlined,FacebookFilled,YoutubeFilled,InstagramFilled,MailFilled} from '@ant-design/icons';
import logo from './logo.png'
import { Link } from 'react-router-dom';

const Header = () => {

    const [current, setcurrent] = useState('')
    const { SubMenu } = Menu;

   const handleClick = e => {
        console.log('click ', e);
        setcurrent(e.key);
      };


    return (
        <>
        <div className='top-header'>
              <div className='container'>
                   <div className='left'> <MailOutlined /><p>mahmudbuilders@gmail.com</p> <PhoneOutlined  /> <p>+880187925861 </p> </div>
                  <div className='right'> <FacebookFilled /> <YoutubeFilled /><InstagramFilled /><MailFilled /></div>
              </div>
        </div>
        <div className='mid-header-all'>
         <div className='container'>
              <div className='mid-header'>
               <div className='logo'><img src={logo}></img> <h1>Mahmud</h1></div>   
                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="HOME" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                        </Menu.Item>

                        <SubMenu key="ABOUTUS"  title="ABOUT US">
                            <Menu.ItemGroup >
                                <Menu.Item key="setting:1"><Link to="/CompanyProfile">Company Profile</Link></Menu.Item>
                                <Menu.Item key="setting:2"><Link to="/ManagementTeam">Management Team</Link></Menu.Item>
                                <Menu.Item key="setting:3"><Link to="/Csr"> Corporate Social Responsibility</Link></Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu key="PROJECTS"  title="PROJECTS">
                            <Menu.ItemGroup >
                                <Menu.Item key="setting:4"><Link to="/AvialableFlats">Avialable Flats</Link></Menu.Item>
                                <Menu.Item key="setting:5"><Link to="/UpcomingProjects">Upcomming Projects</Link></Menu.Item>
                                <Menu.Item key="setting:6"><Link to="/OngoingProjects"> Ongoing Project </Link></Menu.Item>
                                <Menu.Item key="setting:7"><Link to="/ReadyProjects"> Ready Project</Link></Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu key="SERVICE"  title="SERVICE">
                            <Menu.ItemGroup >
                                <Menu.Item key="setting:8"><Link to="/AfterSale">After Sale Service</Link></Menu.Item>
                                <Menu.Item key="setting:9"><Link to="/Interior">Interior</Link></Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <Menu.Item key="CAREER" >
                        <Link to="/Apply">Apply</Link>
                        </Menu.Item>

                        <SubMenu key="CONTACT"  title="CONTACT">
                            <Menu.ItemGroup >
                                <Menu.Item key="setting:10"><Link to="/LandOwner">Land Owner</Link></Menu.Item>
                                <Menu.Item key="setting:11"><Link to="/Buyer">Buyer</Link></Menu.Item>
                                <Menu.Item key="setting:12"><Link to="/ContactUs">Contact Us</Link></Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                </Menu>
    </div>
    </div>
    </div>
</>
    );
}

export default Header


