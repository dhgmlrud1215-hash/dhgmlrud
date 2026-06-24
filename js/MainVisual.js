function MainVisual() {
        const { Link } = ReactRouterDOM;
        const [index, setIndex] = React.useState(0);

        const [isLogin, setIsLogin] = React.useState(
        localStorage.getItem("isLogin") === "true"
        );

        const userName = localStorage.getItem("userName");

        const handleLogout = () => {
        localStorage.removeItem("isLogin");
        localStorage.removeItem("userName");
        setIsLogin(false);

        alert("로그아웃 되었습니다.")
        };

        const images = [
            "img/header/mainvn1-fixed.png",
            "img/header/mainvn2-fixed.png",
            "img/header/mainvn3-fixed.png"
        ];

        React.useEffect(() => {
            const timer = setInterval(() => {
                setIndex(prev => (prev + 1) % images.length);
            }, 3000);

            return () => clearInterval(timer);
        }, []);



    return (
        <section className="main-visual">
            <div className="banner" role="region" aria-label="메인 프로모션 배너">
                <img src={images[index]} alt="메인 배너" />
            </div>

            <aside className="login-area" aria-label="로그인 및 주요 서비스">
                <div className="login-card">
                    <h3>{isLogin ? userName : "안녕하세요"}</h3>

                    <p>
                        {isLogin
                        ? "신한카드 회원 서비스를 이용 중입니다."
                        : "신한카드 회원 서비스를 이용해보세요."}
                    </p>

                    {isLogin ? (
                        <button className="login-btn" onClick={handleLogout}>
                        로그아웃
                        </button>
                    ) : (
                        <Link to="/login" className="login-btn">
                        로그인
                        </Link>
                    )}

                    {!isLogin && (
                        <div className="login-links">
                        <a href="#">아이디 찾기</a>
                        <span>|</span>
                        <a href="#">비밀번호 재설정</a>
                        <span>|</span>
                        <a href="#">회원가입</a>
                        </div>
                    )}
                </div>

                <div className="quick-card">
                    <div className="quick-title">
                        <strong>자주 찾는 서비스</strong>
                    </div>

                    <div className="mini-menu">
                        <a href="#">결제예정금액</a>
                        <a href="#">이용대금</a>
                        <a href="#">포인트조회</a>
                        <a href="#">즉시결제</a>
                        <a href="#">카드 이용내역</a>
                        <a href="#" className="cs-link">상담문의</a>
                    </div>
                </div>

                <div className="alert-card">
                    <div className="alert-title">
                        <img src="img/header/sos.svg" alt="" />
                        <strong>금융소비자 주의경보</strong>
                    </div>
                    <p>개인명의 사칭 및 보이스피싱에 유의하세요.</p>
                </div>
            </aside>
        </section>
    );
}
