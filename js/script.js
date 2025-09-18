
function showDetails(product) {
  const detailsDiv = document.getElementById('product-details');
  detailsDiv.innerHTML = `<h3>${product} Details</h3><p>More information about ${product} will go here.</p>`;
}
