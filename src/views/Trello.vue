<template>
  <div class="trello">
    <h1>This is an trello page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IList } from '@/types';
import { createInitialLists } from '@/initialData';

@Component
export default class Trello extends Vue {
  public lists: IList[] = createInitialLists();
}
</script>
