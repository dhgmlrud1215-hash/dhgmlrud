function CardDetail() {
  const { useParams } = ReactRouterDOM;
  const { id } = useParams();

  const card = cardData.find(item => item.id === id);

  if (!card) {
    return <main className="card-detail-page">카드를 찾을 수 없습니다.</main>;
  }

  return (
    <main className="card-detail-page">
      <section className="card-detail-page-top">
        <img src={card.img} alt={card.name} />

        <div>
          <h2>{card.name}</h2>
          <p>{card.desc}</p>

          <ul className="benefits-text">
            {card.benefitsText.map((item, index) => (
              <li key={index}>
                {item.normal}
                <span>{item.point}</span>
              </li>
            ))}
          </ul>
        </div>

        {Array.isArray(card.fee) && (
          <div className="card-fee">
            <h3>연회비</h3>

            {card.fee.map((item, index) => (
              <div className="fee-row" key={index}>
                <span>{item.brand}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="card-tab">
        <button onClick={() => document.getElementById("benefit").scrollIntoView({ behavior: "smooth" })}>
          주요 혜택
        </button>

        <button onClick={() => document.getElementById("notice").scrollIntoView({ behavior: "smooth" })}>
          유의사항
        </button>
      </div>

      <section id="benefit" className="card-benefit-wrap">
        {card.benefits.map((item, index) => (
          <div className="card-benefit-box" key={index}>
            <h3>{item.title}</h3>
            {item.desc.map((text, i) => (
              <p key={i}>· {text}</p>
            ))}
          </div>
        ))}
      </section>

      <section id="notice" className="notice-wrap">
        <section>
          <h3>카드 발급 유의사항</h3>
          {(card.issue || []).map((text, index) => (
            <p key={index}>· {text}</p>
          ))}
        </section>

        <section>
          <h3>부가서비스 변경가능 사유</h3>
          {(commonNotices.change || []).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </section>

        <section className="notice-box">
          <p>· 회사명: 신한카드</p>
          <p>· 상품명: {card.name}</p>
          <p>· 카드 출시 일자: {card.releaseDate}</p>

          {commonNotices.info.slice(1).map((text, index) => (
            <p key={index}>· {text}</p>
          ))}
        </section>
      </section>

      <section className="apply-buttons">
        <button type="button" className="quick-apply">
          간편 신청
        </button>

        <button type="button" className="online-apply">
          온라인 신청하기
        </button>
      </section>
    </main>
  );
}