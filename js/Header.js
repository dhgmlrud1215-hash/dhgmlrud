function Header() {
    const {Link} = window.ReactRouterDOM;

    return(
            <header id="header">
                <h1 className="logo">
                    <Link to="/">
                        <img src="img/header/ci-shinhan-pc.png" alt="로고" />
                    </Link>
                </h1>

                <div className="customer-type">
                    <ul className="list">
                        <li>개인</li>
                        <li>법인</li>
                        <li>가맹점</li>
                    </ul>
                </div>

                <div className="header-right">
                    <button type="button" className="search" aria-label="검색 열기">
                        <svg 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-search-icon lucide-search">
                            <path d="m21 21-4.34-4.34"/>
                            <circle cx="11" cy="11" r="8"/>
                        </svg>
                    </button>
        
                    <p className="login">로그인</p>
                </div>
            </header>
    );
}
window.Header = Header;