import * as React from 'react';
import "./signInComponent.css"

// @ts-ignore
import image from "../assets/appLogo.png";
import {FcGoogle} from "@react-icons/all-files/fc/FcGoogle";
import {FaFacebookF} from "@react-icons/all-files/fa/FaFacebookF";
import {BsEyeSlash} from "@react-icons/all-files/bs/BsEyeSlash";


const SignInComponent = () => {
    return (
        <div className="container">
            <div className="leftSide">
                <img className="logoApp" src={image}/>
            </div>
            <div className="rightSide">
                <div className="buttonsBody">
                    <h1 className="firstText"> Login to Space Ya tech</h1>

                    <div>
                        <form className="inputsP">
                            <div className="username">
                                <label>
                                    <input className="sign-inInputs" type="text" name="name"
                                           placeholder="Username Or Email address"/>
                                </label>
                            </div>
                            <div className="password">
                                <label className="passwordParent">
                                    <div className="eyeIcon">
                                        <BsEyeSlash/>
                                    </div>
                                    <input className="sign-inInputs" type="text" name="name" placeholder="Password"/>
                                </label>
                            </div>
                        </form>
                        <div>
                            <button className="loginButton">Login</button>
                            <div className="underLoginText">
                                <div className="signUp">New Here? Sign up</div>
                                <span className="forgotPassword">Forgot Password?</span>
                            </div>
                            <div className="horizontalLine">
                                <hr/>
                                <div className="textBackground">OR</div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button className="loginIcon loginGoogle">
                            <span className="googleLogo"><FcGoogle/></span>
                            Login with Google
                        </button>
                    </div>
                    <div>
                        <button className="loginIcon loginFacebook"><span className="fbLogo"><FaFacebookF/></span>
                            Login with Facebook
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default SignInComponent