import PropTypes from 'prop-types';

export default function Card(props) {

  return (
    <div className="card">
      <div className="card-body">
        <img src={props.img} className="card-img-top" alt="..." />

        <div className="card_info_bottom">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
