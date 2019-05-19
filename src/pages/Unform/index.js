import React, { Component } from "react";
import * as Yup from "yup";
import { Form, Input, Scope } from "@rocketseat/unform";
import { Container, SignForm, ButtonForm, TableForm } from "./styles";

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
    name: "Ebner",
    username: "ebnerdeath",
    email: "ebner.suporte@hotmail.com",
    address: {
      street: "Rua Goiás",
      number: 262
    }
  };

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
            <tr>
              <td>1</td>
              <td>Jill</td>
              <td>Smith</td>
              <td>jill@hotmail.com</td>
              <td>Rua Paranaue</td>
              <td>50</td>
              <td>
                <button onClick={() => this.handleUpdate(1)} type="button">
                  <span>
                    <FaPen color="#E1AD01" size={15} />
                  </span>
                </button>
              </td>
              <td>
                <button onClick={() => this.handleDelete(1)} type="button">
                  <span>
                    <FaTrash color="#e04848" size={15} />
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Eve</td>
              <td>Jackson</td>
              <td>jackson.tic@gmail.com</td>
              <td>Rua tihuana</td>
              <td>94</td>
              <td>
                <button onClick={() => this.handleUpdate(1)} type="button">
                  <span>
                    <FaPen color="#E1AD01" size={15} />
                  </span>
                </button>
              </td>
              <td>
                <button onClick={() => this.handleDelete(1)} type="button">
                  <span>
                    <FaTrash color="#e04848" size={15} />
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </TableForm>
      </Container>
    );
  }
}

export default Unform;
