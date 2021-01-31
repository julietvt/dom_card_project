const users = [
  {
    id: 1,
    name: 'Спанч ',
    surname: 'Боб',
    imageSrc:
      'https://images.ua.prom.st/805654045_w640_h640_multyashnye-geroi.jpg',
  },
  {
    id: 2,
    name: 'Джерри',
    surname: 'Дисней',
    imageSrc:
      'https://i.pinimg.com/originals/b6/25/e8/b625e8f89436ec24e16d8cf48e5cd2a9.jpg',
  },
  {
    id: 3,
    name: 'Микки',
    surname: 'Маус',
    imageSrc: 'https://dekatop.com/wp-content/uploads/2015/11/mult_01.jpg',
  },
  {
    id: 4,
    name: 'Пикачу',
    surname: 'Покемон',
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg7Q36OrMbp78FIZNRXJExfXRi0CP87a7dOWN4JDy_I2aaZECD&usqp=CAU',
  },
  {
    id: 5,
    name: 'Волк',
    surname: 'Ну Погоди!',
    imageSrc:
      'https://cs6.pikabu.ru/images/big_size_comm/2015-04_3/1428752470910.jpg',
  },
];

const userListElem = document.getElementById('userList');

users.forEach((user) => {
  userListElem.append(createUserListElem(user));
});

function createUserImageElem({ imageSrc }) {
  const userImageContainerElem = document.createElement('div');
  userImageContainerElem.classList.add('userImageContainer');
  const userImageElem = document.createElement('img');
  userImageElem.classList.add('userImage');
  userImageElem.setAttribute('src', imageSrc);
  userImageElem.setAttribute('alt', 'user photo');
  userImageContainerElem.append(userImageElem);
  return userImageContainerElem;
}

function createUserFullNameElem({ name, surname }) {
  const userFullNameElem = document.createElement('div');
  userFullNameElem.innerText = `${name} ${surname}`;
  return userFullNameElem;
}

//создание 1 новой карточки
function createUserCardElem(user) {
  const userCardWrapperElem = document.createElement('div');
  userCardWrapperElem.classList.add('userCardWrapper');
  userCardWrapperElem.append(createUserImageElem(user));
  userCardWrapperElem.append(createUserFullNameElem(user));
  return userCardWrapperElem;
}

function createUserListElem(user) {
  // создание нового элемента списка
  const userListItemElem = document.createElement('li');
  // присоединяем карточку в li
  userListItemElem.append(createUserCardElem(user));
  // устанавливаем новый атрибут для li <li id=1></li>
  userListItemElem.setAttribute('id', user.id);
  return userListItemElem;
}
