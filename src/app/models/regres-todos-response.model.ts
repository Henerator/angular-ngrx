interface JsonplaceholderTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type JsonplaceholderTodosResponse = JsonplaceholderTodo[];
