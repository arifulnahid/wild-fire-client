import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navabr = () => {
    return (
        <Navbar
            fluid={true}
            rounded={false}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="WildFire Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    WildFire
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Flowbite>
                    <DarkThemeToggle />
                </Flowbite>
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink
                    to='/'
                    style={({ isActive }) =>
                        isActive ? { color: "red" } : undefined
                    }
                    className="block py-2 pr-4 pl-3 md:p-0 bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700"
                >
                    Home
                </NavLink>
                <NavLink
                    className="block py-2 pr-4 pl-3 md:p-0 bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700"
                    to='/service'
                    style={({ isActive }) =>
                        isActive ? { color: "red" } : undefined
                    }
                >
                    Service
                </NavLink>
                <NavLink
                    className="block py-2 pr-4 pl-3 md:p-0 bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700"
                    to='/blog'
                    style={({ isActive }) =>
                        isActive ? { color: "red" } : undefined
                    }
                >
                    Blog
                </NavLink>
                <NavLink
                    className="block py-2 pr-4 pl-3 md:p-0 bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700"
                    to='/login'
                    style={({ isActive }) =>
                        isActive ? { color: "red" } : undefined
                    }
                >
                    Login
                </NavLink>

            </Navbar.Collapse>
        </Navbar>

    );
};

export default Navabr;