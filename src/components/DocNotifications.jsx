const DocNotifications = () => {
    return ( 
        <div className="doc-notifications">
            <div className="doc-details">
                <h1 id="docName">Jacob Jones</h1>
                <p id="docId">8736452300</p>
            </div>
            <div className="notification-preview">
                <svg 
                    width="25" height="35" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_268_5432)">
                    <path d="M32.8508 28.1402L32.5108 27.8402C31.5462 26.9808 30.7019 25.9952 30.0008 24.9102C29.235 23.4127 28.776 21.7774 28.6508 20.1002V15.1602C28.6574 12.5258 27.7018 9.97963 25.9635 8.00013C24.2252 6.02063 21.8239 4.74402 19.2108 4.41016V3.12016C19.2108 2.76609 19.0701 2.42653 18.8198 2.17617C18.5694 1.92581 18.2298 1.78516 17.8758 1.78516C17.5217 1.78516 17.1822 1.92581 16.9318 2.17617C16.6814 2.42653 16.5408 2.76609 16.5408 3.12016V4.43016C13.951 4.78808 11.5788 6.07241 9.86331 8.04526C8.14787 10.0181 7.20551 12.5458 7.21078 15.1602V20.1002C7.08554 21.7774 6.62656 23.4127 5.86078 24.9102C5.17166 25.9925 4.34098 26.9779 3.39078 27.8402L3.05078 28.1402V30.9602H32.8508V28.1402Z" fill="#7EB36A"/>
                    <path d="M15.3203 32.0098C15.408 32.6436 15.7221 33.2244 16.2046 33.6447C16.6871 34.0651 17.3054 34.2966 17.9453 34.2966C18.5852 34.2966 19.2035 34.0651 19.686 33.6447C20.1685 33.2244 20.4826 32.6436 20.5703 32.0098H15.3203Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_268_5432">
                    <rect width="36" height="36" fill="white" transform="translate(0 0.00976562)"/>
                    </clipPath>
                    </defs>
                </svg>
                <p className="notification-message">You have a new appointment with <span id="patientName">Topins Poppins</span>(<span id="patientId">87364523TP</span>) scheduled for <span id="bookingDate">13th August, 2023</span>, 10:00am.</p>
            </div>
        </div>
     );
}
 
export default DocNotifications;