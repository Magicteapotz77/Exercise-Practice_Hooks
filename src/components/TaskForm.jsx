import { useRef, useState } from "react";

const TaskForm = ({ addTask }) => {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = input.trim();

        if (!text) {
            inputRef.current?.focus();
            return;
        }

        addTask(text);
        setInput("");
        inputRef.current?.focus();
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Nhập tên công việc........"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit">
                Thêm
            </button>
        </form>
    );
};

export default TaskForm;