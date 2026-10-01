import { memo } from "react";

const TaskItem = ({ task, deleteTask, toggleTask }) => {
    return (
        <div className="task-item">
            <div
                className={task.completed ? "task-title completed" : "task-title"}
                onClick={() => toggleTask(task.id)}
            >
                <span className="checkbox">
                    {task.completed ? "☑" : "☐"}
                </span>

                <span>{task.title}</span>
            </div>

            <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
            >
                [Xóa]
            </button>
        </div>
    );
};

export default memo(TaskItem);