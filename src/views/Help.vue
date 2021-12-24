  <template>
    <app-page back title="Help">
      <question-item v-for="q in question" :key="q.title" :question="q"/>
    </app-page>
  </template>

  <script>
import AppPage from "../components/ui/AppPage";
import QuestionItem from "../components/question/QuestionItem";

export default {
  components: {
    AppPage,
    QuestionItem
  },
  setup(){
    const question = [
      {title: 'Что есть в данной системе?', text: 'Тут есть все что бы смотреть какие заявки есть'},
      {title: 'Как тут работает авторизация?', text: 'Все реализовано через firebase'}
    ]
    return{
      question
    }
      }
    }
  </script>
