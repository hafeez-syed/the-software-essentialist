class MilitaryTime {
    constructor(private timeString: string) {
        this.timeString = timeString
    }
    hasTimeRange() { 
        return this.timeString.includes(' - ')
    }

    timeRange() {
        return this.timeString.split(' - ')
    }

    validateSimpleTime(t: string) {
        const [hours, minutes] = t.split(':')
        const hoursNumber = Number(hours)
        const minutesNumber = Number(minutes)
        return hoursNumber >= 0 && hoursNumber <= 23 && minutesNumber >= 0 && minutesNumber <= 59
    }

    validateTimeRange() {
        const [startTime, endTime] = this.timeRange()
        const [startHours] = startTime.split(':')
        const [endHours] = endTime.split(':')
        const isStartTimeValid = this.validateSimpleTime(startTime)
        const isEndTimeValid = this.validateSimpleTime(endTime)

        return isStartTimeValid && isEndTimeValid && startHours <= endHours
    }

    isValid() {
        return this.hasTimeRange() ? this.validateTimeRange() : this.validateSimpleTime(this.timeString)
    }    
}

export default MilitaryTime