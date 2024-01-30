import { Button, Input } from 'antd';
import React from 'react';

interface FormProps {
    submitForm: () => void;
    total: number;
}

const Form: React.FC<FormProps> = React.memo(({ submitForm, total }: FormProps) => {
    console.log(`Form is rendered`);
    return (
        <div className="inline-flex items-center justify-center w-80 mx-auto bg-blue-900 p-8 rounded-lg shadow-lg text-white">
            <div className='flex flex-col gap-2'>
                <h1 className="font-mono text-4xl">Form</h1>
                <Input type="text" id="name" className="w-full h-10" placeholder='Name' />
                <Button onClick={submitForm} className="bg-white text-blue-900 hover:bg-gray-300">
                    Submit
                </Button>
                <h1 className="font-mono text-sm my-2">Total: {total}</h1>
            </div>
        </div>
    );
});

export default Form;