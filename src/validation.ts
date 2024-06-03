import { Schema } from "yup";

export function validateFields<T>(schema: Schema, data: T): ValidationError | void {
    try {
        schema.validateSync(data, {abortEarly: false, stripUnknown: true  })
        
    } catch (error: any) {
        const objError: ValidationError = {}

        error.inner.forEach((err: { path: string; message: any; }) => {
            objError[err.path] = err.message
        })
        console.log(objError)
        return objError

    }
}

export type ValidationError =  {[key: string]: string}