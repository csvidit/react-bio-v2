import { BsArrowRightShort } from "react-icons/bs";
import { IconContext } from "react-icons";

const LoginForm = () => {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <form className="mt-10 flex flex-col space-y-5 rounded border border-slate-600 bg-slate-900 p-10 shadow-lg shadow-indigo-600">
        <label class="flex flex-col space-y-2">
          <span class="text-white">Username</span>
          <input
            class="form-input rounded-md bg-slate-900 text-white focus:ring-sky-500 focus:ring-opacity-50"
            type="text"
          ></input>
        </label>
        <label class="flex flex-col space-y-2">
          <span class="text-white">Password</span>
          <input
            class="form-input rounded-md bg-slate-900 text-white focus:ring-sky-500 focus:ring-opacity-50"
            type="password"
          ></input>
        </label>
        <button
          className="flex flex-row justify-center rounded bg-white p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white"
          type="submit"
          formMethod="post"
        >
          <p className="self-center">Submit</p>
          <BsArrowRightShort className="self-center"></BsArrowRightShort>
        </button>
      </form>
    </IconContext.Provider>
  );
};

export default LoginForm;
