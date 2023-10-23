// pages/login.js

import React from 'react';
import { Formik,FormikProvider, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { login } from '../pages/api/api';

// useRouter

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginComponent = () => {
  const initialValues = {
    email: '',
    password: '',
  };

const router = useRouter()

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: async({email,password}) => {
      try{
        await login(email,password)
        // localStorage.setItem('jwt',data.access_token)
        router.push('/dashboard')
      }catch(err){
        console.log('error',err)
      }
    },
  })

  const {errors,touched,handleSubmit,getFieldProps,} = formik

  return (
    <>
    <FormikProvider value={formik}>
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full border rounded-md py-2 px-3"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full border rounded-md py-2 px-3"
              />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Login
            </button>
          </Form>
        <div className="mt-4">
          <p>
            Dont have an account?
            <a href="/signup">
              <a className="text-blue-500 hover:underline">Sign up</a>
            </a>
          </p>
        </div>
      </div>
    </div>
    </FormikProvider>
    </>
  );
};

export default LoginComponent;
