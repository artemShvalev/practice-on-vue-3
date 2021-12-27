  <template>
    <app-page back title="Help">
      <question-item v-for="q in questions" :key="q.title" :question="q"/>
    </app-page>
  </template>

  <script lang="ts">
import AppPage from "@/components/ui/AppPage.vue";
import QuestionItem from "@/components/question/QuestionItem.vue";

export default {
  components: {
    AppPage,
    QuestionItem
  },
  setup(){
    const questions = [
      {title: 'Что есть в данной системе?', text: 'Тут есть все что бы смотреть какие заявки есть'},
      {title: 'Как тут работает авторизация?', text: 'Все реализовано через firebase'}
    ]
    return{
      questions
    }
      }
    }
  </script>
