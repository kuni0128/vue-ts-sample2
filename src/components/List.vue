<template>
  <div class="list">
    {{ list.name }}
    <Card v-for="card in list.cards" :key="card.id" :card=card />
    <input type="text" @change="addCard" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import { IList } from '@/types';
import { PropType, PropOptions } from 'vue';

@Component({
  components: {
    Card,
  },
})
export default class List extends Vue {
  @Prop({ type: Object, required: true })
  private list!: IList;

  @Emit()
  private addCard(event: Event & { currentTarget: HTMLInputElement }): void {
      alert('emit addCard');
  }
}
</script>

<style lang="scss" scoped>
.list {
  border: 1px solid #000000;

  > .card {
    margin: 1px;
  }
}
</style>
