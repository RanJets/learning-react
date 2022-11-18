import { useForm } from "react-hook-form";
//install the react-hook-form and yup first using npm install react-hook-form yup
import { yupResolver } from "@hookform/resolvers/yup";
//for yup validating, install resolver using npm install @hookform/resolvers
import * as yup from "yup";

export const Form = () => {
  //handling the errors using yup
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is Empty!"),
    email: yup.string().email("Invalid Email").required("Email is Empty!"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18, "Under Age")
      .required("Age is Empty!"),
    password: yup
      .string()
      .min(4, "Minimum of 4 characters")
      .required("Password is Empty"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password don't match")
      .required(),
  });

  //using useform hook with yup resolver to validate errors
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //submitting the data
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="fullName" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
