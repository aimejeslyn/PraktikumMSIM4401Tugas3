<template>
  <div class="crypto-container">
    <button @click="fetchData" class="refresh-button">Refresh</button>
    <table class="crypto-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>USD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="crypto in cryptos" :key="crypto.id">
          <td>{{ crypto.rank }}</td>
          <td>{{ crypto.name }}</td>
          <td>{{ parseFloat(crypto.price_usd).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CryptoList",
  data() {
    return {
      cryptos: [], // Tempat menyimpan data dari API
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://api.coinlore.net/api/tickers/");
        this.cryptos = response.data.data; // Mengambil data dari API
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    },
  },
  created() {
    this.fetchData(); // Memuat data saat komponen pertama kali dibuat
  },
};
</script>

<style>
.crypto-container {
  text-align: center;
  margin: 20px auto;
}

.refresh-button {
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.refresh-button:hover {
  background-color: #0056b3;
}

.crypto-table {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

.crypto-table th,
.crypto-table td {
  border: 1px solid #ebdca1;
  padding: 8px;
  text-align: center;
}

.crypto-table th {
  background-color: #ebdca1;
  font-weight: bold;
}

.crypto-table tr:nth-child(even) {
  background-color: #ebdca1;
}

.crypto-table tr:hover {
  background-color: #ebdca1;
}
</style>
