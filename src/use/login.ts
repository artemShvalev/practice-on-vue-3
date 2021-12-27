import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export function useLoginForm(){
  const { handleSubmit, isSubmitting, submitCount } = useForm();

  const store = useStore();
  const router = useRouter();

  const onSubmit = handleSubmit(async (values) => {
    try {
    await store.dispatch("auth/login", values);
    router.push("/");
    // eslint-disable-next-line no-empty
    } finally{
      router.push('/')
    }
  });

  const isTooManyAttempts = computed(() => submitCount.value >= 3);

  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Введите e-mail")
      .email("введите корректный e-mail")
  );

  const minLength = 6;

  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField(
    "password",
    yup
      .string()
      .trim()
      .required("Введите пароль")
      .min(minLength, `Пароль не может быть меншье ${minLength} символов`)
  );

  watch(isTooManyAttempts, (val) => {
    if (val) {
      setTimeout(() => (submitCount.value = 0), 1500);
    }
  });

  return {
    email,
    password,
    eError,
    eBlur,
    pError,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttempts,
  };
}
