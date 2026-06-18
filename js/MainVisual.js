function MainVisual() {
    const [index, setIndex] = React.useState(0);

    const images = [
        "img/header/mainvn1.png",
        "img/header/mainvn2.png",
        "img/header/mainvn3.png"
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

            <aside className="login-box" aria-label="로그인 및 주요 서비스">
            <h3>안녕하세요</h3>
            <p>신한카드 회원 서비스를 이용해보세요.</p>

            <a href="#" className="login-btn">로그인</a>

            <div className="login-links">
                <a href="#">아이디 찾기</a>
                <span>|</span>
                <a href="#">비밀번호 재설정</a>
                <span>|</span>
                <a href="#">회원가입</a>
            </div>

            <div className="mini-menu">
                <a href="#">결제예정금액</a>
                <a href="#">이용대금</a>
                <a href="#">포인트조회</a>
                <a href="#">즉시결제</a>
            </div>

            <div className="login-notice">
                <strong>진행중 이벤트</strong>
                <a href="#">혜택 이벤트 확인하기 →</a>
                <p>6월 캐시백 이벤트</p>
            </div>
        </aside>
        </section>
    );
}