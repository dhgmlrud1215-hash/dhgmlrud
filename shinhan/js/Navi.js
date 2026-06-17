function Navi() {
    const [openMenu, setOpenMenu] = React.useState(null);

    const toggleMenu = (menu) => {
        if(openMenu === menu) {
            setOpenMenu(null);
        }else {
            setOpenMenu(menu);
        }
    }

    const {Link} = window.ReactRouterDOM


    return(
    <div className="navi-wrap" onMouseLeave={() => setOpenMenu(null)}>
    <nav>
        <ul className="navi">
            <li>
                <button 
                type="button" 
                data-target="my" 
                aria-expanded={openMenu === "my"} 
                aria-controls="my"
                onMouseEnter={() => setOpenMenu("my")}
                >
                마이
                </button>
            </li>
            <li>
                <button type="button" 
                data-target="benefit" 
                aria-expanded={openMenu === "benefit"}
                aria-controls="benefit"
                onMouseEnter={() => setOpenMenu("benefit")}
                >
                혜택
                </button>
            </li>
            <li>
                <button type="button" 
                data-target="finance" 
                aria-expanded={openMenu === "finance"} 
                aria-controls="finance"
                onMouseEnter={() => setOpenMenu("finance")}
                >
                금융
                </button>
            </li>
            <li>
                <button type="button" 
                data-target="service" 
                aria-expanded={openMenu === "service"} 
                aria-controls="service"
                onMouseEnter={() => setOpenMenu("service")}
                >
                서비스
                </button>
            </li>
            <li>
                <button type="button" 
                data-target="tops" 
                aria-expanded={openMenu === "tops"} 
                aria-controls="tops"
                onMouseEnter={() => setOpenMenu("tops")}
                >
                    Tops Club
                </button>
            </li>
            <li>
                <button type="button" 
                data-target="center" 
                aria-expanded={openMenu === "center"} 
                aria-controls="center"
                onMouseEnter={() => setOpenMenu("center")}
                >
                    고객센터
                </button>
            </li>
        </ul>
    </nav>

    <div className={`content-wrap ${openMenu ? "active" : ""}`}>
      <div className={`menu-content ${openMenu === "my" ? "active" : ""}`} id="my">

          <div className="menu-inner">
            <h4>마이페이지</h4>

            <div className="navi-group">
                <ul>
                    <li className="sub-name">정부지원</li>
                    <li className="sub-detail">고유가 피해지원금</li>
                </ul>

                <ul>
                    <li className="sub-name">이용내역</li>
                    <li className="sub-detail">명세서 · 이용내역 · 실적</li>
                </ul>

                <ul>
                    <li className="sub-name">이용금액결제</li>
                    <li className="sub-detail">즉시결제 · 분할납부 · 환불</li>
                </ul>

                <ul>
                    <li className="sub-name">이용한도</li>
                    <li className="sub-detail">조회 · 변경 · 추가한도</li>
                </ul>

                <ul>
                    <li className="sub-name">체크카드서비스</li>
                    <li className="sub-detail">결제계좌 · 소액신용 · 후불교통 · 하이패스</li>
                </ul>

                <ul>
                    <li className="sub-name">소득공제</li>
                    <li className="sub-detail">조회 · 주택임대료</li>
                </ul>

                <ul>
                    <li className="sub-name">내정보관리</li>
                </ul>
            </div>
          </div> 
        </div> 

       <div className={`menu-content ${openMenu === "benefit" ? "active" : ""}`} id="benefit">
           <div className="menu-inner">
             <h4>혜택 메인</h4>

             <div className="navi-group">
                <ul>
                    <li className="sub-name">마이샵</li>
                    <li className="sub-detail">마이샵쿠폰</li>
                </ul>

                <ul>
                    <li className="sub-name">할인·포인트</li>
                    <li className="sub-detail">조회 · 전환 · 캐시백</li>
                </ul>

                <ul>
                    <li className="sub-name">이벤트</li>
                </ul>

                <ul>
                    <li className="sub-name">정부지원사업</li>
                    <li className="sub-detail">성남시 아동수당 · 아동·청소년 지원</li>
                    <li className="sub-detail">국민행복 바우처 · 소상공인 바우처</li>
                    <li className="sub-detail">국민내일배움</li>
                </ul>

                <ul>
                    <li className="sub-name">가맹점혜택</li>
                    <li className="sub-detail">찾기 · 무이자할부 · 성남시 지역화폐</li>
                </ul>

                <ul>
                    <li className="sub-name">전용회원</li>
                    <li className="sub-detail">복지카드 · 웰프로카드 · 패밀리카드</li>
                </ul>

                <ul>
                    <li className="sub-name">트렌드정보(Trandis)</li>
                </ul>

                <ul>
                    <li className="sub-name">쏠쏠한 뉴스</li>
                </ul>
            </div>
          </div> 
        </div>

        <div className={`menu-content ${openMenu === "finance" ? "active" : ""}`} id="finance">
             <div className="menu-inner">
              <h4>금융 메인</h4>

              <div className="navi-group">
                <ul>
                    <li className="sub-name">마이 금융</li>
                    <li className="sub-detail">나만의 금융혜택</li>
                </ul>

                <ul>
                    <li className="sub-name">대출이동 서비스</li>
                    <li className="sub-detail">신청 · 결과조회</li>
                </ul>

                <ul>
                    <li className="sub-name">단기카드대출</li>
                    <li className="sub-detail">신청 · 이용내역 · 이용한도 · 상환 · 금리인하요구권</li>
                </ul>

                <ul>
                    <li className="sub-name">장기카드대출</li>
                    <li className="sub-detail">신청 · 이용내역 · 연장 · 상환 · 금리인하요구권</li>
                </ul>

                <ul>
                    <li className="sub-name">일부결제금액이월약정(리볼빙)</li>
                    <li className="sub-detail">신청 · 확인 · 금액추가 · 금리인하요구권</li>
                </ul>

                <ul>
                    <li className="sub-name">마이너스대출</li>
                    <li className="sub-detail">신청 · 이용내역 · 금리인하요구권</li>
                </ul>

                <ul>
                    <li className="sub-name">가계신용대출</li>
                    <li className="sub-detail">신청 · 이용내역 · 연장 · 금리인하요구권</li>
                </ul>

                <ul>
                    <li className="sub-name">사업자금대출</li>
                    <li className="sub-detail">주말대출</li>
                </ul>

                <div className="group-line"></div>

                <ul>
                    <li className="sub-name">자동차금융</li>
                    <li className="sub-detail">일시불 · 할부 · 렌터카 · 리스</li>
                    <li className="sub-detail">자동차담보대출 신청</li>
                </ul>

                <ul>
                    <li className="sub-name">주택자금대출</li>
                    <li class="sub-detail">보증금대출 · 전세대출조회 · 모집수수료</li>
                </ul>

                <ul>
                    <li className="sub-name">기타서비스</li>
                    <li class="sub-detail">대출서류 · 수수료 · 금리인하요구권</li>
                </ul>

            </div>
          </div>
        </div>

       <div className={`menu-content ${openMenu === "service" ? "active" : ""}`} id="service">
           <div className="menu-inner">
             <h4>카드 메인</h4>

             <div className="navi-group">
                <ul>
                    <li className="sub-name">카드안내</li>
                    <li class="sub-detail">추천카드 · 프리미엄카드</li>
                    <li class="sub-detail">신용카드 · 체크카드 · 캐릭터카드</li>
                </ul>

                <ul>
                    <li className="sub-name">기타·제휴 카드안내</li>
                    <li class="sub-detail">제휴 · 기프트 · 선불카드</li>
                    <li class="sub-detail">DIY·PUZZLE · 사업자 · 복지카드</li>
                    <li class="sub-detail">트래블 · 해외이용 추천카드</li>
                </ul>

                <ul>
                    <li className="sub-name">카드 간편신청</li>
                </ul>

    
                <ul>
                    <li className="sub-name">발급조회·등록</li>
                </ul>
            </div>
          </div> 
        </div> 

       <div className={`menu-content ${openMenu === "tops" ? "active" : ""}`} id="tops">
            <div className="menu-inner">
             <h4>Tops Club 메인</h4>

             <div className="navi-group single">
                <ul>
                    <li className="sub-name">Tops Club</li>
                    <li class="sub-detail">안내 · 쿠폰</li>
                </ul>
            </div>
          </div> 
        </div>

        <div className={`menu-content ${openMenu === "center" ? "active" : ""}`} id="center">
            <div className="menu-inner">
              <h4>고객센터 메인</h4>

              <div className="navi-group">
                <ul>
                    <li className="sub-name">카드상담</li>
                    <li class="sub-detail">재발급 · 분실신고 · 거래정지</li>
                    <li class="sub-detail">금융사고 · 부정사용 신고</li>
                    <li class="sub-detail">불법모집 · 가맹점 제보</li>
                </ul>

                <ul>
                    <li className="sub-name">상담·민원</li>
                </ul>

                <ul>
                    <li className="sub-name">이용안내</li>
                    <li class="sub-detail">이용안내 · 고객지원</li>
                </ul>

                <ul>
                    <li className="sub-name">인증서안내</li>
                    <li class="sub-detail">인증서 · 본인확인</li>
                </ul>

                <div className="group-line"></div>

                <ul>
                    <li className="sub-name">금융소비자보호</li>
                    <li class="sub-detail">소비자보호 · 민원 · 이의신청</li>
                </ul>

                <ul>
                    <li className="sub-name">개인정보보호</li>
                    <li class="sub-detail">개인정보 · 신용정보 관리</li>
                </ul>
            </div>
          </div>
        </div>
    </div>
 </div>
    );
}
window.Navi = Navi;