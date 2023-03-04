import React from 'react';
import './Form.css';

class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      site: 'www.monsite.fr',
      enterprise: 'Monentreprise',
      adress: '0 rue de bidule, 75000 PARIS',
      typeEntreprise: 'EURL, SARL, ...',
      capital: '1 000 000 000',
      mail: 'contact@monsite.fr',
      responsable: 'Henri DURAND',
      tel: '03 00 00 00 00',
      siret: '000 000 000 00000',
      rcs: 'Paris',
      hosting:'OVH SAS – 2 rue Kellermann – BP 80157 – 59053 Roubaix Cedex 1 – Téléphone : 1007'
    };
    this.props.updateFormValue(this.state);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    setTimeout(() => {
      this.props.updateFormValue(this.state);
    }, 100);
  };

  render() {
    return (
      <form>
        <label>
          <span>Site : </span><input type="text" name="site" value={this.state.site} onChange={this.handleChange} />
        </label>
        <label>
          <span>entreprise : </span><input type="text" name="enterprise" value={this.state.enterprise} onChange={this.handleChange} />
        </label>
        <label>
          <span>adresse : </span><input type="text" name="adress" value={this.state.adress} onChange={this.handleChange} />
        </label>
        <label>
          <span>type entreprise : </span><input type="text" name="typeEntreprise" value={this.state.typeEntreprise} onChange={this.handleChange} />
        </label>
        <label>
          <span>Capital : </span><input type="text" name="capital" value={this.state.capital} onChange={this.handleChange} />
        </label>
        <label>
          <span>mail : </span><input type="text" name="mail" value={this.state.mail} onChange={this.handleChange} />
        </label>
        <label>
          <span>responsable : </span><input type="text" name="responsable" value={this.state.responsable} onChange={this.handleChange} />
        </label>
        <label>
          <span>tel : </span><input type="text" name="tel" value={this.state.tel} onChange={this.handleChange} />
        </label>
        <label>
          <span>SIRET : </span><input type="text" name="siret" value={this.state.siret} onChange={this.handleChange} />
        </label>
        <label>
          <span>RCS : </span><input type="text" name="rcs" value={this.state.rcs} onChange={this.handleChange} />
        </label>
        <label>
          <span>Hébergeur : </span><input type="text" name="hosting" value={this.state.hosting} onChange={this.handleChange} />
        </label>
      <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

function Form(props) {
  return (
      <div className="Form widthComponent">
          <p>Outil de génération de texte pour les pages Mentions légales et Politique de confidentialités.</p>
          <h2>Formulaire de saisit</h2>
          <NameForm updateFormValue={props.updateFormValue}/>
      </div>
  );
}

export default Form;