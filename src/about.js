const aboutPage = () => {
  const contentContainer = document.getElementById('content');

  contentContainer.innerHTML = '';

  const h1 = document.createElement('h1');
  h1.textContent = 'Meistä';
  contentContainer.appendChild(h1);

  const email = document.createElement('p');
  email.textContent = 'Email: joulu@ruoka.com';
  contentContainer.appendChild(email);

  const phone = document.createElement('p');
  phone.textContent += 'Puh: 000 000 0000';
  contentContainer.appendChild(phone);

  const address = document.createElement('p');
  address.textContent += 'Jouluruokakuja 1';
  contentContainer.appendChild(address);
};

export { aboutPage };
