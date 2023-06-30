function formatActivity(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].day.slice(-2, -1) === '0') {
            data[i].day = data[i].day.slice(-1)
        } else {
            data[i].day = data[i].day.slice(-2)
        }
    }
    return data
}

function formatPerformance(data) {
    const kind = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
    const kindMap = new Map()
    for (let i = 0; i < data.data.length; i++) {
        kindMap.set(i+1, kind[i])
    }
    const newData = []
    for (let i = 0; i < data.data.length; i++) {
        newData.push({
            subject: kindMap.get(data.data[i].kind),
            A: data.data[i].value,
            fullMark: 280
        })
    }
    return newData
}

function formatGoal (data) {
    const formatedGoal = [
        { 
            name: "Goal", 
            value: data.score ? data.score : data.todayScore },
        { name: "Total", value: 1 },
        ];

    return formatedGoal
}

export { formatActivity, formatPerformance, formatGoal }