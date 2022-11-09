import { Avatar, DarkThemeToggle, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../../contexts/AuthProvider';
import { BsPersonCircle } from 'react-icons/bs';

const Navabr = () => {
    const { user, UserLogout } = useContext(AuthContex);
    // console.log(user);

    return (
        <Navbar
            fluid={true}
            rounded={false}
        >
            <Navbar.Brand href="/">
                <img
                    src="https://i.ibb.co/MP93L4x/depositphotos-69492315-stock-illustration-abstract.png"
                    className="w-14 mr-3"
                    alt="WildFire Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    WildFire
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <DarkThemeToggle />
                <Dropdown
                    className='w-full'
                    arrowIcon={false}
                    inline={true}
                    label={
                        user?.photoURL ?
                            <Avatar alt="user" img={user.photoURL} rounded={true} /> :
                            <BsPersonCircle className='text-3xl' />
                    }
                >
                    {
                        user ?
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    {user?.displayName || "No Name"}
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    {user?.email}
                                </span>
                            </Dropdown.Header> :
                            undefined
                    }
                    <Dropdown.Item>
                        <Link to="/">Home</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/profile">Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/add-service">Add Service</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/rating">Reviews</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        {
                            user ?
                                <button onClick={UserLogout}> Sign out</button>
                                : <Link to="/login">Login</Link>
                        }

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
                {
                    user ?
                        <button onClick={UserLogout}>Logout</button>
                        :
                        <NavLink
                            className="block py-2 pr-4 pl-3 md:p-0 bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700"
                            to='/login'
                            style={({ isActive }) =>
                                isActive ? { color: "red" } : undefined
                            }
                        >
                            Login
                        </NavLink>
                }

            </Navbar.Collapse>
        </Navbar>

    );
};

export default Navabr;