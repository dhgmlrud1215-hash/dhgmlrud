function Header() {
    const {Link} = window.ReactRouterDOM;
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);

    return(
        <header className="site-header">
             <div id="header">
                <div className="header-left">
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
                </div>

                <Navi />

                <div className="header-right">
                    <button 
                    type="button" 
                    className="search" 
                    aria-label="검색 열기"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
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
                </div>
            </div>

            {isSearchOpen && (
    <div className="search-panel">
        <div className="search-box">
            <input
                type="text"
                placeholder="카드명, 혜택, 이용대금 검색"
            />
        </div>

        <div className="search-keyword">
            <h4>추천 검색어</h4>
            <ul>
                <li>#이용대금</li>
                <li>#포인트</li>
                <li>#분실신고</li>
                <li>#카드추천</li>
            </ul>
        </div>

        <div className="search-service">
            <h4>자주 찾는 업무</h4>
            <ul>
                <li>이용내역</li>
                <li>즉시결제</li>
                <li>한도조회</li>
                <li>명세서</li>
            </ul>
        </div>
    </div>
)}
        </header>
    );
}
window.Header = Header;