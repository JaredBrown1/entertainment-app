import Image from "next/image";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#10141E] pt-40">
      <div>
        <Image
          src="/logo.svg"
          width={32}
          height={25}
          alt="Entertainment Logo"
        />
      </div>

      <div className="bg-[#161D2F] w-[400px] h-[418px] rounded-lg p-8 mt-20">
        <h1 className="text-4xl">Sign Up</h1>
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="Email address"
            className="bg-[#161D2F] mt-8 border-b-2 border-[#5A698F] h-[37px] pl-4 pb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#161D2F] mt-8 border-b-2 border-[#5A698F] h-[37px] pl-4 pb-4"
          />
          <input
            type="password"
            placeholder="Repeat password"
            className="bg-[#161D2F] mt-8 border-b-2 border-[#5A698F] h-[37px] pl-4 pb-4"
          />
          <button className="bg-[#FC4747] rounded-md h-[48px] mt-8">
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
