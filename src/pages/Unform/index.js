import React, { Component } from "react";
import * as Yup from "yup";
import { Form, Input, Scope } from "@rocketseat/unform";
import { Container, SignForm, ButtonForm, TableForm } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserActions from "../../store/ducks/user";

import { FaTrash, FaPen } from "react-icons/fa";

const schema = Yup.object().shape({
  name: Yup.string().required("Campo Obrigatório"),
  username: Yup.string().required("Campo Obrigatório"),
  email: Yup.string()
    .email("Informe um e-mail válido")
    .required("Campo Obrigatório"),
  address: Yup.object().shape({
    street: Yup.string().required("Campo Obrigatório"),
    number: Yup.string()
      .min(3, "O Número precisa 3 dígitos")
      .required("Campo Obrigatório")
  })
});

class Unform extends Component {
  state = {
    nameButton: "Cadastrar",
    userSelected: null,
    user: {
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        number: null
      }
    }
  };

  getUserRequest = () => {
    const { getUsersRequest } = this.props;

    getUsersRequest();
  };

  componentDidMount() {
    this.getUserRequest();
  }

  handleClearInputs = () => {
    this.setState({
      user: {
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          number: null
        }
      }
    });
  };

  handleSubmit(data) {
    const { nameButton, userSelected } = this.state;
    const { newUserRequest, updateUserRequest, clearDataUser } = this.props;

    if (nameButton === "Cadastrar") {
      newUserRequest(data);
    } else if (nameButton === "Salvar") {
      data.id = userSelected;
      updateUserRequest(data);
    }

    clearDataUser();
    this.handleClearInputs();
    this.setState({ nameButton: "Cadastrar", userSelected: null });
  }

  handleUpdate(id) {
    const { getUserFromIdRequest, userSelected } = this.props;

    getUserFromIdRequest(id);

    console.tron.log(userSelected);

    this.setState({
      nameButton: "Salvar",
      userSelected: id,
      user: userSelected
    });
  }

  handleDelete(id) {
    console.log(id);
  }

  render() {
    const { users, loading, userSelected } = this.props;
    const { nameButton } = this.state;
    const { name, username, email, street, number } = this.state.user;
    return (
      <Container>
        <SignForm>
          <h2>Exemplo de Crud com Unform</h2>
          <Form
            schema={schema}
            initialData={this.state.user}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Input
              name="name"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              label="Nome: "
            />
            <br />
            <Input
              name="username"
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
              label="Usuário: "
            />
            <br />
            <Input
              name="email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              label="Email: "
            />
            <br />
            <Scope path="address">
              <Input
                name="street"
                value={street}
                onChange={e => this.setState({ street: e.target.value })}
                label="Rua: "
              />
              <br />
              <Input
                name="number"
                value={number}
                onChange={e => this.setState({ number: e.target.value })}
                label="Número: "
              />
              <br />
            </Scope>

            <ButtonForm size="big" type="submit">
              {nameButton}
            </ButtonForm>
          </Form>
        </SignForm>
        {loading ? <h4>Carregando... </h4> : null}
        <TableForm cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Usuário</th>
              <th>Email</th>
              <th>Rua</th>
              <th>Número</th>
              <th>Alterar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.street}</td>
                <td>{user.number}</td>
                <td>
                  <button
                    onClick={() => this.handleUpdate(user.id)}
                    type="button"
                  >
                    <span>
                      <FaPen color="#E1AD01" size={15} />
                    </span>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(user.id)}
                    type="button"
                  >
                    <span>
                      <FaTrash color="#e04848" size={15} />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </TableForm>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user,
  userSelected: state.user.dataUser,
  loading: state.user.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Unform);
