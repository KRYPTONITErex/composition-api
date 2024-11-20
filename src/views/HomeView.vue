<template>
  <div class="home">
    <input 
      type="text" v-model="search" placeholder="Search positions..." class="search-input"/>
    
    <h3 class="search-heading">Search: {{ search }}</h3>

    <div class="positions-container">
      
      <h4 v-for="position in filterPositions" :key="position" class="position-item">
        Positions: {{ position }}
      </h4>

      <p v-if="filterPositions.length === 0" class="no-results">
        No positions found.
      </p>

    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    let search = ref("");

    let positions = ref([
      "Warranty Controller",
      "Training Coordinator",
      "Certified Dealer Instructor",
      "Assistant AFS & Service Manager",
      "AFS assistant Service Manager",
    ]);

    let filterPositions = computed(() => {
      return positions.value.filter((position) => {
        return position.includes(search.value);
      });
    });

    return { positions, filterPositions, search };
  },
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
}

.search-heading {
  font-size: 18px;
  margin-bottom: 10px;
  color: #555;
}

.positions-container {
  margin-top: 20px;
}

.position-item {
  padding: 10px;
  margin: 5px 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
}

.no-results {
  margin-top: 10px;
  font-style: italic;
  color: #999;
}
</style>