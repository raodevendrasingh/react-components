// nextjs client component
"use client";

import Link from "next/link";
import { FormEvent } from "react";

function RegisterPage() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the form submission here
        console.log("Form submitted");
    };

    return (
        <section className="flex h-[calc(100vh-106px)] w-full items-center justify-center bg-base-100 font-sans">
            <div className="mb-4 w-full max-w-sm rounded-lg border border-secondary bg-base-200 px-8 pb-8 pt-6 shadow-md">
                <form onSubmit={handleSubmit}>
                    <h1 className="pb-3 text-3xl font-bold">Register</h1>
                    <div className="flex flex-col gap-3">
                        <div>
                            <label
                                className="mb-2 block text-xs text-primary"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded-lg border px-3 py-1.5 text-base leading-tight text-gray-600 shadow focus:outline-none"
                                id="username"
                                type="text"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label
                                className="mb-2 block text-xs text-primary"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded-lg border px-3 py-1.5 text-base leading-tight text-gray-600 shadow focus:outline-none"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label
                                className="mb-2 block text-xs text-primary"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded-lg border px-3 py-1.5 text-sm leading-tight text-gray-600 shadow focus:outline-none"
                                id="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        
                    </div>
                    <div className="my-3 flex items-center justify-between">
                        <div className="form-control">
                            <label className="label cursor-pointer gap-2">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="checkbox checkbox-sm"
                                />
                                <span className="label-text">Remember me</span>
                            </label>
                        </div>
                        
                    </div>
                    <div className="flex flex-col">
                        <button
                            className="btn btn-primary btn-sm w-full text-base"
                            type="submit"
                        >
                            Register
                        </button>
                        <p className="py-2 text-xs">
                            Already have an Account?{" "}
                            <Link
                                href="/login"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                Log In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default RegisterPage;
