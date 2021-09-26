import React, { useState, useEffect }from 'react';
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-international';
import {signInWithEmail} from '~/store/auth/actions';
import {authSelector} from '~/store/auth/selectors';
import {requiredLoginSelector} from '~/store/common/selectors';

const LoginPage = () => {

    const [value, setValue] = useState('');
    const [userInfo, setUserInfo] = React.useState({ 
        user: null,
        phone_number: '',
        country_no: '',
        country_code: '',
        visibleModal: false,
        loading: false,
        error: {
            message: null,
            errors: null,
        },
        confirmResult: null,
    });

    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'login',
        },
    ];
    return (
        <ContainerPage title="Login">
            <div className="ps-page--default">
                <div className="container">
                    <div className="ps-page__content">
                        <div className="row ps-form--auth">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 sign-in">
                                <form
                                    className=""
                                    action="/auth/login"
                                    method="get">
                                    <h3 className="pb-3">Sign in</h3>
                                    <div className="ps-form__content">
                                        <div className="form-group">
                                            <PhoneInput
                                                inputProps={{
                                                    name: 'phoneNumber',
                                                    required: true,
                                                    
                                                }}
                                                country={'in'}
                                                autoComplete={'on'}
                                                searchPlaceholder={'Search'}
                                                disableSearchIcon={true}
                                                preferredCountries={['in', 'us']}
                                                countryCodeEditable={false}
                                                enableSearch={true}
                                                value={value}
                                                onChange={setValue}/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Password"
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                            <div className="ps-checkbox">
                                                <input
                                                    className="form-control"
                                                    type="checkbox"
                                                    id="remember/"
                                                    name="remember"
                                                />
                                                <label htmlFor="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div> */}
                                        <div className="form-group submit">
                                            <button className="ps-btn ps-btn--fullwidth ps-btn--black">
                                                SECURE SIGN IN
                                            </button>
                                        </div>
                                        <p>
                                            <span className="mb-10">Connect with</span>
                                        </p>
                                        <ul className="ps-list--social">
                                            <li>
                                                <a className="facebook" href="#">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="google-plus" href="#">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="twitter" href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                            <div className="vertical-divider d-none d-md-block"></div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 create-account">
                                <h3 className="pb-3">Create an Account</h3>
                                <p className="">Register with Aasaan to enjoy personalized services, including:</p>
                                <ul className="font-size-light">
                                    <li>Online Order Status</li>
                                    <li>Exclusive Emails</li>
                                    <li>Save Shipping Addresses</li>
                                    <li>Checkout Preferences</li>
                                </ul>
                                <button className="ps-btn ps-btn--fullwidth ps-btn--outline mx-auto">
                                    CREATE AN ACCOUNT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

const mapStateToProps = state => {
    return {
      auth: authSelector(state),
      requiredLogin: requiredLoginSelector(state),
    };
};

export default connect(mapStateToProps)(withTranslation()(LoginPage));
