const cartBtns = document.querySelectorAll(".food__list__box button");
const cartList = document.querySelector(".cart__list");

const printFood = (name, price, id) => {
  const cartListBox = document.createElement("li");
  const countBox = document.createElement("span");
  cartListBox.innerText = `${name} - ${price}`;
  countBox.innerText = "1개";
  cartListBox.append(countBox);
  cartListBox.id = `list${id}`;
  cartList.append(cartListBox);
};

const addFood = (event) => {
  const {
    target: { parentNode },
  } = event;

  const cartListBoxs = document.querySelectorAll(".cart__list li");
  const idArray = [];

  cartListBoxs.forEach((box) => {
    if (`list${parentNode.id}` === box.id) {
      idArray.push(box.id);
    }
  });

  const exist = idArray.includes(`list${parentNode.id}`);

  if (exist) {
    cartListBoxs.forEach((box) => {
      if (`list${parentNode.id}` === box.id) {
        const count = +box.children[0].textContent.substring(
          0,
          box.children[0].textContent.length - 1
        );
        box.children[0].innerText = `${count + 1}개`;
      }
    });
  } else {
    const foodName = parentNode.children[0].textContent;
    const foodPrice = parentNode.children[1].textContent;
    printFood(foodName, foodPrice, parentNode.id);
  }
};

cartBtns.forEach((btn) => btn.addEventListener("click", addFood));
