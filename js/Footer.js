function Footer() {

    return(
    <footer>
     <div className="shinhan-footer">
        <div className="footer-number">
            <ul className="center">
                <li>고객센터 1544-7000 (해외 82-2-3420-7000)</li>
            </ul>

            <ul className="beside">
                <li>카드 분실신고 1544-7200</li>
                <li>카드 신청 1661-8599</li>
                <li>금융 신청 1588-0303</li>
                <li>할부 금융 1544-7100</li>
                <li>점자카드신청 1833-3135 </li>
            </ul>
        </div>

        <div className="footer-nav">
                <a href="#">회사소개 </a>
                <a  href="#">지배구조 </a>
                <a  href="#">투자정보 </a>
                <a  href="#">이용약관 </a>
                <a  href="#">고객권리 안내문 </a>
                <a  href="#"><strong>개인정보처리방침</strong></a>
                <a  href="#"><strong>위치기반서비스 이용약관</strong></a>
                <a  href="#">유료상품 이용현황 </a>
                <a  href="#">금융소비자보호포털 </a>
                <a  href="#">전자민원접수 </a>
                <a  href="#">상품공시실 </a>
                <a  href="#">내부자제보 </a>
        </div>

        <div className="footer-bottom">
            <div className="footer-sns">
                <a href="#" aria-label="신한카드 인스타그램 바로가기">
                    <img src="img/footer/insta.png" alt=""/>
                </a>

                <a href="#" aria-label="신한카드 페이스북 바로가기">
                    <img src="img/footer/facebook.png" alt=""/>
                </a>

                <a href="#" aria-label="신한카드 유튜브 바로가기">
                    <img src="img/footer/youtube.png" alt=""/>
                </a>

                <a href="#" aria-label="신한카드 블로그 바로가기">
                    <img src="img/footer/blog.png" alt=""/>
                </a>

                <a href="#" aria-label="신한카드 카카오톡 바로가기">
                    <img src="img/footer/kakao.png" alt=""/>
                </a>
            </div>

            <div className="footer-info">
                <p>서울특별시 중구 을지로 100(을지로2가, 파인에비뉴 A동)
                    <br/>대표이사 박창훈 사업자등록번호 202-81-48079
                </p>

                <p className="copyright">
                    &copy; 2020 Shinhan Card Co., Ltd. All rights reserved.
                </p>

                <div className="ert">
                    <img src="img/footer/nbci.png" alt="NBCI 인증 마크"/>
                    <img src="img/footer/ccm.png" alt="CCM 인증 마크"/>
                    <img src="img/footer/oneshinhan.png" alt="One Shinhan 로고"/>
                </div>
            </div>

            <div className="footer-family">
                <select defaultValue="" aria-label="전용회원 사이트 선택">
                    <option value="">전용회원</option>
                    <option value="welfare">복지카드 회원</option>
                    <option value="wellpro">웰프로카드 회원</option>
                    <option value="family">신한금융그룹 패밀리</option>
                    <option value="lgfamily">LG/LX/GS/LS/LIG 패밀리</option>
                </select>

                <select defaultValue="" aria-label="신한금융그룹 사이트 선택">
                    <option value="">신한금융그룹</option>
                    <option value="holdings">신한금융지주회사</option>
                    <option value="bank">신한은행</option>
                    <option value="investment">신한투자증권</option>
                    <option value="life">신한라이프</option>
                    <option value="capital">신한캐피탈</option>
                    <option value="asset-management">신한자산운용</option>
                    <option value="jeju-bank">제주은행</option>
                    <option value="savings-bank">신한저축은행</option>
                    <option value="asset-trust">신한자산신탁</option>
                    <option value="ds">신한DS</option>
                    <option value="fund-partners">신한펀드파트너스</option>
                    <option value="credit-information">신한신용정보</option>    
                    <option value="reits-management">신한리츠운용</option>
                    <option value="venture-investment">신한벤처투자</option>
                    <option value="ez-insurance">신한EZ손해보험</option>
                </select>
            </div>
        </div>
     </div>
</footer>
    )
}
window.Footer = Footer;