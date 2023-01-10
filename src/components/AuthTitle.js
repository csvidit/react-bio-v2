import "./Font.css";

const AuthTitle = (props) => {
  return (
    <div className="flex flex-col justify-center space-y-1">
      <h2 className="clash self-center text-xl text-white">VIDIT KHANDELWAL</h2>
      <div className="flex flex-row space-x-3 justify-center  items-center">
        <div>
          <h1 className="clash self-center text-6xl text-red-600">VeriAuth</h1>
        </div>
        <div>
          <h3 className="clash self-center rounded bg-indigo-600 pr-5 pl-5 text-white">INTRA</h3>
        </div>
      </div>
      <p className="text-white text-center self-center">the internal authentication system for viditkhandelwal.com admin consoles</p>
    </div>
  );
};

export default AuthTitle;
