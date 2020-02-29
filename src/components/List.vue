<template>
  <div>
    {{ list.name }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IList } from '@/types';

@Component
export default class List extends Vue {
  @Prop({ type: Object, required: true })
  public list!: IList;
}
</script>
