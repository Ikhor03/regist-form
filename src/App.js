import { Component } from 'react';
import './App.css';
import Input from './input';
import ShowErrors from './showErrors';

class App extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPas: '',
    agreement: false,
    errors: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { username, email, password, confirmPas, agreement } = this.state;

    let message = []
    if (username.length === 0) {
      message = [...message, 'username tidak boleh kosong']
    }
    if (email.length === 0) {
      message = [...message, 'email tidak boleh kosong']
    }
    if (password.length < 8) {
      message = [...message, 'password harus lebih dari 8 karakter']
    }
    if (confirmPas.length === 0) {
      message = [...message, 'ketik ulang password anda']
    }
    if (confirmPas !== password) {
      message = [...message, 'password yang anda masukkan salah']
    }

    if (message.length > 0) {
      this.setState({ errors: message })
    } if (message.length === 0) {
      this.setState({ errors: '' })
    }

    alert(`
    Username  : ${username}
    email     : ${email}
    password     : ${password}
    confirmPas     : ${confirmPas}
    agreement     : ${agreement ? 'Yes' : 'No'}
    `);
    this.setState({
      username: '',
      email: '',
      password: '',
      confirmPas: '',
      agreement: false,
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <div className='container'>
            <h3 className='title'>
              Sign Up
            </h3>

            {this.state.errors && <ShowErrors errors={this.state.errors} />}

            <form onSubmit={this.handleSubmit}>
              <Input label="Username" type="text" name="username" value={this.state.username}
                onChange={value => this.setState({ username: value })}
              />
              <Input label="Email" type="email" name="email" value={this.state.email}
                onChange={value => this.setState({ email: value })}
              />
              <Input label="Password" type="password" name="password" value={this.state.password}
                onChange={value => this.setState({ password: value })}
              />
              <Input label="Confirm Password" type="password" name="password" value={this.state.confirmPas}
                onChange={value => this.setState({ confirmPas: value })}
              />
              <small>
                <input type="checkbox" name="agree" required
                  checked={this.state.agreement}
                  onChange={e => this.setState({ agreement: e.target.checked })}
                />
                <label> I agree with the <a href='https://' className="App-link">term and service</a></label>
              </small>
              <button type='submit' className='submit-button'>Register</button>
            </form>

            <center><small>
              <p> Already a member? <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                login here
              </a>
              </p>
            </small></center>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
