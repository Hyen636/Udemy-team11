const sliderContainer = document.querySelector(".slider__wrapper__container");
const sliderController = document.querySelector(".slider__wrapper__controller");
const leftBtn = sliderController.querySelector(
  ".slider__wrapper__controller__left"
);
const rightBtn = sliderController.querySelector(
  ".slider__wrapper__controller__right"
);
const paginationContainer = sliderController.querySelector(
  ".slider__wrapper__controller__pagination"
);

let order = 1;
const listLength = sliderContainer.childElementCount;
const center = Math.round(listLength / 2);

const createPagination = () => {
  for (let i = 0; i < listLength; i++) {
    const pagination = document.createElement("span");
    pagination.classList.add("pagination");
    pagination.id = i + 1;
    paginationContainer.append(pagination);
    if (i === 0) {
      pagination.classList.add("checked");
    }
  }
};

const checkPagination = (order, onRight) => {
  const paginations = paginationContainer.querySelectorAll(".pagination");
  paginations.forEach((pagination) => {
    if (+pagination.id === order) {
      pagination.classList.remove("checked");
    }
  });
  if (order === listLength && onRight) {
    paginations.forEach((pagination) => {
      if (+pagination.id === 1) {
        pagination.classList.add("checked");
      }
    });
  } else if (order === 1 && !onRight) {
    paginations.forEach((pagination) => {
      if (+pagination.id === listLength) {
        pagination.classList.add("checked");
      }
    });
  } else if (onRight) {
    paginations.forEach((pagination) => {
      if (+pagination.id === order + 1) {
        pagination.classList.add("checked");
      }
    });
  } else {
    paginations.forEach((pagination) => {
      if (+pagination.id === order - 1) {
        pagination.classList.add("checked");
      }
    });
  }
};

const onOddLeft = () => {
  checkPagination(order, false);
  order = order - 1;
  if (order === 0) {
    onEnd();
  } else if (order === 1) {
    onStart();
  } else if (order < center) {
    sliderContainer.style.transform = `translateX(${
      (center - order) * (1 / listLength) * 100
    }%)`;
  } else if (order > center) {
    sliderContainer.style.transform = `translateX(-${
      ((order - center) / listLength) * 100
    }%)`;
  } else {
    sliderContainer.style.transform = `translateX(0%)`;
  }
};

const onOddRight = () => {
  checkPagination(order, true);
  order = order + 1;
  if (order > listLength) {
    onStart();
  } else if (order < center) {
    sliderContainer.style.transform = `translateX(${
      (center - order) * (1 / listLength) * 100
    }%)`;
  } else if (order > center) {
    sliderContainer.style.transform = `translateX(-${
      ((order - center) / listLength) * 100
    }%)`;
  } else {
    sliderContainer.style.transform = `translateX(0%)`;
  }
};

const onEvenLeft = () => {
  order = order - 1;
  if (order === 0) {
    onEnd();
  } else if (order === 1) {
    onStart();
  } else if (order < center) {
    sliderContainer.style.transform = `translateX(${
      (center - order) * (1 / listLength) * 100 + (1 / listLength) * 50
    }%)`;
  } else if (order > center) {
    sliderContainer.style.transform = `translateX(-${
      ((order - center) / listLength) * 100 - (1 / listLength) * 50
    }%)`;
  } else {
    sliderContainer.style.transform = `translateX(${(1 / listLength) * 50}%)`;
  }
};

const onEvenRight = () => {
  order = order + 1;
  if (order > listLength) {
    onStart();
  } else if (order < center) {
    sliderContainer.style.transform = `translateX(${
      (center - order) * (1 / listLength) * 100 + (1 / listLength) * 50
    }%)`;
  } else if (order > center) {
    sliderContainer.style.transform = `translateX(-${
      ((order - center) / listLength) * 100 - (1 / listLength) * 50
    }%)`;
  } else {
    sliderContainer.style.transform = `translateX(${(1 / listLength) * 50}%)`;
  }
};

const onStart = () => {
  order = 1;
  if (listLength % 2 === 0) {
    sliderContainer.style.transform = `translateX(${
      (Math.floor(listLength / 2) / listLength) * 100 - (1 / listLength) * 50
    }%)`;
  } else {
    sliderContainer.style.transform = `translateX(${
      (Math.floor(listLength / 2) / listLength) * 100
    }%)`;
  }
};

const onEnd = () => {
  order = listLength;
  if (listLength % 2 === 0) {
    console.log(1);
    sliderContainer.style.transform = `translateX(-${
      (Math.floor(listLength / 2) / listLength) * 100 - (1 / listLength) * 50
    }%)`;
  } else {
    sliderContainer.style.transform = `translateX(-${
      (Math.floor(listLength / 2) / listLength) * 100
    }%)`;
  }
};

if (listLength % 2 === 0) {
  rightBtn.addEventListener("click", onEvenRight);
  leftBtn.addEventListener("click", onEvenLeft);
} else {
  rightBtn.addEventListener("click", onOddRight);
  leftBtn.addEventListener("click", onOddLeft);
}

onStart();
createPagination();
