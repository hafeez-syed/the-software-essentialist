class MilitaryTime {
    constructor(private timeString: string) {
        this.timeString = timeString
    }

    private hasTimeRange() { 
        return this.timeString.includes(' - ')
    }

    private timeRange() {
        return this.timeString.split(' - ')
    }

    private validateSimpleTime(t: string) {
        const [hours, minutes] = t.split(':')
        const hoursNumber = Number(hours)
        const minutesNumber = Number(minutes)
        return hoursNumber >= 0 && hoursNumber <= 23 && minutesNumber >= 0 && minutesNumber <= 59
    }

    private validateTimeRange() {
        const [startTime, endTime] = this.timeRange()
        const [startHours, startMinutes] = startTime.split(':')
        const [endHours, endMinutes] = endTime.split(':')
        const isStartTimeValid = this.validateSimpleTime(startTime)
        const isEndTimeValid = this.validateSimpleTime(endTime)

        return isStartTimeValid && isEndTimeValid && startHours <= endHours  && startMinutes <= endMinutes
    }

    private convertBooleanToYesNo(bool: boolean) {
        return bool ? 'yes' : 'no'
    }

    isValid() {
        return this.hasTimeRange() ? this.convertBooleanToYesNo(this.validateTimeRange()) : this.convertBooleanToYesNo(this.validateSimpleTime(this.timeString))
    }    
}

export default MilitaryTime