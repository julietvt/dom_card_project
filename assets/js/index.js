const users = [
  {
    id: 1,
    name: 'name1',
    surname: 'surname1',
    imageSrc: '#',
  },
  {
    id: 2,
    name: 'name2',
    surname: 'surname2',
    imageSrc: '#',
  },
  {
    id: 3,
    name: 'name3',
    surname: 'surname3',
    imageSrc: '#',
  },
];

const userListElem = document.getElementById('userList');

users.forEach((user) => {
  userListElem.append(createUserListElem(user));
});

function createUserListElem(user) {
  // создание нового элемента списка
  const userListItemElem = document.createElement('li');

  // контейнер для карточки/ новая карточка
  const userCardWrapperElem = document.createElement('div');
  //userCardWrapperElem.setAttribute("class","userCardWrapper");
  userCardWrapperElem.classList.add('userCardWrapper');

  // контейнер для изображения пользователя
  const userImageContainerElem = document.createElement('div');
  userImageContainerElem.classList.add('userImageContainer');

  // само изображение пользователя
  const userImageElem = document.createElement('img');
  userImageElem.classList.add('userImage');
  userImageElem.setAttribute('src', user.imageSrc);
  userImageElem.setAttribute('alt', 'user photo');

  // присоединяем изображение в контейнер изображения
  userImageContainerElem.append(userImageElem);
  // присоединяем контейнер фото в карточку
  userCardWrapperElem.append(userImageContainerElem);

  // создание fullname
  const userFullNameElem = document.createElement('h1');
  userFullNameElem.innerText = `${user.name} ${user.surname}`;
  userCardWrapperElem.append(userFullNameElem);

  // присоединяем карточку в li
  userListItemElem.append(userCardWrapperElem);
  // устанавливаем новый атрибут для li <li id=1></li>
  userListItemElem.setAttribute('id', user.id);

  return userListItemElem;
}
