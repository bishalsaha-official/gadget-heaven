const Register = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="card w-full max-w-md shadow-2xl bg-base-100 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6 text-primary">Create an Account</h2>
                <form>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Your name" className="input input-bordered" />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" placeholder="example@email.com" className="input input-bordered" />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="********" className="input input-bordered" />
                    </div>

                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="********" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <button className="btn btn-primary w-full">Register</button>
                    </div>
                </form>

                <p className="text-sm text-center mt-4">
                    Already have an account? <a className="text-primary hover:underline" href="/login">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
