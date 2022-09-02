import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const SearchForm = ({ handleSubmit, searchInput, setSearchInput }) => {
  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <InputGroup className="mb-3">
        <FormControl
          onChange={e => setSearchInput(e.target.value)}
          placeholder="Digite o que procura"
          type="text"
          value={searchInput}
          className="bg-dark dark-border text-light"
        />
        <Button variant="success" type="submit" disabled={!searchInput.length}>
          Procurar
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchForm;