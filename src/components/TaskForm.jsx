import React, { useState } from 'react';
import { supabase } from '../supabase/client';

function TaskForm() {
    const [taskname, setTaskname] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Obtener el usuario autenticado correctamente
            const { data: { user }, error: userError } = await supabase.auth.getUser();

            if (userError || !user) {
                console.error("Error obteniendo el usuario:", userError?.message);
                return;
            }

            // Insertar la tarea con el ID del usuario
            const { error } = await supabase
                .from('task')
                .insert([{ name: taskname, userId: user.id }]);

            if (error) {
                console.error("Error al insertar la tarea:", error.message);
            } else {
                console.log("Tarea agregada correctamente");
                setTaskname(""); // Limpiar el input después de agregar la tarea
            }

        } catch (error) {
            console.error("Error general:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="Taskname" 
                placeholder="Write your task name" 
                value={taskname}
                onChange={(e) => setTaskname(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;
