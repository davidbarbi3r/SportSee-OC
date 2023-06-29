import './SessionsTooltips.css';

function SessionsTooltips({ active, payload }) {
  if (active) {
    return <div className='sessions-tooltips'>{payload[0].value} min</div>;
  }
}

export default SessionsTooltips;
