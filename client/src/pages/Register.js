import React, { useState } from "react";

function Register() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-blue-50 h-screen  flex items-center">
      <form className="w-64 mx-auto mb-12">
        <input

        value={user}
          type="text"
          placeholder="Username"
          className="block w-full rounded-sm p-2 mb-2"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
        value={password}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-700 w-full rounded-lg text-white p-2">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
