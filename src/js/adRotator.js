const ads = [
  { img: '../public/images/ad1.jpg', link: '#', alt: 'Ad 1 description' },
  { img: '../public/images/ad2.jpg', link: '#', alt: 'Ad 2 description' },
  { img: '../public/images/ad3.jpg', link: '#', alt: 'Ad 3 description' },
  { img: '../public/images/ad4.jpg', link: '#', alt: 'Ad 4 description' },
  { img: '../public/images/ad5.jpg', link: '#', alt: 'Ad 5 description' },
  { img: '../public/images/ad6.jpg', link: '#', alt: 'Ad 6 description' },
  { img: '../public/images/ad7.jpg', link: '#', alt: 'Ad 7 description' },
  { img: '../public/images/ad8.jpg', link: '#', alt: 'Ad 8 description' },
  { img: '../public/images/ad9.jpg', link: '#', alt: 'Ad 9 description' },
  { img: '../public/images/ad10.jpg', link: '#', alt: 'Ad 10 description' },
  { img: '../public/images/ad11.jpg', link: '#', alt: 'Ad 11 description' },
  { img: '../public/images/ad12.jpg', link: '#', alt: 'Ad 12 description' },
  { img: '../public/images/ad13.jpg', link: '#', alt: 'Ad 13 description' },
  { img: '../public/images/ad14.jpg', link: '#', alt: 'Ad 14 description' },
];

let current = 0;
const container = document.getElementById('ad-rotator');

function showAd(index) {
  const { img, link, alt } = ads[index];
  container.innerHTML = `
      <a href="${link}" target="_blank">
        <img src="${img}" alt="${alt}" />
      </a>`;
}

function nextAd() {
  current = (current + 1) % ads.length;
  showAd(current);
}

// Initial ad display
showAd(current);

// Rotate every 40 seconds (40000 ms)
setInterval(nextAd, 10000);
