import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputCard from '../components/InputCard';
import { ThemeType } from '../types/navBarTypes';
import { motion } from 'framer-motion';
import { FormTypeData } from '../types/FormTypeData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactMe(props: ThemeType) {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState<FormTypeData>({
        to: '',
        subject: '',
        text: ''
    });

    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setDataForm((prevData: FormTypeData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const sendEmail = async (e: FormEvent) => {

        e.preventDefault();
        if (dataForm.to === '') {
            toast('There is no email !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                type: "error",
            });
            return;
        }

        if (dataForm.subject === '') {
            toast('There is no subject !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                type: "error",
            });
            return;
        }

        if (dataForm.text === '') {
            toast('There is no message !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                type: "error",
            });
        }

        if (!isValidEmail(dataForm.to)) {
            toast('Email is not valid !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                type: "error",
            });
            return;
        }

        console.log({
            dataForm
        })

        // return;
        setDataForm({
            to: '',
            text: '',
            subject: '',
        })
        navigate("/")
    }

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        })
    };
    
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            }
        },
    }


    return (
        <div className='my-20'>
            <div className='flex flex-col items-center justify-between mx-auto gap-y-10' >
                <div className='flex items-center justify-between' >
                    <p className='font-bold text-4xl text-orange-600'>
                        Hit me up!
                    </p>
                </div>
                <motion.form
                    onSubmit={sendEmail}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className='flex items-center justify-between flex-col mt-7 gap-y-10'
                >
                    <motion.div
                        variants={child}
                        className='flex items-center justify-between gap-5 flex-col lg:flex-row w-full'
                    >
                        <div className="flex items-center justify-between">
                            <InputCard 
                                onChanged={handleChangeData}
                                value={dataForm.to}
                                mode={props.mode}
                                type='email'
                                name='to'
                                placeholder='Email'
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            
                            <InputCard
                                name='subject'
                                onChanged={handleChangeData}
                                value={dataForm.subject}
                                mode={props.mode}
                                type='text'
                                placeholder='Subject'
                            />

                        </div>
                    </motion.div>

                    <motion.div
                        variants={child}
                        className='flex items-center justify-between w-full'
                    >
                        <textarea
                            onChange={handleChangeData}
                            name='text'
                            className={
                                props.mode
                                    ?
                                "h-60 block p-2.5 w-full text-sm bg-blue-950 rounded-lg border-2 border-gray-100  outline-none focus:border-red-500 focus:text-white transition duration-200"
                                    :
                                "h-60 block p-2.5 w-full text-sm bg-indigo-100 rounded-lg border-2 border-blue-950  outline-none focus:border-red-500 focus:text-gray-900 transition duration-200"
                            }
                            placeholder="Write your message here ..."
                        ></textarea>
                    </motion.div>
                    
                    <motion.button
                        type='submit'
                        variants={child}
                        className={
                            props.mode
                                ? 
                            'flex items-center text-indigo-100 justify-center text-lg w-full bg-blue mx-auto p-2 rounded-lg border-2 border-gray-100 hover:border-red-500 hover:bg-red-500 transition duration-200'
                                :
                            'flex items-center text-blue-950 justify-center text-lg w-full bg-blue mx-auto p-2 rounded-lg border-2 border-blue-950 hover:border-red-500 hover:bg-red-500 transition duration-200'
                        }
                    >
                        Submit
                    </motion.button>
                </motion.form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ContactMe;
