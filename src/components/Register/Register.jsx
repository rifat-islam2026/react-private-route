import { Link } from "react-router-dom";

function Register() {
    const handelRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)
    }
  return (
      <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
              <div className="text-center">
                  <h1 className="text-5xl font-bold">Register now!</h1>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handelRegister} className="card-body">
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Name</span>
                          </label>
                          <input
                              name="name"
                              type="text"
                              placeholder="Name"
                              className="input input-bordered"
                              required />
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Email</span>
                          </label>
                          <input
                              name="email"
                              type="email"
                              placeholder="Email"
                              className="input input-bordered"
                              required />
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Password</span>
                          </label>
                          <input
                              name="password"
                              type="password"
                              placeholder="password"
                              className="input input-bordered"
                              required />
                          <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                          </label>
                      </div>
                      <div className="form-control mt-6">
                          <button className="btn btn-primary">Register</button>
                      </div>
                      <span>New here <Link to="/login" className="link link-info">please login</Link></span>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Register
