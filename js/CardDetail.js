function CardDetail() {
  const [tab, setTab] = React.useState("benefit");

  const card = cardData[0];

  return (
    <main className="card-detail">
      <section className="card-detail-top">
        <img src={card.img} alt={card.name} />

        <div>
          <h2>{card.name}</h2>
          <p>{card.desc}</p>
          <p className="card-fee">연회비 {card.fee}</p>
        </div>
      </section>

      <div className="card-tab">
        <button onClick={() => setTab("benefit")}>주요 혜택</button>
        <button onClick={() => setTab("notice")}>유의사항</button>
      </div>

      {tab === "benefit" && (
        <div className="benefit-wrap">
          {card.benefits.map((item, index) => (
            
            <section className="benefit-box" key={index}>
              <h3>{item.title}</h3>
              {item.desc.map((text, i) => (
                <p key={i}>· {text}</p>
              ))}
            </section>
          ))}
        </div>
      )}

      {tab === "notice" && (
        <div className="notice-wrap">
          <section>
            <h3>카드 발급 유의사항</h3>
            {card.notices.issue.map((text, index) => (
              <p key={index}>· {text}</p>
            ))}
          </section>

          <section>
            <h3>부가서비스 변경가능 사유</h3>
            {card.notices.change.map((text, index) => (
              <p key={index}>· {text}</p>
            ))}
          </section>

          <section className="notice-box">
            {card.notices.info.map((text, index) => (
              <p key={index}>· {text}</p>
            ))}
          </section>
        </div>
      )}
    </main>
  );
}