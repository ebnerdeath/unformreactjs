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
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      number: 0
    }
  };

  componentDidMount() {
    const { getUsersRequest } = this.props;

    console.tron.log("ComponentDidMount");

    getUsersRequest();
  }

  handleSubmit(data) {
    console.log(data);
  }

  handleUpdate(id) {
    console.log(id);
  }

  handleDelete(id) {
    console.log(id);
  }

  render() {
    const { users, loading } = this.props;
    return (
      <Container>
        <SignForm>
          <h2>Exemplo de Crud com Unform</h2>
          <Form
            schema={schema}
            initialData={this.state}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Input name="name" label="Nome: " />
            <br />
            <Input name="username" label="Usuário: " />
            <br />
            <Input name="email" label="Email: " />
            <br />
            <Scope path="address">
              <Input name="street" label="Rua: " />
              <br />
              <Input name="number" label="Número: " />
              <br />
            </Scope>

            <ButtonForm size="big" type="submit">
              Cadastrar
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
  loading: state.user.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Unform);
