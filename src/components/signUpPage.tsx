import React from 'react';

export default function SignUpPage() {
  const [emailData, setEmailData] = React.useState<string>('');
  const [fullNameData, setFullNameData] = React.useState('');
  const [passWordData, setPassWordData] = React.useState('');

  const [isSubmit, setIsSubmit] = React.useState(false);

  const [passErrors, setPassErrors] = React.useState('');
  const [emailErrors, setEmailErrors] = React.useState('');
  const [nameErrors, setNameErrors] = React.useState('');

  function handleSubmit(event: any) {
    event.preventDefault();

    setEmailErrors(validateEmail(emailData));
    setNameErrors(validateName(fullNameData));
    setPassErrors(validatePass(passWordData));

    setIsSubmit(true);
  }

  // validation errors //

  const validateName = (values: string) => {
    let errors = '';
    if (!values) {
      errors = 'Fullname is required';
    }
    return errors;
  };

  const validatePass = (values: string) => {
    let errors = '';
    if (!values) {
      errors = 'password is required';
    }
    return errors;
  };

  const validateEmail = (values: string) => {
    let errors = '';
    if (!values) {
      errors = 'Email is required';
    }
    return errors;
  };

  return (
    <div className=" min-h-screen w-screen bg-[#B0AEAE] py-40 ">
      <div className="container mx-auto ">
        <div className="flex w-9/12 h-10/12 bg-[#FFFFFF] mx-auto">
          <div className="rt-container w-1/2 bg-[#03A47E] flex justify-center items-center">
            <div className="flex justify-center items-center ">
              <img className="w-2/3 h-3/5 p-30" src="./SytLogo.png" />
            </div>
          </div>

          <div className="w-1/2 py-12 px-8 ">
            <h2 className="mb-8 font-poppins text-[#252533] text-center font-normal leading-10 text-2xl ">
              Sign up with your email address to continue with Space Ya Tech
            </h2>

            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                className="py-3 px-2  border border-solid border-grey-400 w-full rounded-lg mt-5"
                placeholder="Email"
                type="text"
                onChange={(e) => setEmailData(e.target.value)}
                name="email"
                value={emailData}
              />
              <p className="text-red-900 text-xl">{emailErrors}</p>
              <input
                className="py-3 px-2  border border-solid border-grey-400 w-full rounded-lg mt-5 "
                placeholder="Full Name"
                type="text"
                onChange={(e) => setFullNameData(e.target.value)}
                name="fullName"
                value={fullNameData}
              />
              <p className="text-red-900 text-xl">{nameErrors}</p>
              <input
                className="py-3 px-2  border border-solid border-grey-400 w-full rounded-lg mt-5"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassWordData(e.target.value)}
                name="passWord"
                value={passWordData}
              />
              <p className="text-red-900 text-xl">{passErrors}</p>
              <button className="bg-[#03A47E] py-2 border-none w-full  h-14 rounded-lg mt-5 flex justify-center items-center font-poppins text-[#FFFFFF] text-center font-medium leading-8 text-xl">
                SIGN UP
              </button>
            </form>

            <div className=" w-4/5 grid grid-cols-3 mt-10 items-center mx-auto">
              <hr className="border-t-[#000000] " />
              <h1 className="text-center m-0 text-1xl leading-7 ">OR</h1>
              <hr className="border-t-[#000000] " />
            </div>

            <button className="googleSignUp-btn bg-white py-2 border w-full  h-14 rounded-lg mt-5 flex justify-center items-center  border-black font-poppins text-[#252533] text-center font-medium leading-8 text-xl">
              <img className="w-12 h-12 mr-3" src="./googleLogo.svg" />
              Sign Up with Google
            </button>
            <button className="facebookSignUp-btn bg-[#001C52] py-2 border w-full h-14 rounded-lg mt-5 flex justify-center items-center border-black font-poppins text-[#FFFFFF] text-center font-medium leading-8 text-xl">
              <img className="w-8 h-8 mr-3" src="./fb.svg" />
              Sign Up with Facebook
            </button>

            <p className="mt-5 mx auto flex justify-center">
              Already have an account?
              <a href="#" className="ml-2 hover:blue-900">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
