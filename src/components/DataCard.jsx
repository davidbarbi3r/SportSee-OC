import './DataCard.css';

function DataCard(props) {
    const cardMap = new Map([
        ['calorieCount', 'Calories'],
        ['proteinCount', 'Proteines'],
        ['carbohydrateCount', 'Glucides'],
        ['lipidCount', 'Lipides']
    ])

    const cardType = cardMap.get(props.type)

    if (!cardType) {
        return <div>ERROR</div>;
    }

  return (
    <article className="data-card">
      <img src={`/${props.type}-icon.svg`} alt="calories-icon" />
      <div>
        <p className="strong">{props.keyData}{cardType === 'Calories' ? 'kCal' : 'g'}</p>
        <p className="type">{cardType}</p>
      </div>
    </article>
  );
}

export default DataCard;
