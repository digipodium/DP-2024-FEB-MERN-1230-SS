'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
    name : Yup.string().required('Naam nhi hai tumhara')
    .min(3, 'Too Short'),
    email: Yup.string().required('Email nhi hai tumhara')
    .email('Aisa email nhi hota').min(4, 'Too Short'),
    password: Yup.string().required('Password nhi hai tumhara')
    .min(4, 'Too Short').matches(/[a-z]/, 'lowercase letter required')
    .matches(/[A-Z]/, 'uppercase letter required')
    .matches(/[0-9]/, 'number required')
    .matches(/\W/, 'special character required'),
    confirmPassword: Yup.string().required('Password nhi hai tumhara')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {

    const signupForm = useFormik({
        initialValues: {
            name : '',
            email : '',
            password : '',
            confirmPassword : ''
        },
        onSubmit: (values) => {
            console.log(values);
            // send data to backend
        },
        validationSchema: signupSchema
    })

  return (
    <section className="vh-100 bg-primary-subtle">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shadow my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <div style={{
                    backgroundImage: `url('https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg')`,
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}>

                  </div>
                </div>
                <div className="col-xl-6">

                  <div className="card-body p-md-5">
                    <h3 className="mb-5 text-primary fw-bold">
                      Registration Form
                    </h3>
                    <form onSubmit={ signupForm.handleSubmit } >

                      <div class="mb-3">
                        <label for="" className="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={ signupForm.handleChange }
                          value={ signupForm.values.email }
                          className="form-control"
                          placeholder=""
                        />
                        {
                            signupForm.touched.email && (
                                <small className="text-danger">{signupForm.errors.email}</small>
                            )
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" className="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          onChange={ signupForm.handleChange }
                          value={ signupForm.values.name }
                          className="form-control"
                          placeholder=""
                        />
                        {
                            signupForm.touched.name && (
                                <small className="text-danger">{signupForm.errors.name}</small>
                            )
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input
                          type="text"
                          id="password"
                          onChange={ signupForm.handleChange }
                          value={ signupForm.values.password }
                          class="form-control"
                          placeholder=""
                        />
                        {
                            signupForm.touched.password && (
                                <small className="text-danger">{signupForm.errors.password}</small>
                            )
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          onChange={ signupForm.handleChange }
                          value={ signupForm.values.confirmPassword }
                          class="form-control"
                          placeholder=""
                        />
                        {
                            signupForm.touched.confirmPassword && (
                                <small className="text-danger">{signupForm.errors.confirmPassword}</small>
                            )
                        }
                      </div>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          I Agree to Terms & Conditions
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light">
                          Reset all
                        </button>
                        <button type="submit" className="btn btn-primary ms-2">
                          Submit form
                        </button>
                      </div>
                    </form>

                    <p>Already Registered? <Link href='/login'>Login Here</Link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Signup;