document.addEventListener("DOMContentLoaded", function () {
    const registrationPage = document.getElementById("registrationPage");
    const loginPage = document.getElementById("loginPage");
    const dashboardPage = document.getElementById("dashboardPage");
    const showLoginPageLink = document.getElementById("showLoginPage");
    const showRegistrationPageLink = document.getElementById("showRegistrationPage");
    const statusFilter = document.getElementById("statusFilter");
    const activeTasksList = document.getElementById("activeTasks");
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");

    // Function to align text of all containers at center
    const alignTextCenter = () => {
        registrationPage.style.textAlign = "center";
        loginPage.style.textAlign = "center";
        dashboardPage.style.textAlign = "center";
    };

    alignTextCenter(); // Call the function to align text at center

    showRegistrationPageLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginPage.style.display = "none";
        registrationPage.style.display = "block";
        dashboardPage.style.display = "none"; // Hide dashboard page on registration
    });

    showLoginPageLink.addEventListener("click", function (event) {
        event.preventDefault();
        registrationPage.style.display = "none";
        loginPage.style.display = "block";
        dashboardPage.style.display = "none"; // Hide dashboard page on login
    });

    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (name && email && password) {
            const userData = {
                name: name,
                email: email,
                password: password
            };
            localStorage.setItem("userData", JSON.stringify(userData));

            registrationPage.style.display = "none";
            loginPage.style.display = "block";
            dashboardPage.style.display = "none"; // Hide dashboard page on registration
        } else {
            alert("Please fill in all fields.");
        }
    });

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email && password) {
            console.log("Login credentials:", { email, password });
            alert("Login successful!");
            loginPage.style.display = "none"; // Hide login page
            dashboardPage.style.display = "block"; // Display dashboard page
            registrationPage.style.display = "none"; // Hide registration page on login
            displayTasks(); // Display tasks on the dashboard
        } else {
            alert("Please fill in all fields.");
        }
    });

    statusFilter.addEventListener("change", function () {
        displayTasks();
    });

    function displayTasks() {
        // Dummy tasks for demonstration
        const tasks = [
            { id: 1, title: "Task 1", status: "active" },
            { id: 2, title: "Task 2", status: "active" },
            { id: 3, title: "Task 3", status: "active" }
        ];

        activeTasksList.innerHTML = "";

        tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task.title;

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.classList.add("edit-btn");
            editBtn.addEventListener("click", function () {
                const newText = prompt("Enter new task:");
                if (newText !== null && newText.trim() !== "") {
                    li.textContent = newText.trim();
                }
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", function () {
                li.remove();
            });

            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            activeTasksList.appendChild(li);
        });
    }

    taskForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", function () {
            const newText = prompt("Enter new task:");
            if (newText !== null && newText.trim() !== "") {
                li.textContent = newText.trim();
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        activeTasksList.appendChild(li);
    }

});


