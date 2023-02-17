import { CiSearch } from 'react-icons/ci';
import { useForm } from 'react-hook-form';
import { FormSearch, Field, Button, Label, Span } from './Form.styled';

const Form = ({ onSearch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    return onSearch(data);
  };

  return (
    <FormSearch onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Field
          placeholder="Movie search"
          defaultValue=""
          {...register('query', { required: true, minLength: 2 })}
          type="text"
          name="query"
        />
        {errors.query && <Span>This field is required</Span>}
        <Button type="submit">
          <CiSearch fill="white" size={20} />
        </Button>
      </Label>
    </FormSearch>
  );
};

export { Form };
