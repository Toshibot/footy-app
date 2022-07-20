<template>
  <img 
    :src="source"
    :width="size"
    :height="size"
  />
</template>

<script lang="ts">

export default {
  props: {
    source: {
      required: true,
      type: String
    },
    size: {
      required: false,
      type: Number
    }
  }
}
</script>