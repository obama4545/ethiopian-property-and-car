const postPropertyBtn = document.getElementById('postPropertyBtn');
const viewListingsBtn = document.getElementById('viewListingsBtn');
const listingsSection = document.getElementById('listingsSection');
const formSection = document.getElementById('formSection');
const listingForm = document.getElementById('listingForm');
const listingsContainer = document.getElementById('listings');
const searchInput = document.getElementById('searchInput');

postPropertyBtn.addEventListener('click', () => {
  formSection.classList.remove('hidden');
  listingsSection.classList.add('hidden');
});

viewListingsBtn.addEventListener('click', () => {
  formSection.classList.add('hidden');
  listingsSection.classList.remove('hidden');
});

listingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const type = document.getElementById('type').value;
  const location = document.getElementById('location').value;
  const price = document.getElementById('price').value;
  const phone = document.getElementById('phone').value;
  const imageFile = document.getElementById('image').files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const listing = document.createElement('div');
    listing.classList.add('listing-card');
    listing.innerHTML = `
      <img src="${reader.result}" width="100%" height="200px" style="object-fit:cover;" />
      <h3>${title}</h3>
      <p>Type: ${type}</p>
      <p>Location: ${location}</p>
      <p>Price: ${price} ETB</p>
      <p>📞 ${phone}</p>
    `;
    listingsContainer.appendChild(listing);
    listingForm.reset();
    alert('✅ ንብረት ተጨምሯል / Property added!');
  };
  if (imageFile) {
    reader.readAsDataURL(imageFile);
  }
});

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const listings = document.querySelectorAll('.listing-card');
  listings.forEach((card) => {
    const location = card.querySelector('p:nth-child(4)').innerText.toLowerCase();
    card.style.display = location.includes(searchTerm) ? 'block' : 'none';
  });
});