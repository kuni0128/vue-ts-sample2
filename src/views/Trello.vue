<template>
  <div class="trello">
    <div class="board">
      <List v-for="list in lists" :key="list.id" :list=list @add-card="addCard" />
    </div>
    <div class="control-area">
      <p>追加リスト名<input type="text" @change="addList" /></p>
      <p>リスト数: {{ listCreatedCount }}</p>
      <p>カード数: {{ cardCreatedCount }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from '@/components/List.vue';
import { IList, IAddCardEvent } from '@/types';
import { createInitialLists } from '@/initialData';

@Component({
  components: {
    List,
  },
})
export default class Trello extends Vue {
  private lists: IList[] = createInitialLists();
  private listCreatedCount = this.lists.length;
  private cardCreatedCount = this.lists.map((list) => list.cards.length).reduce((a, x) => a += x);

  private addList(event: Event & { currentTarget: HTMLInputElement }): void {
    this.listCreatedCount++;
    const newList = {
      id: this.listCreatedCount,
      name: event.currentTarget.value,
      cards: [],
    };
    this.lists.push(newList);
    event.currentTarget.value = '';
  }

  private addCard({ listId, text }: IAddCardEvent): void {
    const list = this.lists.find((l) => l.id === listId);
    if (list === undefined) { return; }
    this.cardCreatedCount++;
    const newCard = { id: this.cardCreatedCount, text };
    list.cards.push(newCard);
  }
}
</script>

<style lang="scss" scoped>
.board {
  display: flex;

  > .list {
    margin: 1px;
  }
}

.control-area {
  margin-top: 20px;
  border: 1px solid #000000;
}
</style>
