/* 1. Napisz promise, który:.
   - spełnia się po 3 sekundach
   - zwraca wartość 'Hura mój pierwszy Promise!'
 */

const promise = new Promise((resolve, reject) => {
    let date = new Date();

    setTimeout(() => {
        let time = new Date() - date;
        resolve('Hura, mój pierwszy Promise! Rozwiązał się w: ' + time)
    }, 3000)
});

promise.then(msg => console.log(msg));

/* 2. Rozważ po ilu sekundach pojawi się console.log('Gotowe') - (PS. nie wklejaj od razu do konsoli, pomyśl :));
 */

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Gotowe!'), 5000);
});

setTimeout(() => {
    myPromise.then(val => console.log(val));
}, 6000);

/* 3. Napisz funkcję, która przyjmuje parametr "number" i zwraca promise, który.
   - spełnia się po "number" sekundach jeżeli "number" jest mniejszy niż 5
   - zwraca wartość 'Promise? To takie proste!'
   - odrzuca wartość 'Cholibcia, ale to długo...'
 */

const numberPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number < 5) {
            setTimeout(() => {
                resolve('Promise? To takie proste!')
            }, number * 1000);
        } else {
            setTimeout(() => {
                reject('Cholibcia, ale to długo...')
            }, number * 1000);
        }
    })
};

numberPromise(3)
    .then(response => console.log(response))
    .catch(err => console.log(err));

numberPromise(6)
    .then(response => console.log(response))
    .catch(err => console.log(err));


/* 4. Napisz funkcję, która przyjmuje parametr "day" i zwraca promise, który:.
   - spełnia się po 5 sekundach
   - jeśli dzień jest zgodny z dzisiaj, to promise się spełnia i zwraca obiekt z kluczem time o wartosci aktualnej godziny
   - jeśli dzień jest inny, to promise ma być odrzucony (reject) z obiektem o kluczu "message" i wartości "Incorrect day, let's reject it!"
 */

const dayTable = {
    'Niedziela': 0,
    'Poniedziałek': 1,
    'Wtorek': 2,
    'Środa': 3,
    'Czwartek': 4,
    'Piątek': 5,
    'Sobota': 6,
};

const dayMapper = (day) => dayTable[day];

const checkDay = (day) => {
    return new Promise((resolve, reject) => {
        const today = new Date();

        if (day === today.getDay()) {
            setTimeout(() => {
                resolve({
                    time: today.getHours()
                })
            }, 5000);
        } else {
            reject('Incorrect day, let\'s reject it!');
        }
    })
};

checkDay(dayMapper('Niedziela'))
    .then(time => console.log(time))
    .catch(err => console.log(err));

checkDay(dayMapper('Poniedziałek'))
    .then(time => console.log(time))
    .catch(err => console.log(err));


/* 5. Korzystając z funkcji fetch, wyświetl użytkowników w elemencie <table> */
/* SCHEMAT TABLICY: avatar | name | surname | email | gender | age */
/* LINK do serwera: https://randomuser.me/api */
/* LINK do dokumentacji: https://randomuser.me/documentation */
/* (*) Pobierz tylko 10 osób o polskiej narodowości.  */
const tableBody = document.querySelector('#user-table tbody');
const message = document.getElementById('message');

const createCellWithText = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;

    return cell;
};

const createCellAvatar = (url) => {
    const cell = document.createElement('td');
    const img = document.createElement('img');
    img.setAttribute('alt', 'avatar');
    img.setAttribute('src', url);
    cell.appendChild(img);

    return cell;
};

fetch('https://randomuser.me/api?results=10')
    .then(response => response.json())
    .then(responseObject => {
        const data = responseObject.results;

        data.forEach(user => {
            const row = document.createElement('tr');

            [
                createCellAvatar(user.picture.thumbnail),
                createCellWithText(user.name.first),
                createCellWithText(user.name.last),
                createCellWithText(user.email),
                createCellWithText(user.gender),
                createCellWithText(user.dob.age)
            ].forEach(cell => {
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });

        return data.length;
    })
    .then((userLength) => {
        message.innerHTML = `<strong>${userLength}</strong> users have been loaded successfully`;
    })
    .catch((err) => {
        message.innerText = `Some error occurred.`;
    });


/* 6. Na sukces wyświetlenia do tabeli, wyświetl na górze strony informację (np. w paragrafie)
 "_NUMBER_ users have been loaded successfully"
 */

/* 7. Na error wyświetlenia danych w tabeli, wyświetl na górze strony informację (np. w paragrafie)
 "Some error occured."
 */

/* 8. Dane są dwa endpointy:
1) https://jsonplaceholder.typicode.com/albums
2) https://jsonplaceholder.typicode.com/users/1
Wyświetl w konsoli "name" usera i należące do niego albumy w postaci obiektu:
    {
        name: nazwa usera
        albums: tablica albums konkretnie tylko dla tego usera (przefiltruj tablice porównując userId i id)
    }
    (*) - przedstaw to w HTML
 */

const fetchAlbums = () => {
    return fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json());
};

const fetchUserData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json());
};

Promise.all([
    fetchAlbums(),
    fetchUserData()
]).then(data => {
    const albums = data[0];
    const userData = data[1];

    const usersAlbums = albums.filter(album => {
        return album.userId === userData.id
    });

    console.log({
        name: userData.name,
        albums: usersAlbums
    })
});

/* 9. Dany jest endpoint:
https://jsonplaceholder.typicode.com/albums
Stwórz przycisk "Pobierz albumy", który po kliknięciu pobierze dane.
jak zaczyna się pobieranie wyświetla napis "Loading..." albo jakiś loader,
po zakończeniu pobierania danych lub w przypadku błędu, napis loading ma zniknąć.
*/

// const btn = document.getElementById('fetch-albums-btn');
// const getAlbums = () => {
//     btn.innerText = "Loading ...";
//     btn.disabled = true;
//     fetchAlbums()
//         .finally(() => {
//             btn.innerText = "Pobierz albumy";
//             btn.disabled = false;
//         })
// };

// btn.addEventListener('click', getAlbums);


/* 10. Dany jest kod: */
const ul = document.querySelector('ul');
function displayUsers() {
    fetch('https://randomuser.me/api?results=10')
        .then(response => response.json())
        .then(users => ul.innerHTML = users.results.map(q => `<li>${q.name.first}</li>`).join(''));
}
/* Napisz powyższy kod w składni async await. */

async function asyncDisplayUsers() {
    try {
        const response = await fetch('https://randomusdaser.me/api?results=10');
        const users = await response.json();

        ul.innerHTML = users.results.map(q => `<li>${q.name.first}</li>`).join('');
    } catch (err) {
        alert(err);
    }
}

/* 11. Zadanie numer 8. przerób na składnię async await.
 a) dalej używając Promise.all
 b) pozbywajac się Promise.all
 */

const asyncFetchAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await response.json();

    return albums;
};

const asyncFetchUserData = async () => {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json());
};

(async () => {
    const albums = await asyncFetchAlbums();
    const userData = await asyncFetchUserData();
})();

(async () => {
    const data = await Promise.all([
        asyncFetchAlbums(),
        asyncFetchUserData()
    ]);

    console.log(data)
})();


/* 12. Zadanie numer 10 umieść w bloku try / catch i obsłuż błędy. W przypadku błędu wyświetl alert z błędem.
 */

/* 13 (*). Dane są endpointy:
1) https://jsonplaceholder.typicode.com/albums
2) https://jsonplaceholder.typicode.com/users
Stwórz formularz i przycisk "pobierz albumy użytkownika".
Po wpisaniu nazwy użytkownika i kliknięcia przycisuku wyświetla jego albumy pod formularzem.
 */
const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
};

const input = document.querySelector('#form input');
const button = document.querySelector('#form button');
const list = document.querySelector('ul');

button.addEventListener('click', async (event) => {
    event.preventDefault();
    const userName = input.value.toLowerCase();
    try {
        button.disabled = true;
        const data = await Promise.all([fetchAlbums(), fetchUsers()]);
        button.disabled = false;
        const albums = data[0];
        const users = data[1];

        const searchedUser = users.find(user => {
            return user.name.toLowerCase().includes(userName)
        });
        const filteredAlbums = albums.filter(album => {
            return searchedUser.id === album.userId
        });
        console.log(searchedUser)
        console.log(filteredAlbums)
        list.innerHTML = filteredAlbums.map(album => `<li>${album.title}</li>`).join("");
    } catch (err) {
        button.disabled = false;
        console.log(err)
    }

});

/* 14. Wyświetl w consoli następujące console.logi:
1. console.log('1')
2. setTimeout(() => console.log('2'), 300)
3. setTimeout(() => console.log('3'), 0)
4. new Promise((resolve, reject) => resolve('4')).then(resolve => console.log(resolve))
5. console.log('5')
6. setTimeout(() => console.log('6'), 0)
7. new Promise((resolve, reject) => resolve('7')).then(resolve => console.log(resolve))
8. console.log('8')
Zastanów się nad kolejnością ich wyświetlania.
 */