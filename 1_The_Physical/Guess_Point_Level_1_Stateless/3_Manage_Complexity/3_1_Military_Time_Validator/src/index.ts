function MilitaryTime(time: string) {
    const [hours, minutes] = time.split(':')
    
    return {
        isValid: () => {
            const hoursNumber = Number(hours)
            const minutesNumber = Number(minutes)
            return hoursNumber >= 0 && hoursNumber <= 23 && minutesNumber >= 0 && minutesNumber <= 59
        }    
    }
}

export default MilitaryTime