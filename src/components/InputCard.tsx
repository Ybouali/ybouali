import React from 'react'
import { InputCardType } from '../types/InputCardType'

function InputCard(props: InputCardType) {
  return (
    <input
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChanged}
        name={props.name}
        className={
            props.mode  ?
            'h-14 w-96 px-1 text-xl bg-blue-950 border-2 rounded-lg border-gray-100 outline-none focus:border-red-500 focus:text-white transition duration-200'
                :
            'h-14 w-96 px-1 text-xl bg-indigo-100 border-2 rounded-lg border-blue-950 outline-none focus:border-red-500 focus:text-blue-950 transition duration-200'
        }
    />
  )
}

export default InputCard
