interface HabitProps { /* Aqui posso definir propriedades da tag Habit, como se fosse uma propriedade de uma tag normal e, na função que exporta, colocar essas propriedades como parametro */
    completed: number
}

export function Habit(props: HabitProps) {
    return (
        <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center">
            {props.completed}
        </div>
    )
}




//Aqui vai um teste de alteração