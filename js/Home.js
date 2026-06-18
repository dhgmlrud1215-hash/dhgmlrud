
function Home() {

    const [index, setIndex] = React.useState(0);
    const images = [
        "img/header/mainvn1.png",
        "img/header/mainvn2.png",
        "img/header/mainvn3.png"
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev +1) % images.length);
        },3000);

        return () => clearInterval(timer);
    },[]);

    
    const popularRef = React.useRef(null);

    React.useEffect(() => {
        const slider = popularRef.current;
        if(!slider) return;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const handleMouseDown = (e) => {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX;
            scrollLeft = slider.scrollLeft;
        };

        const handleMouseUp = () => {
            isDown = false;
            slider.classList.remove("active");
        };

        const handleMouseLeave = () => {
            isDown = false;
            slider.classList.remove("active");
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();

            const walk = (e.pageX - startX) * 1.5;
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener("mousedown", handleMouseDown);
        slider.addEventListener("mousemove", handleMouseMove);
        slider.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            slider.removeEventListener("mousedown", handleMouseDown);
            slider.removeEventListener("mousemove", handleMouseMove);
            slider.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseup", handleMouseUp);
            };
    },[]);


    const[eventIndex, setEventIndex] = React.useState(0);
    const eventmax = 1;
    const nextEvent = () => {
        setEventIndex(prev => prev >= eventmax ? 0 : prev +1);
    };
    const prevEvent = () => {
        setEventIndex(prev => prev <= 0 ? eventmax : prev -1);
    };


    const[benefitIndex, setBenefitIndex] = React.useState(0);
    const[activeTab, setActiveTab] = React.useState(null);


    return(
        <>
    <MainVisual />

    <section className="category" aria-label="혜택 카테고리">
        <h3>혜택 카테고리</h3>

        <ul role="tablist">
            <li 
            data-target="shopping"
            className={activeTab == "shopping" ? "active" : ""}
            onClick = {() => setActiveTab(activeTab === "shopping" ? null : "shopping")} 
            role="tab" 
            tabIndex="0" 
            aria-selected={activeTab === "shopping"}
            aria-controls="shopping">
                <img src="img/cate/shopping-bag.svg" alt=""/>
                <p>쇼핑</p>
            </li>

            <li 
            data-target="transport"
            className={activeTab == "transport" ? "active" : ""}
            onClick={() => setActiveTab(activeTab === "transport" ? null : "transport")} 
            role="tab" 
            tabIndex="0" 
            aria-selected={activeTab === "transport"} 
            aria-controls="transport"
            >
                <img src="img/cate/bus.svg" alt=""/>
                <p>교통</p>
            </li>

            <li 
            data-target="travel"
            className={activeTab == "travel" ? "active" : ""}
            onClick={() => setActiveTab(activeTab === "travel" ? null : "travel")} 
            role="tab" 
            tabIndex="0" 
            aria-selected={activeTab === "travel"} 
            aria-controls="travel"
            > 
                <img src="img/cate/plane.svg" alt=""/>
                <p>여행</p>
            </li>

            <li 
            data-target="coffee"
            className={activeTab == "coffee" ? "active" : ""}
            onClick={() => setActiveTab(activeTab === "coffee" ? null : "coffee")}  
            role="tab" 
            tabIndex="0" 
            aria-selected={activeTab === "coffee"}
            aria-controls="coffee"
            >
                <img src="img/cate/coffee.svg" alt=""/>
                <p>배달·커피</p>
            </li>

            <li 
            data-target="ott"
            className={activeTab == "ott" ? "active" : ""}
            onClick={() => setActiveTab(activeTab === "ott" ? null : "ott")}  
            role="tab" 
            tabIndex="0" 
            aria-selected={activeTab === "ott"}
            aria-controls="ott"
            >
                <img src="img/cate/tv-minimal-play.svg" alt=""/>
                <p>구독·OTT</p>
            </li>

            <li 
            data-target="fuel"
            className={activeTab == "fuel" ? "active" : ""}
            onClick={() => setActiveTab(activeTab === "fuel" ? null : "fuel")}  
            role="tab" 
            tabIndex="0" 
            aria-selected={activeTab === "fuel"} 
            aria-controls="fuel"
            >
                <img src="img/cate/fuel.svg" alt=""/>
                <p>주유</p>
            </li>

            <li 
            data-target="dining"
            className={activeTab == "dining" ? "active" : ""}
            onClick={() => setActiveTab(activeTab === "dining" ? null : "dining")}   
            role="tab" 
            tabIndex="0" 
            aria-selected={activeTab === "dining"}  
            aria-controls="dining"
            >
                <img src="img/cate/utensils.svg" alt=""/>
                <p>외식</p>
            </li>

            <li 
            data-target="living"
            className={activeTab == "living" ? "active" : ""}
            onClick={() => setActiveTab(activeTab === "living" ? null : "living")}   
            role="tab" 
            tabIndex="0" 
            aria-selected={activeTab === "living"}  
            aria-controls="living"
            >
                <img src="img/cate/house.svg" alt=""/>
                <p>생활·편리</p>
            </li>

            <li 
            data-target="education"
            className={activeTab == "education" ? "active" : ""}
            onClick={() => setActiveTab(activeTab === "education" ? null : "education")} 
            role="tab" 
            tabIndex="0" 
            aria-selected={activeTab === "education"}  
            aria-controls="education"
            >
                <img src="img/cate/graduation-cap.svg" alt=""/>
                <p>교육</p>
            </li>

            <li 
            data-target="culture"
            className={activeTab == "culture" ? "active" : ""}
            onClick={() => setActiveTab(activeTab === "culture" ? null : "culture")} 
            role="tab" 
            tabIndex="0" 
            aria-selected={activeTab === "culture"}
            aria-controls="culture"
            >
                <img src="img/cate/clapperboard.svg" alt=""/>
                <p>영화·문화</p>
            </li>
        </ul>
    </section>

    <div className="benefit-wrap">
      <div className={`benefit-content ${activeTab === "shopping" ? "active" : ""}`} id="shopping" role="tabpanel" aria-hidden="true">

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/shopping-card/shopping.png" alt="신한카드 shopping 카드 이미지"/>
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 Shopping
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">쇼핑</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">생활</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">해외이용</strong>
                        <span className="benefit-value">5% 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Shopping 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Shopping 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/shopping-card/first.gif" alt="신한카드 처음 체크 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 처음 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">스터디</strong>
                        <span className="benefit-value">5% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">카페·편의점·푸드</strong>
                        <span className="benefit-value">5~7% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">사진/쇼핑</strong>
                        <span className="benefit-value">1천/3천 포인트 적립</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 처음 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 처음 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/shopping-card/first-check(chunbae).gif" alt="신한카드 처음 체크(춘배) 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 처음 체크(냐한남자)
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">스터디</strong>
                        <span className="benefit-value">5% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">카페·편의점·푸드</strong>
                        <span className="benefit-value">5~7% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">사진/쇼핑</strong>
                        <span className="benefit-value">1천/3천 포인트 적립</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 처음 체크(냐한남자) 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 처음 체크(냐한남자) 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/shopping-card/discount plan.png" alt="신한카드 discount plan 카드 이미지"/>
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 Discount Plan
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">외식·배달·편의점</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">쇼핑·주유·생활</strong>
                        <span className="benefit-value">5~10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">장보기</strong>
                        <span className="benefit-value">3만원 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Discount Plan 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Discount Plan 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/shopping-card/discount plan+.png" alt="신한카드 discount plan+ 카드 이미지"/>
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 Discount Plan+
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">외식·배달·편의점</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">쇼핑·주유·생활</strong>
                        <span className="benefit-value">5~10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">장보기</strong>
                        <span className="benefit-value">3만원 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Discount Plan+ 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Discount Plan+ 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-more">
                <a href="#" aria-label="쇼핑 카드 더보기">
                    <span  aria-hidden="true">+</span>
                </a>
            </div>
        </div> 

      <div className={`benefit-content ${activeTab === "transport" ? "active" : ""}`} id="transport" role="tabpanel" aria-hidden="true">
           <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/trasport-card/알뜰.gif" alt="알뜰교통 신한카드 카드 이미지"/>
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    알뜰교통 신한카드
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">대중교통</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">편의점·병원</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">커피전문점</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                   <a href="#" className="btn-detail" aria-label="알뜰교통 신한카드 상세보기">상세보기</a>
                   <a href="#" className="btn-apply" aria-label="알뜰교통 신한카드 카드신청">카드신청</a>
                </div>
              </div> 
            </div> 
            
            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/trasport-card/deep dream.png" alt="기본교통 deep dream 체크 카드 이미지"/>
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    기본교통 Deep Dream체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">전월실적·한도없이</strong>
                        <span className="benefit-value">포인트적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">주유적립</strong>
                        <span className="benefit-value">택시할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">신한금융그룹</strong>
                        <span className="benefit-value">수수료 우대</span>
                    </li>
                </ul>

                <div className="card-buttons">
                   <a href="#" className="btn-detail" aria-label="기본교통 Deep Dream체크 상세보기">상세보기</a>
                   <a href="#" className="btn-apply" aria-label="기본교통 Deep Dream체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div> 

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/trasport-card/s20.gif" alt="알뜰교통 신한카드 S20 체크 카드 이미지"/>
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    알뜰교통 신한카드 S20 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">대중교통</strong>
                        <span className="benefit-value">마일리지적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">생활편의</strong>
                        <span className="benefit-value">캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">도서·어학·요식</strong>
                        <span className="benefit-value">캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="알뜰교통 신한카드 S20 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="알뜰교통 신한카드 S20 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div> 

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/trasport-card/sol.png" alt="신한카드 SOL글로벌 체크 카드 이미지"/>
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 SOL글로벌 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">교통·통신</strong>
                        <span className="benefit-value">10% 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">마트·음식점</strong>
                        <span className="benefit-value">10% 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">병원·약국</strong>
                        <span className="benefit-value">10% 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 SOL글로벌 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 SOL글로벌 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>
            
            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/trasport-card/k-pass.png" alt="K-패스 신한카드 카드 이미지"/>
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    K-패스 신한카드
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">대중교통</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">간편결제</strong>
                        <span className="benefit-value">5%할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">생활 부문</strong>
                        <span className="benefit-value">5% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="K-패스 신한카드 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label=" K-패스 신한카드 카드신청">카드신청</a>
                </div>
              </div> 
            </div>
            <div className="card-more">
                <a href="#" aria-label="교통 카드 더보기">
                    <span aria-hidden="true">+</span>
                </a>
            </div>
      </div> 
       <div className={`benefit-content ${activeTab === "travel" ? "active" : ""}`} id="travel" role="tabpanel" aria-hidden="true">

        <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/traval/sol.gif" alt="신한카드 SOL트래블 체크 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 SOL트래블 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">해외이용수수료</strong>
                        <span className="benefit-value">면제</span>
                    </li>

                    <li>
                        <strong className="benefit-name">더라운지</strong>
                        <span className="benefit-value">본인무료입장</span>
                    </li>

                    <li>
                        <strong className="benefit-name">해외 대중교통</strong>
                        <span className="benefit-value">1% 결제일 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 SOL트래블 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 SOL트래블 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/traval/solj.gif" alt="신한카드 SOL트래블J 체크 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 SOL트래블J 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">해외이용수수료</strong>
                        <span className="benefit-value">면제</span>
                    </li>

                    <li>
                        <strong className="benefit-name">돈키호테</strong>
                        <span className="benefit-value">50% 결제일 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">일본3개편의점</strong>
                        <span className="benefit-value">5% 결제일 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 SOL트래블J 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 SOL트래블J 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/traval/sol2.gif" alt="신한카드 SOL트래블 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 SOL트래블
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">해외이용ATM</strong>
                        <span className="benefit-value">면제</span>
                    </li>

                    <li>
                        <strong className="benefit-name">해외결제</strong>
                        <span className="benefit-value">환율 100% 우대</span>
                    </li>

                    <li>
                        <strong className="benefit-name">국내 이용금액</strong>
                        <span className="benefit-value">최대 12% 적립</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 SOL트래블 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 SOL트래블 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/traval/global+.gif" alt="신한카드 Global+ 체크(월리) 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 Global+ 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">국내 전가맹점</strong>
                        <span className="benefit-value">0.2% 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">대중교통</strong>
                        <span className="benefit-value">2% 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">해외 전가맹점</strong>
                        <span className="benefit-value">1.2% 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Global+ 체크(월리) 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Global+ 체크(월리) 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/traval/global+check.png" alt="신한카드 Global + 체크 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 Global+ 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">국내 전가맹점</strong>
                        <span className="benefit-value">0.2% 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">대중교통</strong>
                        <span className="benefit-value">2% 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">해외 전가맹점</strong>
                        <span className="benefit-value">1.2% 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Global+ 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Global+ 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-more">
                <a href="#" aria-label="여행 카드 더보기">
                    <span  aria-hidden="true">+</span>
                </a>
            </div>
       </div>

       <div className={`benefit-content ${activeTab === "coffee" ? "active" : ""}`} id="coffee" role="tabpanel" aria-hidden="true">

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/dc/배민.png" alt="배민 신한카드 밥찬구 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    배민 신한카드 밥찬구
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">배민 할인</strong>
                        <span className="benefit-value">5% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">배민 외 가맹점 할인</strong>
                        <span className="benefit-value">1% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="배민 신한카드 밥찬구 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label=" 배민 신한카드 밥찬구 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/dc/우주.png" alt="New T 우주 신한카드 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    New T 우주 신한카드
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">T우주 월 구독</strong>
                        <span className="benefit-value">최대 18,900원</span>
                    </li>

                    <li>
                        <strong className="benefit-name">배달앱</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">생활편의 가맹점</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="New T 우주 신한카드 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="New T 우주 신한카드 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/dc/짱구.png" alt="신한카드 Point Plan 체크(짱구) 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 Point Plan 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">일상생활비</strong>
                        <span className="benefit-value">0.2~1% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">주말 배달앱</strong>
                        <span className="benefit-value">포인트 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">편의점</strong>
                        <span className="benefit-value">포인트 적립</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Point Plan 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Point Plan 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/dc/가비지.gif" alt="신한카드 Pick E 체크 캐릭터형(가비지) 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 Pick E 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">편의점·커피</strong>
                        <span className="benefit-value">10% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">놀이영역</strong>
                        <span className="benefit-value">10% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">One Pick 맛집</strong>
                        <span className="benefit-value">3천 포인트 적립</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Pick E 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Pick E 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/dc/하리보.png" alt="신한카드 Pick E 체크 캐릭터형(하리보) 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 Pick E 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">편의점·커피</strong>
                        <span className="benefit-value">10% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">놀이영역</strong>
                        <span className="benefit-value">10% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">One Pick 맛집</strong>
                        <span className="benefit-value">3천 포인트 적립</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Pick E 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Pick E 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>
            <div className="card-more">
                <a href="#" aria-label="배달·커피 카드 더보기">
                    <span  aria-hidden="true">+</span>
                </a>
            </div>
       </div> 

        <div className={`benefit-content ${activeTab === "ott" ? "active" : ""}`} id="ott" role="tabpanel" aria-hidden="true">

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/ott/pointplan+.gif" alt="신한카드 Point Plan+ 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    신한카드 Point Plan+
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">일상생활비</strong>
                        <span className="benefit-value">0.7~3% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">주말 외식비</strong>
                        <span className="benefit-value">최대 5천 포인트 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">공과금·통신·OTT</strong>
                        <span className="benefit-value">최대 1.2만P 적립</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Point Plan+ 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Point Plan+ 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/ott/요기패스.png" alt="요기패스 신한카드 체크 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                    요기패스 신한카드 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">요기패스</strong>
                        <span className="benefit-value">최대 4천원 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">요기요 서비스</strong>
                        <span className="benefit-value">건당 1천원 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">OTT 정기 결제</strong>
                        <span className="benefit-value">건당 1천원 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="요기패스 신한카드 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="요기패스 신한카드 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/ott/국민행복.png" alt="신한카드 국민행복 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                   신한카드 국민행복
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">학원·인터넷서점</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">밀딜리버리</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">OTT</strong>
                        <span className="benefit-value">50% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 국민행복 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 국민행복 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/ott/sol plan.gif" alt="신한카드 SOL Plan 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                   신한카드 SOL Plan
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">주유·쇼핑·배달</strong>
                        <span className="benefit-value">최대 5% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">OTT·멤버십</strong>
                        <span className="benefit-value">최대 1만 5천원 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">포인트 박스</strong>
                        <span className="benefit-value">10% 추가 입금</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 SOL Plan 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 SOL Plan 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/ott/봄.gif" alt="신한카드 봄 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                   신한카드 봄
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">국내외 가맹점</strong>
                        <span className="benefit-value">최대 0.5% 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">대붕교통</strong>
                        <span className="benefit-value">일 최대 200원 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">디지털 구독</strong>
                        <span className="benefit-value">최대 1만원 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 봄 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 봄 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-more">
                <a href="#" aria-label="ott 카드 더보기">
                    <span  aria-hidden="true">+</span>
                </a>
            </div>
        </div>

        <div className={`benefit-content ${activeTab === "fuel" ? "active" : ""}`} id="fuel" role="tabpanel" aria-hidden="true">

             <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/fuel/deep oil.gif" alt="신한카드 Deep Oil 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                   신한카드 Deep Oil
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">직접고른 주유소</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">정비소·주차장</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">편의점·커피·택시</strong>
                        <span className="benefit-value">5% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Deep Oil 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Deep Oil 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/fuel/deepdream.png" alt="신한카드 Deep Dream(모베러웍스) 카드 이미지" /> 
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                   신한카드 Deep Dream
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">전월실적 한도없이</strong>
                        <span className="benefit-value">포인트 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">주유적립</strong>
                        <span className="benefit-value">택시할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">신한 금융그룹</strong>
                        <span className="benefit-value">수수료 우대</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Deep Dream 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Deep Dream 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/fuel/mrlife.png" alt="신한카드 Mr.Life 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                   신한카드 Mr.Life
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">월납요금</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">Time</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">주말 주유소</strong>
                        <span className="benefit-value">60원/ℓ 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Mr.Life 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Mr.Life 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/fuel/mycar.png" alt="신한카드 MY CAR 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                   신한카드 MY CAR
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">자동차 신용결제</strong>
                        <span className="benefit-value">0.2% 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">오토금융</strong>
                        <span className="benefit-value">최대 4만원 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">주유·충전·전기차</strong>
                        <span className="benefit-value">월 최대 1만원 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 MY CAR 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 MY CAR 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/fuel/simpleplan.png" alt="신한카드 Simple Plan+ 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Simple Plan+
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">실적·한도 없이</strong>
                        <span className="benefit-value">국내 1.5% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">실적·한도 없이</strong>
                        <span className="benefit-value">해외 2% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">마트·병원·주유</strong>
                        <span className="benefit-value">3만원 웰컴 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Simple Plan+ 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Simple Plan+ 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-more">
                <a href="#" aria-label="주유 카드 더보기">
                    <span  aria-hidden="true">+</span>
                </a>
            </div>
        </div>

        <div className={`benefit-content ${activeTab === "dining" ? "active" : ""}`} id="dining" role="tabpanel" aria-hidden="true">
             <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/eat/pointplan+.gif" alt="신한카드 Point Plan+ 카드 이미지"/>
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Point Plan+
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">일상 생활비</strong>
                        <span className="benefit-value">0.7~3% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">주말 외식비</strong>
                        <span className="benefit-value">최대 5천 포인트 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">공과금·통신·OTT</strong>
                        <span className="benefit-value">최대 1만2천P 적립</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Point Plan+ 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Point Plan+ 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/eat/pointplan.gif" alt="신한카드 Point Plan 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Point Plan
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">일상 생활비</strong>
                        <span className="benefit-value">0.5~3% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">주말 외식비</strong>
                        <span className="benefit-value">포인트 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">정기결제 자동납부</strong>
                        <span className="benefit-value">포인트 적립</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Point Plan 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Point Plan 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/eat/discount.png" alt="신한카드 Discount Plan 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Discount Plan
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">외식·배달·편의점</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">쇼핑·주유·생활</strong>
                        <span className="benefit-value">5~10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">공과금·디지털구독</strong>
                        <span className="benefit-value">10~20% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                   <a href="#" className="btn-detail" aria-label="신한카드 Discount Plan 상세보기">상세보기</a>
                   <a href="#" className="btn-apply" aria-label="신한카드 Discount Plan 카드신청">카드신청</a>
                </div>
              </div>
            </div> 

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/eat/discount+.png" alt="신한카드 Discount Plan+ 카드 이미지"/>
                </div>

              <div className="card-info"> 
                    <h4 className="card-title">
                    신한카드 Discount Plan+
                    </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">외식·배달·편의점</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">쇼핑·주유·생활</strong>
                        <span className="benefit-value">5~10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">장보기</strong>
                        <span className="benefit-value">3만원 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Discount Plan+ 상세보기">상세보기</a>
                   <a href="#" className="btn-apply" aria-label="신한카드 Discount Plan+ 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/eat/020.png" alt="신한카드 O2O 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 O2O
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">신한 SOL페이</strong>
                        <span className="benefit-value">3% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">외식·마트</strong>
                        <span className="benefit-value">2~5% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">통신요금</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 O2O 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 O2O 카드신청">카드신청</a>
                </div>
              </div> 
            </div>
            <div className="card-more">
                <a href="#" aria-label="외식 카드 더보기">
                    <span  aria-hidden="true">+</span>
                </a>
            </div>   
        </div> 
       <div className={`benefit-content ${activeTab === "living" ? "active" : ""}`} id="living" role="tabpanel" aria-hidden="true">

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/conven/hey young.png" alt="신한카드 Hey Young 체크(먼작귀) 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Hey Young 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">생활서비스</strong>
                        <span className="benefit-value">최대 5천원 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">간편결제서비스</strong>
                        <span className="benefit-value">최대 5천원 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">해외이용서비스</strong>
                        <span className="benefit-value">1.2% 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Hey Young 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Hey Young 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/conven/on.gif" alt="신한카드 On 체크(잔망루피) 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 On 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">간편결제</strong>
                        <span className="benefit-value">최대 2% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">생활편의</strong>
                        <span className="benefit-value">최대 2% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">해외 이용금액</strong>
                        <span className="benefit-value">1.3% 적립</span>
                    </li>
                </ul>

                <div class="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 On 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 On 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/conven/처음.gif" alt="신한카드 처음 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 처음
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">음식·생활·패션</strong>
                        <span className="benefit-value">5% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">통신·구독·멤버십</strong>
                        <span className="benefit-value">최대 20% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">소비관리 보너스</strong>
                        <span className="benefit-value">매월 최대 1만P</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 처음 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 처음 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/conven/discount plan.png" alt="신한카드 Discount Plan 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Discount Plan
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">외식·배달·편의점</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">쇼핑·주유·생활</strong>
                        <span className="benefit-value">5~10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">공과금·디지털구독</strong>
                        <span className="benefit-value">10~20% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Discount Plan 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Discount Plan 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/conven/discount plan+.png" alt="신한카드 Discount Plan+ 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Discount Plan+
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">외식·배달·편의점</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">쇼핑·주유·생활</strong>
                        <span className="benefit-value">5~10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">장보기</strong>
                        <span className="benefit-value">3만원 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Discount Plan+ 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Discount Plan+ 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-more">
                <a href="#" aria-label="생활·관리 카드 더보기">
                    <span aria-hidden="true">+</span>
                </a>
            </div>  
       </div>
       <div className={`benefit-content ${activeTab === "education" ? "active" : ""}`} id="education" role="tabpanel" aria-hidden="true">

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/edu/교원.png" alt="교원 교육 신한카드 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                교원 교육 신한카드
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">결제일 할인</strong>
                        <span className="benefit-value">최대 2만원</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="교원 교육 신한카드 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="교원 교육 신한카드 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/edu/eduplan.gif" alt="신한카드 Edu Plan+ 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Edu Plan+
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">학원비 캐시백</strong>
                        <span className="benefit-value">월 최대 10만원</span>
                    </li>

                    <li>
                        <strong className="benefit-name">의료·정기결제</strong>
                        <span className="benefit-value">캐시백 월 최대 4천원</span>
                    </li>

                    <li>
                        <strong className="benefit-name">메가박스 영화 할인</strong>
                        <span className="benefit-value">월 7천원</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Edu Plan+ 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Edu Plan+ 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

             <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/edu/lesson.png" alt="신한카드 Lesson Platinum# 카드 이미지"/>
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Lesson Platinum#
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">학원 교육</strong>
                        <span className="benefit-value">5% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">체험/활동학습</strong>
                        <span className="benefit-value">5% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">서적</strong>
                        <span className="benefit-value">5% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Lesson Platinum# 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Lesson Platinum# 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/edu/edu.png" alt="신한카드 Edu 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Edu
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">교육업종</strong>
                        <span className="benefit-value">5~10% 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">아파트관리비</strong>
                        <span className="benefit-value">5천원 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">마트·의료업종</strong>
                        <span className="benefit-value">1% 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Edu 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Edu 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/edu/국민행복.png" alt="신한카드 국민행복 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 국민행복
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">학원·인터넷서점</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">밀딜리버리</strong>
                        <span className="benefit-value">10% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">OTT종</strong>
                        <span className="benefit-value">50% 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" class="btn-detail" aria-label="신한카드 국민행복 상세보기">상세보기</a>
                    <a href="#" class="btn-apply" aria-label="신한카드 국민행복 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-more">
                <a href="#" aria-label="교육 카드 더보기">
                    <span  aria-hidden="true">+</span>
                </a>
            </div> 
        </div>
       <div className={`benefit-content ${activeTab === "culture" ? "active" : ""}`} id="culture" role="tabpanel" aria-hidden="true">

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/movie/eduplan.gif" alt="신한카드 Edu Plan+ 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Edu Plan+
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">학원비 캐시백</strong>
                        <span className="benefit-value">월 최대 10만원</span>
                    </li>

                    <li>
                        <strong className="benefit-name">의료·정기결제</strong>
                        <span className="benefit-value">캐시백 월 최대 4천원</span>
                    </li>

                    <li>
                        <strong className="benefit-name">메가박스 영화 할인</strong>
                        <span className="benefit-value">월 7천원</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Edu Plan+ 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Edu Plan+ 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/movie/틴즈.png" alt="신한카드 TEENS(틴즈) PLUS PONEY 체크 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 TEENS PLUS PONEY
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">영화</strong>
                        <span className="benefit-value">천원 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">테마파크</strong>
                        <span className="benefit-value">캐50% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">베이커리·영푸드</strong>
                        <span className="benefit-value">5% 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 TEENS PLUS PONEY 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 TEENS PLUS PONEY 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/movie/cjone.png" alt="CJ ONE 신한카드 체크 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                CJ ONE 신한카드 체크
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">영화</strong>
                        <span className="benefit-value">5~7천원 캐시백</span>
                    </li>

                    <li>
                        <strong className="benefit-name">올리브영</strong>
                        <span className="benefit-value">10% 캐시백 및 CJ ONE 5%</span>
                    </li>

                    <li>
                        <strong className="benefit-name">레스토랑·베이커리</strong>
                        <span className="benefit-value">10% 캐시백</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="CJ ONE 신한카드 체크 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="CJ ONE 신한카드 체크 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/movie/홈플러스.png" alt="마이 홈플러스 신한카드 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                마이 홈플러스 신한카드
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">홈플러스 점내/외</strong>
                        <span className="benefit-value">1.2/0.5% 적립</span>
                    </li>

                    <li>
                        <strong className="benefit-name">영화</strong>
                        <span className="benefit-value">최대 3천원 결제일 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">잔돈할인 서비스</strong>
                        <span className="benefit-value">월 10회 제공</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="마이 홈플러스 신한카드 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="마이 홈플러스 신한카드 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-detail">
                <div className="card-thumb">
                    <img src="img/cate/movie/love.png" alt="신한카드 Love Platinum# 카드 이미지" />
                </div>

              <div className="card-info"> 
                <h4 className="card-title">
                신한카드 Love Platinum#
                </h4>

                <ul className="card-benefits">
                    <li>
                        <strong className="benefit-name">백화점·할인점</strong>
                        <span className="benefit-value">5% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">커피</strong>
                        <span className="benefit-value">20% 할인</span>
                    </li>

                    <li>
                        <strong className="benefit-name">영화</strong>
                        <span className="benefit-value">7천원 할인</span>
                    </li>
                </ul>

                <div className="card-buttons">
                    <a href="#" className="btn-detail" aria-label="신한카드 Love Platinum# 상세보기">상세보기</a>
                    <a href="#" className="btn-apply" aria-label="신한카드 Love Platinum# 카드신청">카드신청</a>
                </div>
              </div> 
            </div>

            <div className="card-more">
                <a href="#" aria-label="영화·문화 카드 더보기">
                    <span  aria-hidden="true">+</span>
                </a>
            </div> 
       </div>
    </div> 
 
    <section className="popular" aria-label="인기 카드추천">
        <div className="title-row">
            <h3>인기 카드추천</h3>
            <a href="#" class="more-link" aria-label="인기 카드추천 더보기">더보기 &gt;</a>
        </div>

        <div className="card-wrap"  ref={popularRef} >

            <div className="card">
                <div className="card-img">
                    <img src="img/popular/simple-plan.png" alt="심플플랜카드 이미지" />
                </div>

              <div className="info"> 
                <div className="name">
                    <strong>신한카드 Simple Plan</strong>
                    <ul className="hash">
                        <li>#NEW</li>
                        <li>#심플한혜택</li>
                    </ul>
                </div>

                <div className="content">
                    <p>전월실적·한도 없이
                        <br />국내 <span>1%</span> 해외 <span>2%</span>할인
                    </p>
                </div>

                <a href="#" aria-label="신한카드 Simple Plan 자세히 보기">자세히 보기</a>
              </div> 
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="img/popular/simple-plan+.png" alt="심플플랜+카드 이미지"/>
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>신한카드 Simple Plan+</strong>
                    <ul className="hash">
                        <li>#NEW</li>
                        <li>#심플한혜택</li>
                    </ul>
                </div>

                <div className="content">
                    <p>전월실적·한도 없이
                        <br/>국내 <span>1.5%</span> 해외 <span>2%</span>할인
                    </p>
                </div>

                <a href="#" aria-label="신한카드 Simple Plan+ 자세히 보기">자세히 보기</a>
              </div> 
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="img/popular/mr.life.png" alt="mr.life카드 이미지" />
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>신한카드 Mr.Life</strong>
                    <ul class="hash">
                        <li>#생활할인</li>
                        <li>#공과금할인</li>
                    </ul>
                </div>

                <div className="content">
                    <p>공과금·일상 <span>10%</span>할인 
                        <br/>주유소 <span>60원/ℓ </span>할인
                    </p>
                </div>

                <a href="#" aria-label="신한카드  Mr.Life 자세히 보기">자세히 보기</a>
              </div> 
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="img/popular/discount-plan.png" alt="discount plan카드 이미지"/>
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>신한카드 Discount Plan</strong>
                    <ul className="hash">
                        <li>#밀리언셀러</li>
                        <li>#구독할인</li>
                    </ul>
                </div>

                <div className="content">
                    <p>생활맞춤 <span>10%</span>할인 
                        <br/>정기결제 최대 <span>20%</span>할인
                    </p>
                </div>

                <a href="#" aria-label="신한카드 Discount Plan 자세히 보기">자세히 보기</a>
              </div> 
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="img/popular/discount-plan+.png" alt="discount plan+카드 이미지"/>
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>신한카드 Discount Plan+</strong>
                    <ul className="hash">
                        <li>#밀리언셀러</li>
                        <li>#생활할인</li>
                    </ul>
                </div>

                <div className="content">
                    <p>생활맞춤 <span>10%</span>할인 
                        <br/>장보기 <span>3만원</span>캐시백
                    </p>
                </div>

                <a href="#" aria-label="신한카드 Discount Plan+ 자세히 보기">자세히 보기</a>
              </div> 
            </div>
            
            <div className="card">
                <div class="card-img">
                    <img src="img/popular/first.gif" alt="처음카드 이미지" />
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>신한카드 처음</strong>
                    <ul class="hash">
                        <li>#포인트적립</li>
                        <li>#정기결제</li>
                    </ul>
                </div>

                <div className="content">
                    <p>일상 영역 <span>5%</span>적립 
                        <br/>정기결제 최대 <span>20%</span>적립
                    </p>
                </div>

                <a href="#" aria-label="신한카드 처음 자세히 보기">자세히 보기</a>
              </div> 
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="img/popular/oil.gif" alt="deep oil카드 이미지" />
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>신한카드 Deep Oil</strong>
                    <ul className="hash">
                        <li>#주유할인</li>
                        <li>#차량할인</li>
                    </ul>
                </div>

                <div className="content">
                    <p>주유소 <span>10%</span>적립 
                        <br/>정비·주차 <span>10%</span>할인
                    </p>
                </div>

                <a href="#" aria-label="신한카드 Deep Oil 자세히 보기">자세히 보기</a>
              </div> 
            </div> 
            
            <div className="card">
                <div className="card-img">
                    <img src="img/popular/air.png" alt="air one카드 이미지"/>
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>신한카드 Air One</strong>
                    <ul class="hash">
                        <li>#마일리지적립</li>
                        <li>#여행혜택</li>
                    </ul>
                </div>

                <div className="content">
                    <p>국내외 1천원당 <span>1마일</span>
                        <br/>항공·면세 <span>2배</span>적립
                    </p>
                </div>

                <a href="#" aria-label="신한카드 Air One 자세히 보기">자세히 보기</a>
              </div> 
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="img/popular/eduplan+.gif" alt="eduplan+카드 이미지"/>
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>신한카드 Edu Plan+</strong>
                    <ul className="hash">
                        <li>#밀리언셀러</li>
                        <li>#학원비캐시백</li>
                    </ul>
                </div>

                <div className="content">
                    <p>학원비 최대 <span>10%</span>캐시백
                        <br/>생활비 <span>1%</span>캐시백
                    </p>
                </div>

                <a href="#" aria-label="신한카드 Edu Plan+ 자세히 보기">자세히 보기</a>
              </div> 
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="img/popular/kpass.png" alt="k-pass 카드 이미지" />
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>K-패스 신한카드</strong>
                    <ul className="hash">
                        <li>#K패스</li>
                        <li>#간편결제</li>
                    </ul>
                </div>

                <div className="content">
                    <p>대중교통 <span>10%</span>할인
                        <br/>생활·간편결제 <span>5%</span>할인
                    </p>
                </div>

                <a href="#" aria-label="K-패스 신한카드 자세히 보기">자세히 보기</a>
              </div> 
            </div>

            <div className="card">
                <div class="card-img">
                    <img src="img/popular/theclassic+.png" alt="theclassic+카드 이미지"/>
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>신한카드 The CLASSIC+</strong>
                    <ul className="hash">
                        <li>#프리미엄카드</li>
                        <li>#마일리지</li>
                    </ul>
                </div>

                <div className="content">
                    <p>마일리지 <span>한도없이</span>적립
                        <br/>공항 라운지 <span>무료</span>이용
                    </p>
                </div>

                <a href="#" aria-label="신한카드 The CLASSIC+ 자세히 보기">자세히 보기</a>
              </div> 
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="img/popular/soltravel.gif" alt="soltravel카드 이미지"/>
                </div>
                    
              <div className="info"> 
                <div className="name">
                    <strong>신한카드 SOL 트래블 체크</strong>
                    <ul className="hash">
                        <li>#해외여행</li>
                        <li>#수수료면제</li>
                    </ul>
                </div>

                <div className="content">
                    <p>해외이용 수수료 <span>면제</span>
                        <br/>공항 라운지 입장 <span>무료</span>
                    </p>
                </div>

                <a href="#" aria-label="신한카드 SOL 트래블 체크 자세히 보기">자세히 보기</a>
              </div> 
            </div>

        </div>
    </section>

    <section className="service" aria-label="빠른 서비스">
        <h3>빠른 서비스</h3>

        <div className="service-content">
            <ul className="group">
                <li>
                    <a href="#" aria-label="카드신청 바로가기">
                        <img src="img/service/credit-card.svg" alt=""/>
                        <p>카드신청</p>
                    </a>
                </li>

                <li>
                    <a href="#" aria-label="이용내역 바로가기">
                        <img src="img/service/file-text.svg" alt=""/>
                        <p>이용내역</p>
                    </a>
                </li>

                <li>
                    <a href="#" aria-label="즉시결제 바로가기">
                        <img src="img/service/wallet-cards.svg" alt=""/>
                        <p>즉시결제</p>
                    </a>
                </li>

                <li>
                    <a href="#" aria-label="이용한도 바로가기">
                        <img src="img/service/shield-check.svg" alt=""/>
                        <p>이용한도</p>
                    </a>
                </li>

                <li>
                    <a href="#" aria-label="분실신고 바로가기">
                        <img src="img/service/bell-ring.svg" alt=""/>
                        <p>분실신고</p>
                    </a>
                </li>

                <li>
                    <a href="#" aria-label="카드안내·신청 바로가기">
                        <img src="img/service/clipboard-list.svg" alt=""/>
                        <p>카드안내·신청</p>
                    </a>
                </li>

                <li>
                    <a href="#" aria-label="이벤트 바로가기">
                        <img src="img/service/gift.svg" alt=""/>
                        <p>이벤트</p>
                    </a>
                </li>

                <li>
                    <a href="#" aria-label="고객상담 바로가기">
                        <img src="img/service/message-circle-more.svg" alt=""/>
                        <p>고객상담</p>
                    </a>
                </li>
            </ul>
        </div>

    </section>

    <section className="event" aria-label="혜택·이벤트">
        <div className="title-row">
            <h3>혜택·이벤트</h3>
            <a href="#" className="more-link" aria-label="혜택·이벤트 더보기">더보기 &gt;</a>
        </div>

        <div className="event-wrap">
            <ul className={`event-list ${eventIndex === 0 ? "active" : ""}`}>
                <li><img src="img/event/e6.png" alt="신한카드 이벤트 안내 배너"/></li>
                <li><img src="img/event/e2.png" alt="신한카드 이벤트 안내 배너"/></li>
                <li><img src="img/event/e3.png" alt="신한카드 이벤트 안내 배너"/></li>
                <li><img src="img/event/e4.png" alt="신한카드 이벤트 안내 배너"/></li>
            </ul>

            <ul className={`event-list ${eventIndex === 1 ? "active" : ""}`}>    
                <li><img src="img/event/e5.png" alt="신한카드 이벤트 안내 배너"/></li>
                <li><img src="img/event/e8.png" alt="신한카드 이벤트 안내 배너"/></li>
                <li><img src="img/event/e7.png" alt="신한카드 이벤트 안내 배너"/></li>
                <li><img src="img/event/e1.png" alt="신한카드 이벤트 안내 배너"/></li>
            </ul>
        </div>

        <div className="button">
            <button onClick={prevEvent} type="button" className="prev" aria-label="이전 이벤트 보기">&lt;</button>
            <span className="page">{eventIndex +1} / 2</span>
            <button onClick={nextEvent} type="button" className="next" aria-label="다음 이벤트 보기">&gt;</button>
        </div>
    </section>

    <section class="solpay" aria-label="SOL Pay 안내">
        <img src="img/solpay.png" alt="신한 SOL Pay 서비스 안내 배너"/>
    </section>
        
        </>
    )
}
window.Home = Home;