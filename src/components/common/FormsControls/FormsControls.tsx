import React, {FC} from 'react';
import styles from './FormsControls.module.css';
import {WrappedFieldMetaProps} from "redux-form";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}
const FormControl: FC<FormControlPropsType> = ({ meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
        <div>
            {props.children}
        </div>
    {hasError && <span>{meta.error}</span>}
    </div>
    }

    export const TextArea = (props: any) => {
        const {input, meta, child, ...restProps} = props
        return <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    }

    export const Input = (props: any) => {
        const {input, meta, child, ...restProps} = props
        return <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    }