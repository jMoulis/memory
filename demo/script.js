document.addEventListener('DOMContentLoaded', () => {
  /** valeur primitive
   * number
   * string
   * array
   * object
   * boolean
   *
   *
   *
   */
  //
  /** variable
   *  const
   *  let
   */
  // function

  const age = 20;
  const ageFois2 = age * 2;
  // console.log(ageFois2);

  const prenom = 'Jean';
  const lastname = 'Dupont';

  const fullname = `${prenom} ${lastname} a ${ageFois2}ans`;

  // console.log(prenom);
  // console.log(lastname);
  // console.log(fullname);

  const tableau = [5, 9, 2];
  const total = tableau.reduce((acc, value, index) => {
    return acc * value;
  }, 2);
  const value1 = tableau[0];
  const value2 = tableau[1];
  // console.log(value1 + value2);
  // console.log(total);

  const personne = {
    firstName: '',
    lastName: '',
    age: 0
  };

  const first = 1;
  const second = 2;
  const totalFirst = first + second;

  const third = 3;
  const fourth = 4;
  const totalSecond = third + fourth;

  function addTwoNumbers(number1, number2) {
    return number1 + number2;
  }
  const addition1 = addTwoNumbers(11250, 25945121);

  const createPerson = (firstName, lastName, age) => {
    return {
      firstName,
      lastName,
      age,
      fullName: `${firstName} ${lastName}`
    };
  };

  const persons = [
    ['marcel', 'dupont', 25],
    ['jean', 'dupont', 25],
    ['jean', 'dupont', 25],
    ['jean', 'dupont', 25],
    ['jean', 'dupont', 25],
    ['jean', 'dupont', 25],
    ['jean', 'dupont', 25],
    ['jean', 'dupont', 25],
    ['jean', 'dupont', 25],
    ['jean', 'dupont', 25],
    ['jean', 'dupont', 25],
    ['jean', 'dupont', 25]
  ];

  const personsObject = persons.map((person) => {
    return createPerson(person[0], person[1], person[2]);
  });

  const button = document.getElementById('change-color');

  const list = document.createElement('ul');

  const createDOMPerso = (person) => {
    const listItem = document.createElement('li');

    const firstname = document.createElement('span');
    firstname.innerText = person.firstName;

    const lastname = document.createElement('span');
    lastname.innerText = person.lastName;

    const age = document.createElement('span');
    age.innerText = person.age;

    const fullName = document.createElement('span');
    fullName.innerText = person.fullName;

    listItem.appendChild(firstname);
    listItem.appendChild(lastname);
    listItem.appendChild(age);
    listItem.appendChild(fullName);

    list.appendChild(listItem);
  };

  personsObject.forEach(createDOMPerso);

  document.body.appendChild(list);
  button.addEventListener('click', () => {
    // Quand je clique je veux récupérer tous les éléments avec la classe marcel
    // Je ajouter la julien
    const marcels = document.querySelectorAll('.marcel');

    marcels.forEach((marcel) => {
      marcel.classList.toggle('julien');
    });
    console.log(marcels);
  });
  console.log(button);
});
