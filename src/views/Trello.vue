<template>
  <div class="trello">
    <div class="board">
      <List v-for="list in lists" :key="list.id" :list=list />
    </div>
    <input type="text" @change="addList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from '@/components/List.vue';
import { IList } from '@/types';
import { createInitialLists } from '@/initialData';

@Component({
  components: {
    List,
  },
})
export default class Trello extends Vue {
  private lists: IList[] = createInitialLists();
  private listCreatedCount = this.lists.length;

  private addList(event: Event & { currentTarget: HTMLInputElement }): void {
    const newList = {
      id: this.listCreatedCount + 1,
      name: event.currentTarget.value,
      cards: [],
    };
    this.lists.push(newList);
    ++this.listCreatedCount;
    event.currentTarget.value = '';
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
</style>
