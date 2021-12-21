import { useField, useForm } from "vee-validate";
import * as yup from "yup";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useRequestForm(fn: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isSubmiting, handleSubmit }: any = useForm({
    initialValues: {
      status: 'active'
    }
  });

  const {
    value: fio,
    errorMessage: fError,
    handleBlur: fBlur,
  } = useField(
    "fio",
    yup.string().trim().required("Поле ФИО не может быть пустым")
  );
  const {
    value: tel,
    errorMessage: tError,
    handleBlur: tBlur,
  } = useField(
    "tel",
    yup.string().trim().required("Поле телефон не может быть пустым")
  );
  const {
    value: sum,
    errorMessage: sError,
    handleBlur: sBlur,
  } = useField(
    "sum",
    yup
      .number()
      .required("Введите сумму")
      .min(0, "Сумма не может быть меньше 0")
  );
  const { value: status } = useField("status");

  const onSubmit = handleSubmit(fn);

  return {
    status,

    fio,
    fError,
    fBlur,

    tel,
    tError,
    tBlur,

    sum,
    sError,
    sBlur,

    isSubmiting,
    onSubmit,
  };
}
