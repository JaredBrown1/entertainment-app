import Image from "next/image";
import Link from "next/link";

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
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#161D2F] mt-8 border-b-2 border-[#5A698F] h-[37px] pl-4 pb-4"
            required
          />
          <input
            type="password"
            placeholder="Repeat password"
            className="bg-[#161D2F] mt-8 border-b-2 border-[#5A698F] h-[37px] pl-4 pb-4"
            required
          />
          <button className="bg-[#FC4747] rounded-md h-[48px] mt-8 hover:bg-white hover:text-black">
            Create an account
          </button>
        </form>

        <p className="text-sm text-center pt-4">
          Already have an account?{" "}
          <span className="text-[#fc4747] hover:text-white">
            <Link href="/login">Login</Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
