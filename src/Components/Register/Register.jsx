import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

   const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name, email, password);

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error => {
            console.log('ERROR', error.message);
        })
    }

    return (
<div className="hero bg-base-200 py-16">
  <div className="hero-content flex-col ">

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <br />
      <p className="mx-5 mb-12">Already have an account? please <Link className="font-bold underline" to="/login">Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default Register;