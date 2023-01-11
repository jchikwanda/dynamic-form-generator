import React from 'react';
import { useFormik } from 'formik';
import { createFormConfigObject } from '../FormMaker/formMaker';

const CreateForm = (config) => {

    const formik = useFormik({
        initialValues: createFormConfigObject({elements:config.elements}),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                
            </form>
        </div>
    )
}

export default CreateForm