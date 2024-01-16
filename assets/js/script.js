document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var query = document.getElementById("searchInput").value;
    search(query);
  });

/**
 * Description placeholder
 * @date 1/15/2024 - 3:19:23 PM
 *
 * @param {*} query
 */
function search(query) {
  // Perform search logic here
  // You can use AJAX to fetch search results from a server or perform client-side filtering
  // Display the search results in the 'searchResults' div
  var searchResults = document.getElementById("searchResults");
  var searchContents = document.getElementById("searchContents");
  if (query == "flowerful" || query == "Flowerful" || query == "FLOWERFUL") {
    var result =
      "Diadakan pada tanggal 17 Desember 2023 di Graha Unesa Surabaya";
  } else if (
    query == "vc" ||
    query == "video call" ||
    query == "VC" ||
    query == "videocall"
  ) {
    result =
      "Fans JKT48 yang terhormat, kami mohon maaf atas ketidaknyamanannya. Sehubungan dengan masih terdapatnya pembatasan akses masuk ke situs web JKT48, imbas tingginya antusiasme fans JKT48 yang ingin membeli tiket VC. Pembatasan akses masuk ke situs web tercinta akan dilakukan sampai waktu yang belum dapat ditentukan. Terima kasih.";
  } else if (
    query == "live streaming" ||
    query == "streaming" ||
    query == "live stream" ||
    query == "stream"
  ) {
    result =
      "Fans JKT48 yang terhormat, kami mohon maaf atas ketidaknyamanannya. Sehubungan dengan masih terdapatnya perbaikan serta pengecekan baik pada jaringan maupun perangkat lunak, maka live streaming ditiadakan untuk sementara waktu. Jika live streaming dilanjutkan, informasi tersebut akan disampaikan sesegera mungkin setelah perbaikan selesai. Terima kasih.";
  } else {
    result =
      "Maaf, kami tidak dapat menemukan hasil pencarian untuk: " +
      query +
      ". Silahkan coba lagi.";
  }
  searchContents.textContent =
    "Hasil pencarian untuk: " + query;
  searchResults.textContent =  
    result;
}
