<template>
  <div>
    {{ card.text }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ICard } from '@/types';

@Component
export default class Card extends Vue {
  @Prop({ type: Object, required: true })
  private card!: ICard;
}
</script>
