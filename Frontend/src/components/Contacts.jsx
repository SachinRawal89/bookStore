import React from "react";
import { useForm } from "react-hook-form";


function Contacts() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <h1 className="text-2xl font-semibold">Contact Us</h1>

         {/* Name */}   
         <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input validator"
            placeholder="Name"
            {...register("text", { required: true })}
          />
          <br/>
          {errors.text && <span className="text-sm text-red-500">This field is required</span>}
        </fieldset>

        { /* Email */}

        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input validator"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <br/>
          {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </fieldset>

        <label className="fieldset">
          <span className="label">Message</span>
          <input
            type="text"
            className="input validator"
            placeholder="Message"
            {...register("text", { required: true })}
          />
          <br/>
          {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </label>

        {/*<button className="btn btn-neutral mt-4" type="submit">
          Login
        </button> */ }
        <button className="btn btn-ghost mt-1" type="submit">
          Submit
        </button>
      </form>
      </div>
    </>
  );
}

export default Contacts;
