import '../style/Contact.css';

function Contact(props) {
  return (
    <div className="Contact">
        <div className="card-contact">
          <h3>{props.name}</h3>
          <h4>{props.phone}</h4>
          { props.isDeletable ? <button className="delete-btn">Supprimer</button> : null}
        </div>
    </div>
  );
}

export default Contact;
