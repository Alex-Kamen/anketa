<template>
  <TreeDataTable
    label="Ответы"
    :object-list="answerList"
  >
    <template v-slot:actions="{item}">
      <div style="display: flex; justify-content: flex-end">
        <span><DeleteAnswerModal :id="+item.id"></DeleteAnswerModal></span>
      </div>
    </template>
  </TreeDataTable>
</template>

<script>
import TreeDataTable from '@/components/table/TreeDataTable'
import DeleteAnswerModal from '@/components/modal/answer/DeleteAnswerModal'
import { Filter } from '@/models/Filter'

export default {
  name: 'AnswerList',

  components: { DeleteAnswerModal, TreeDataTable },

  computed: {
    answerList() {
     return this.$store.getters['answer/formData'].map((form) => {
        let answerList = this.$store.getters['answer/answerList']
          .filter((answer) => +answer.formId === +form.id);

       const headers = [
         {text: 'Id', value: 'id'},
         {text: 'Дата', value: 'time'},
         {text: 'Логин', value: 'login'},

         ...answerList[0]
           ? answerList[0].marks.map((_, index) => ({text: index+1, value: `${index}`, tab: form.questionList[index]}))
           : [],
       ];

       headers.push({text: '', value: 'action', sortable: false})

       const objectList = answerList.map((answer) => {
         return {
           id: answer.id,
           time: answer.time,
           login: answer.login,
           ...answer.marks.map((mark, index) => answer.weights ? `${mark}/${answer.weights[index]}` : mark),
           recommendation: answer.recommendation
         }
       })

        const children = [{
          headers,
          objectList
       }]

        return { ...form, children };
      })
    }
  },

  mounted () {
    this.$store.dispatch('answer/answerList', new Filter().toRequest())
  }
}
</script>

<style scoped>

</style>
