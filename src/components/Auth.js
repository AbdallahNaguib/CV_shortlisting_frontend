import ScriptTag from 'react-script-tag';


const Auth = ({isLogin}) => {
    return (
        <html lang="en">
        <head>
            <ScriptTag type="text/javascript" src="assets/js/main.js"/>
            <title>{isLogin ? "Login" : "Register"}</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

        </head>
        <body>

        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt">
                        <img src="assets/images/img-01.png" alt="IMG"/>
                    </div>

                    <form className="login100-form validate-form">
					<span className="login100-form-title">
						Member {isLogin ? "Login" : "Register"}
					</span>

                        <div className="wrap-input100 validate-input"
                             data-validate="Username is required">
                            <input className="input100" type="text" name="username" placeholder="Username"/>
                            <span className="focus-input100"/>
                            <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"/>
						</span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="pass" placeholder="Password"/>
                            <span className="focus-input100"/>
                            <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"/>
						</span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                {isLogin ? "Login" : "Register"}
                            </button>
                        </div>

                        {isLogin &&
                            <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot
                            </span>
                                <a className="txt2" href="#">
                                    Username / Password?
                                </a>
                            </div>
                        }

                        <div className="text-center p-t-136">
                            <a className="txt2" href="#">
                                {isLogin ? "Create your Account":"Login"}
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"/>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        </body>
        </html>
    )
}
export default Auth