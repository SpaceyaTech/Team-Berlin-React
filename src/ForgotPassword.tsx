import React from "react";
import spaceYaTechLogo from './spaceYaTechLogo.svg';

function ForgotPassword(){
    return (
        <div className="flex">
            <div className="w-44vw h-screen bg-secondaryGreen">
                <div className="py-22vh flex justify-center items-center">
                    <img src={spaceYaTechLogo} className="h-56vh"/>
                </div>
            </div>
            <div className="w-56vw h-screen">
                <div className="mt-10vh mb-48vh mx-0">
                    <div className="pb-8vh">
                        <div className="w-32vw leading-5.7vh m-auto text-4vh text-center text-spaceYaTech_text font-poppins not-italic font-medium">
                            Please Reset Password
                        </div>
                    </div>
                    <div>
                        <form>
                            <div>
                                <div className="flex justify-center items-center pb-1.65vh">
                                    <input className="box-border w-42vw h-7.5vh border border-solid border-black rounded-8px py-1.65vh px-1vw font-poppins font-normal text-2vh" type="password" placeholder="Password"/>
                                </div>
                                <div className="flex justify-center items-center pb-3.7vh">
                                    <input className="box-border w-42vw h-7.5vh border border-solid border-black rounded-8px py-1.65vh px-1vw font-poppins font-normal text-2vh" type="password" placeholder="Confirm Password"/>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="box-border w-42vw h-7.5vh border-0 rounded-8px font-poppins font-normal text-3vh font-medium bg-secondaryGreen text-spaceYaTech_white">Continue</button>
                            </div>
                            <div></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;