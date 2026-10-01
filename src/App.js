import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import initialTask from "./data/tasks";

function App() {
    const [tasks, setTasks] = useState(initialTask);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const addTask = (title) => {
        const newTask = {
            id: Date.now(),
            title: title,
            completed: false,
        };

        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const filteredTasks = tasks.filter((task) => {
        const matchSearch = task.title
            .toLowerCase()
            .includes(search.toLowerCase());

        if (filter === "active") {
            return !task.completed && matchSearch;
        }

        if (filter === "completed") {
            return task.completed && matchSearch;
        }

        return matchSearch;
    });

    const completedCount = tasks.filter((task) => task.completed).length;
    const activeCount = tasks.length - completedCount;

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <div className="task-container">
                <Header
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <TaskForm addTask={addTask} />

                <div className="task-tools">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">Tất cả</option>
                        <option value="active">Chưa làm</option>
                        <option value="completed">Hoàn thành</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="task-stats">
                    Tổng: {tasks.length} | Chưa làm: {activeCount} | Hoàn thành: {completedCount}
                </div>

                <TaskList
                    tasks={filteredTasks}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                />
            </div>
        </div>
    );
}

export default App;