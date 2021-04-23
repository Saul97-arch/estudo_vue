<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  // Expects that selectTopic is a function
  inject: ["selectTopic"],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>