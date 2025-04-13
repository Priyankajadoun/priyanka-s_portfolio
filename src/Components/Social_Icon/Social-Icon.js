import React from 'react';
import "./Social-Icon.css"

function SocialIcon() {
    return (
        <>
            <div className='soialIcon'>
                {/* <ul className="horizontal-list text-center social-icons"> */}
                <ul className="horizontal-list text-center contact-social-icon">
                    <li>
                        <a href="https://www.linkedin.com/in/km-priyanka-0a11711bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                        target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/9068057526"
                        target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/repriyanka2022?igsh=MW1oc3Njdjl3aTUxbQ=="
                        target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=jadounpriyanka1@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                    </li>


                    <li>
                        <a href="https://www.facebook.com/share/196hPjfe9a/"
                        target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    {/* <li>
                                <a href="https://github.com/Priyankajadoun">
                                <i class="fa-brands fa-github"></i>
                                </a>
                            </li> */}
                </ul>

            </div>
        </>
    )
}

export default SocialIcon;
