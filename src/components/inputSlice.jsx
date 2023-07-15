import React from 'react'

const InputSlice = ({setvalue}) => {
  return (
    <>
      <div className="rounded-full py-2 px-4 flex gap-3 items-center shadow-contain">
        <i className="fa fa-envelope"></i>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={(event) => {
            setvalue((prev) => ({ ...prev, email: event.target.value }));
          }}
        />
      </div>
      <div className="rounded-full py-2 px-4 flex gap-3 items-center shadow-contain">
        <i className="fa fa-lock"></i>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(event) => {
            setvalue((prev) => ({ ...prev, pass: event.target.value }));
          }}
        />
      </div>
    </>
  );
}

export default InputSlice
