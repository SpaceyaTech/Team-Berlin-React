import React from "react";
import './forgotPassword.css';
import spaceYaTechLogo from './spaceYaTechLogo.svg';

/**
 * Page that allows user to reset password
 * fp - stands for forgot password
 */
function ForgotPassword(){
    return (
        <div className="fp__whole__page">
            <div className="fp__left__side">
                <div className="fp__logo__area">
                    <img src={spaceYaTechLogo} className="fp__logo"/>
                </div>
            </div>
            <div className="fp__right__side">
                <div className="fp__content__area">
                    <div className="fp__reset__password__area">
                        <div className="fp__reset__password__text">
                            Please Reset Password
                        </div>
                    </div>
                    <div>
                        <form>
                            <div>
                                <div className="fp__form" id="fp__password__field">
                                    <input className="fp__input__field" type="password" placeholder="Password"/>
                                </div>
                                <div className="fp__form" id="fp__confirm__password__field">
                                    <input className="fp__input__field" type="password" placeholder="Confirm Password"/>
                                </div>
                            </div>
                            <div className="fp__form">
                                <button className="fp__continue">Continue</button>
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