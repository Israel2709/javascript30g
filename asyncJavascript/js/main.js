let x = 10;
console.log(x);
//async / await

const getAllUsers = async () => {
  let response = await fetch(
    "https://javascript30js-default-rtdb.firebaseio.com/users/.json"
  );
  let data = await response.json();
  console.log(data);
};

const saveUser = async () => {
  let response = await fetch(
    "https://javascript30js-default-rtdb.firebaseio.com/users/.json",
    {
      method: "POST",
      body: JSON.stringify({ name: "Gerardo", lastname: "Nuncio" }),
    }
  );
  let data = await response.json();
  console.log(data);
};
