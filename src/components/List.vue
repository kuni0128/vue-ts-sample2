<template>
  <div>
    {{ list.name }}
    <Card v-for="card in list.cards" :key="card.id" :card=card />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import { IList } from '@/types';

@Component({
  components: {
    Card,
  },
})
export default class List extends Vue {
  @Prop({ type: Object, required: true })
  private list!: IList;
}
</script>
