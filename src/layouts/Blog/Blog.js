import React from 'react';

const Blog = () => {
    return (
        <div className="grid grid-cols-1 gap-7 lg:mx-20 lg:my-5">
            <div className='mx-auto text-start'>
                <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover lg:w-80 lg:h-48 w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png" alt="sql" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Difference between SQL and NoSQL</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    </div>
                </a>
            </div>

            <div className='mx-auto text-start'>
                <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover lg:w-80 lg:h-48 w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.ytimg.com/vi/K6pwjJ5h0Gg/maxresdefault.jpg" alt="sql" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is JWT, and how does it work?</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                    </div>
                </a>
            </div>

            <div className='mx-auto text-start'>
                <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover lg:w-80 lg:h-48 w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.ytimg.com/vi/B8KdllPwxBw/maxresdefault.jpg" alt="sql" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is the difference between javascript and NodeJS?</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </div>
                </a>
            </div>

            <div className='mx-auto text-start'>
                <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover lg:w-80 lg:h-48 w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://tsh.io/wp-content/uploads/2019/09/concurrency-nodejs_.png" alt="sql" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How does NodeJS handle multiple requests at the same time?</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Blog;