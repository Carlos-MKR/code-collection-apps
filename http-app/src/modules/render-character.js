import { fetchData } from "./fetch-api";

export const createCharacterCard = (character, element) => {
    element.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'card fade-in'; // Agregamos clase animada

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'card-image-wrapper';

    const image = document.createElement('img');
    image.src = character.image;
    image.alt = character.name;
    image.className = 'card-image';
    imageWrapper.appendChild(image);

    const info = document.createElement('div');
    info.className = 'card-info';

    const name = document.createElement('h2');
    name.textContent = character.name;
    name.className = 'card-name';

    const species = document.createElement('p');
    species.textContent = `Species: ${character.species}`;
    species.className = 'card-text';

    const gender = document.createElement('p');
    gender.textContent = `Gender: ${character.gender}`;
    gender.className = 'card-text';

    const status = document.createElement('p');
    status.textContent = `Status: ${character.status}`;
    status.className = 'card-text';

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.id = 'next-button';
    nextButton.className = 'next-button';

    nextButton.addEventListener('click', () => {
        element.innerHTML = '<span style="color: black;">LOADING...</span>';
        fetchData()
            .then((character) => createCharacterCard(character, element))
            .catch((error) => console.log(error));
    });

    info.appendChild(name);
    info.appendChild(species);
    info.appendChild(gender);
    info.appendChild(status);
    info.appendChild(nextButton);

    card.appendChild(imageWrapper);
    card.appendChild(info);

    element.appendChild(card);
};
