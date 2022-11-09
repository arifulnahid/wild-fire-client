import { Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
    const [service, setService] = useState({ rating: [] });
    document.title = "Wildfire- Add Service"
    // console.log(service)

    const notifyToast = () => {
        return toast.success("Service Added Succesfully!");
    }

    const handleInput = event => {
        event.preventDefault();
        const form = event.target;
        const field = form.id;
        const value = form.value;
        const inputData = { ...service }
        inputData[field] = value;
        setService(inputData);

    }

    const handleAddService = event => {
        event.preventDefault();
        const rating = []
        fetch("http://localhost:5000/service-add", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        }).then(res => res.json())
            .then(data => {
                event.target.reset();
                notifyToast();
                console.log(data)
            })
            .catch(e => console.error(e));

    }

    return (
        <div className='w-96 mx-auto my-5'>
            <Toaster />
            <h1 className='text-xl font-bold mb-5'>Add Service</h1>
            <form onSubmit={handleAddService}>
                <div className="flex flex-col gap-4 text-start mb-5">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="title"
                                value="Title"
                            />
                        </div>
                        <TextInput
                            onBlur={handleInput}
                            id="title"
                            type="text"
                            sizing="sm"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="image"
                                value="Feature Image"
                            />
                        </div>
                        <TextInput
                            onBlur={handleInput}
                            id="image"
                            type="url"
                            sizing="md"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="price"
                                value="Price"
                            />
                        </div>
                        <TextInput
                            onBlur={handleInput}
                            id="price"
                            type="number"
                            sizing="md"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="description"
                                value="Description"
                            />
                        </div>
                        <TextInput
                            onBlur={handleInput}
                            id="description"
                            type="text"
                            sizing="lg"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="text-gray-900 bg-slate-500 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;