import { useForm } from "react-hook-form";

function LoginPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data:any) => console.log(data)

    return (
        <section className="flex h-[calc(100vh-106px)] w-full items-center justify-center bg-base-100 font-sans">
            <div className="mb-4 w-full max-w-md rounded-lg border border-secondary bg-base-200 px-8 pb-8 pt-6 shadow-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label
                            className="mb-2 block text-sm text-primary"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="focus:shadow-outline w-full appearance-none rounded-lg border px-3 py-2 leading-tight text-neutral   shadow focus:outline-none"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="">
                        <label
                            className="mb-2 block text-sm text-primary"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="focus:shadow-outline mb-3 w-full appearance-none rounded-lg border px-3 py-2 leading-tight text-secondary shadow focus:outline-none"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="my-2 flex justify-end">
                        <a
                            className="text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center">
                        <input
                            className="btn btn-primary w-full text-lg"
                            type="submit"
                        >
                            Log In
                        </input>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default LoginPage;
