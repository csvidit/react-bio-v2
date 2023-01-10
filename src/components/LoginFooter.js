import "./Font.css";

const LoginFooter = (props) => {
  return (
    <div className="flex w-full flex-col justify-between lg:flex-row">
      <div className="self-center flex flex-col space-y-1 text-slate-500">
        <div className="flex flex-row space-x-1">
        <p class="self-center text-sm">&copy; 2023</p>
          <a
            href="https://viditkhandelwal.com"
            className="self-center hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <p className="self-center font-medium">VIDIT KHANDELWAL</p>
          </a>
        </div>
      </div>
      <div className="self-center flex flex-col text-sm text-slate-500">
        <a
          href="https://github.com/csvidit/react-bio-v2"
          className="hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          Project GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default LoginFooter;
