import React, { useState } from 'react';
import { useMediaQuery, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Box, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink as Link } from 'react-router-hash-link';
import Toggler from "./home/Toggler";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '',
        active: 'home'
    },
    {
        name: 'PROJECT',
        to: 'portfolio',
        active: 'portfolio'
    }
];

const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

export default function Navbar({ darkMode, handleClick, active, setActive }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const renderLinks = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {links.map((link, index) => (
                    <ListItem
                        button
                        key={index}
                        onClick={() => setActive(link.active)}
                        sx={{
                            padding: '1rem',
                            textAlign: 'center',
                            '&:hover': {
                                backgroundColor: '#f0f0f0', // Light background on hover
                            },
                        }}
                    >
                        <Link
                            to={singlePage ? `#${link.to}` : `/${link.to}`}
                            scroll={el => scrollWidthOffset(el)}
                            smooth
                            className={link.active === active ? 'active' : ''}
                            style={{
                                textDecoration: 'none',
                                color: link.active === active ? '#1e88e5' : '#333', // Blue for active, dark for others
                                display: 'block',
                                transition: 'background-color 0.3s, color 0.3s',
                                backgroundColor: link.active === active ? '#fff' : 'transparent', // White background for active link
                                borderRadius: '0.5rem', // Rounded corners
                                fontWeight: link.active === active ? 'bold' : 'normal', // Bold font weight for active link
                                boxShadow: link.active === active ? '0 2px 4px rgba(0,0,0,0.1)' : 'none', // Box shadow for active link
                            }}
                        >
                            {!link.type ? (
                                <ListItemText primary={link.name} disableTypography />
                            ) : (
                                <Typography variant="h6">{link.name}</Typography>
                            )}
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem sx={{ justifyContent: 'center', paddingTop: '1rem' }}>
                    {/* <Toggler darkMode={darkMode} handleClick={handleClick} /> */}
                </ListItem>
            </List>
        </div>
    );

    return (
        <AppBar position="static" style={{
            background: '#fff', // White background
            borderBottom: '1px solid #eee', // Light border
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow
        }}>
            <Toolbar>
                {isMobile ? (
                  <div style={{ display:"flex", justifyContent:"space-between" ,alignItems:"center"}} >
                     <div style={{width:'50vw', left:'0'}}>
                   <Box>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon style={{ color: '#1e88e5' }} /> {/* Blue menu icon */}
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} classes={{ paper: 'drawer' }}>
                            <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
                                {renderLinks()}
                            </Box>
                        </Drawer>
                    </Box>
                   </div>
                    <div style={{width:'', paddingLeft:'100px'}}>
                    <Box>
                            <Toggler darkMode={darkMode} handleClick={handleClick} />
                        </Box>
                    </div>
                  </div>
                ) : (
                    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                        {links.map((link, index) => (
                            <Box key={index} sx={{ borderImageSource: info.gradient }}>
                                <Link
                                    to={singlePage ? `#${link.to}` : `/${link.to}`}
                                    scroll={el => scrollWidthOffset(el)}
                                    smooth
                                    onClick={() => setActive(link.active)}
                                    className={`link ${link.active === active ? 'active' : ''}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: '#333',
                                        margin: '0 1rem',
                                        paddingBottom: '0.5rem',
                                        borderBottom: link.active === active ? '2px solid #1e88e5' : 'none',
                                        transition: 'color 0.3s ease-in-out'
                                    }}
                                >
                                    {!link.type ? link.name : <Typography variant="h6">{link.name}</Typography>}
                                </Link>
                            </Box>
                        ))}
                        <Box>
                            <Toggler darkMode={darkMode} handleClick={handleClick} />
                        </Box>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
