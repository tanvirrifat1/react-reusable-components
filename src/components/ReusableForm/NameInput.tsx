export const NameInput = ({ errors, label, register, type, id }: any) => {
  return (
    <div className="w-full max-w-md">
      <label className="block text-xl" htmlFor="email">
        {label}
      </label>
      <input className="w-full" type={type} id={id} {...register} />
      {errors.email && (
        <span className="text-xs text-red-500">{errors.email.message}</span>
      )}
    </div>
  );
};
