import { useForm } from 'react-hook-form';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          defaultValue=""
          {...register('query', { required: true, minLength: 2 })}
          type="text"
          name="query"
        />
        {errors.query && <span>This field is required</span>}
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export { Form };
