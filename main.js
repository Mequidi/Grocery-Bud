const form = document.querySelector(".grocery-form");
const alertMessage = document.querySelector(".alert");
// const editBtn = document.querySelector(".edit-btn");
// const deleteBtn = document.querySelector(".delete-btn");
const clearBtn = document.querySelector(".clear-btn");
const input = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = input.value;
    const id = new Date().getTime().toString();
    console.log(id)

    if (value && !editFlag) {
        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        element.innerHTML = `
                            <p class="item">${value}</p>
                            <div class="btn-container">
                               <button class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="delete-btn">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        `;

        list.appendChild(element);
        
        //addEventListener here as earlier they wherent even made!
        const editBtn = document.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);
        const deleteBtn = document.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);

        displayMessage("items added","success");
    } else if (value && editFlag) {
        console.log("editing");
    } else {
        displayMessage("please enter value", "danger");
    }

})

function displayMessage(message, type) {
    alertMessage.classList.add(`alert-${type}`)
    alertMessage.textContent = message;
    setTimeout(function () {
        alertMessage.textContent = "";
        alertMessage.classList.remove(`alert-${type}`);
    }, 1000);
}

function editItem() {
    console.log("edit");
}

function deleteItem() {
    console.log("delete")
}