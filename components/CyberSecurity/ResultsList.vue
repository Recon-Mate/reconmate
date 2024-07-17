<template>
  <div class="results-list">
    <p>
      Found {{ results.length }} resources related to
      <strong>{{ query }}</strong>
    </p>
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in paginatedResults" :key="result.id">
          <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
          <td>
            <strong>{{ result.title }}</strong>
          </td>
          <td>
            <a :href="result.link" target="_blank">{{ result.link }}</a>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="pagination">
      <button
        @click="currentPage > 1 ? currentPage-- : 0"
        :disabled="currentPage === 1"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        @click="currentPage++"
        :disabled="currentPage * pageSize >= results.length"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['results', 'query'],
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    paginatedResults() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.results.slice(start, end);
    },
    totalPages() {
      // Add this computed property
      return Math.ceil(this.results.length / this.pageSize);
    },
  },
};
</script>

<style scoped>
.results-list {
  margin-bottom: 20px; /* Add margin at the bottom of the results list */
}

.results-list table {
  width: 100%;
  border-collapse: collapse;
}

.results-list th,
.results-list td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.results-list th {
  background-color: #f4f4f4;
}

.results-list a {
  color: #007bff; /* Example: blue color for links */
  text-decoration: none; /* Removes underline */
}

.table-container {
  overflow-x: auto;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
}
</style>
