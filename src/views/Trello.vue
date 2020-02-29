<template>
  <div class="trello">
    <List v-for="list in lists" :key="list.id" :list=list />
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
}
</script>

<style lang="scss" scoped>
.trello {
  display: flex;

  > .list {
    margin: 1px;
  }
}
</style>
