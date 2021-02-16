import React, {FC} from 'react';
import styles from './FormsControls.module.css';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}
type TextInputAndAreaType = {
    meta: WrappedFieldMetaProps
    input: WrappedFieldInputProps
}
const FormControl: FC<FormControlPropsType> = ({meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
        <div>
            {props.children}
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

export const TextArea = (props: TextInputAndAreaType) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
}

export const Input = (props: TextInputAndAreaType) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
}