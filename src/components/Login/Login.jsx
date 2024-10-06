import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/userProvider";

function Login() {
    const navigate = useNavigate();
    const {sigInUser} = useContext(UserContext);

    const handelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // sign in user create
        sigInUser(email, password)
            .then(result => {
                e.target.reset()
                navigate("/")
            console.log(result)
            })
            .catch(error => {
            console.log(error.message)
        })

    }
  return (
      <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
              <div className="text-center">
                  <h1 className="text-5xl font-bold">Login now!</h1>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handelLogin} className="card-body">
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
                          <button className="btn btn-primary">Login</button>
                      </div>
                      <span>Already have account? <Link to="/register" className="link link-info">please register</Link></span>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Login
