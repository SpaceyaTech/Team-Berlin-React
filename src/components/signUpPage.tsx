import React from 'react';

export default function SignUpPage() {
  return (
    <div className=" min-h-screen w-screen bg-[#B0AEAE] py-40 ">
      <div className="container mx-auto ">
        <div className="flex w-9/12 h-10/12 bg-[#FFFFFF] mx-auto">
          <div className="rt-container w-1/2 bg-[#03A47E] flex justify-center items-center">
            <div className="flex justify-center items-center ">
              <img className="w-2/3 h-3/5 p-30" src="./SYTLOGO.png" />
            </div>
          </div>

          <div className="w-1/2 py-12 px-8 ">
            <h2 className="mb-8 font-poppins text-[#252533] text-center font-normal leading-10 text-2xl ">
              Sign up with your email address to continue with Space Ya Tech
            </h2>

            <form className="flex flex-col" action="#">
              <input
                className="py-3 px-2  border border-solid border-grey-400 w-full rounded-lg mt-5"
                placeholder="Email"
                type="text"
                name="email"
              />
              <input
                className="py-3 px-2  border border-solid border-grey-400 w-full rounded-lg mt-5 "
                placeholder="Full Name"
                type="text"
                name="fullName"
              />
              <input
                className="py-3 px-2  border border-solid border-grey-400 w-full rounded-lg mt-5"
                placeholder="Password"
                type="password"
                name="passWord"
              />
              <button className="bg-[#03A47E] py-2 border-none w-full  h-14 rounded-lg mt-5 flex justify-center items-center font-poppins text-[#FFFFFF] text-center font-medium leading-8 text-xl">
                SIGN UP
              </button>
            </form>

            <div className=" w-4/5 grid grid-cols-3 mt-10 items-center mx-auto">
              <hr className="border border-t-[#000000] " />
              <h1 className="text-center m-0 text-1xl leading-7 ">OR</h1>
              <hr className="border border-t-[#000000] " />
            </div>

            <button className="googleSignUp-btn bg-white py-2 border w-full  h-14 rounded-lg mt-5 flex justify-center items-center  border-black font-poppins text-[#252533] text-center font-medium leading-8 text-xl">
              {' '}
              <img className="w-12 h-12 mr-3" src="./googleLogo.svg" />
              Sign Up with Google
            </button>
            <button className="facebookSignUp-btn bg-[#001C52] py-2 border w-full h-14 rounded-lg mt-5 flex justify-center items-center border-black font-poppins text-[#FFFFFF] text-center font-medium leading-8 text-xl">
              {' '}
              <img className="w-8 h-8 mr-3" src="./fb.svg" />
              Sign Up with Facebook
            </button>

            <p className="mt-5">
              Already have an account?{' '}
              <a href="#" className="hpver">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function SignUpPage() {
//   return (
//     <div className='flex w-360'>
//           <div className='bg-green-200'>
//             <img src='./logo512.png'/>
//           </div>

//         <div className='flex flex-col items-center bg-white '>

//             <h1>Sign up with your email address to continue with Space Ya Tech</h1>

//             <form className='flex flex-col w-360   '>
//               <input className='p-3 border border-solid border-black-100 w-full rounded-lg mt-5 w-700' placeholder='Full Name' type="text"/>
//               <input className='p-3 border border-solid border-black-100 w-full rounded-lg mt-5' placeholder='Email' type="text"/>
//               <input className='p-3 border border-solid border-black-100 w-full rounded-lg mt-5' placeholder='Password' type="password"/>
//             </form>

//             <div className='line-through '>---OR---</div>

//             <button>Sign Up with Google</button>

//             <button>Sign Up with Facebook</button>

//             <a>Already have an account? Sign in</a>
//         </div>
//     </div>
//   )
// }
