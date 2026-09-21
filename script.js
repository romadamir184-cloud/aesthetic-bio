
const enterButton = document.getElementById("enter");

enterButton.addEventListener("click", function () {

    enterButton.textContent = "LOADING...";

    document.body.classList.add("opened");

    setTimeout(function () {

        // Позже здесь откроем страницу друзей:
        // window.location.href = "friends.html";

    }, 900);

});

