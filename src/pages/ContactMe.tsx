import React, { FormEvent, useState } from 'react';
import InputCard from '../components/InputCard';
import { ThemeType } from '../types/navBarTypes';
import { motion } from 'framer-motion';
import { FormTypeData } from '../types/FormTypeData';

function ContactMe(props: ThemeType) {

    const [dataForm, setDataForm] = useState<FormTypeData>({
        email: '',
        subject: '',
        message: ''
    });

    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setDataForm((prevData: FormTypeData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const sendEmail = (e: FormEvent) => {

        e.preventDefault();
        

        // TODO: start checking for the error 
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
                                value={dataForm.email}
                                mode={props.mode}
                                type='email'
                                name='email'
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
                            name='message'
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
        </div>
    );
}

export default ContactMe;
