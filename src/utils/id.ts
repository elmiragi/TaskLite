export function getRandomId(): string {
    return Math.random().toString(36).slice(2, 10)
}

export function getRandomDate(): number {
    return Math.round(Math.random()*100)
}

