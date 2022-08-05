import "../style/App.css";
import Contact from "./Contact";
import SignupForm from "./SignupForm";

const contactInfo = [
  {
    name: "Eva Hanchier",
    phone: "📞 03.49.79.52.46",
    email: "evah@gmail.com",
    isDeletable: true,
  },
  {
    name: "Yvon Hanchier",
    phone: "📞 03.49.79.52.46",
    email: "yvonh@gmail.com",
    isDeletable: true,
  },
  {
    name: "Jean Chie",
    phone: "📞 03.49.79.52.46",
    email: "jeanc@gmail.com",
    isDeletable: true,
  },
  {
    name: "Maman",
    phone: "📞 03.49.79.52.46",
    email: "mamere@gmail.com",
    isDeletable: false,
  },
  {
    name: "Maison",
    phone: "📞 03.49.79.52.46",
    email: "maison@gmail.com",
    isDeletable: false,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Mes contacts</h1>
      {contactInfo.map((contact, index) => (
        <Contact
          key={index}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          isDeletable={contact.isDeletable}
        />
      ))}
      <SignupForm />
    </div>
  );
}

export default App;
