import MilitaryTime from './index'

describe('military time validator', () => {
    let mTime

    test('should return true for valid military time', () => {
        mTime = new MilitaryTime('00:00')
        expect(mTime.isValid()).toBe(true)

        mTime = new MilitaryTime('23:59')
        expect(mTime.isValid()).toBe(true)

        mTime = new MilitaryTime('12:00')
        expect(mTime.isValid()).toBe(true)
    })

    test('should return false for invalid military time', () => {
        mTime = new MilitaryTime('24:00')
        expect(mTime.isValid()).toBe(false)

        mTime = new MilitaryTime('00:60')
        expect(mTime.isValid()).toBe(false)

        mTime = new MilitaryTime('25:60')
        expect(mTime.isValid()).toBe(false)
    })

    test('should return true for valid time range', () => {
        mTime = new MilitaryTime('01:12 - 14:32')
        expect(mTime.isValid()).toBe(true)

        mTime = new MilitaryTime('22:00 - 23:12')
        expect(mTime.isValid()).toBe(true)

        mTime = new MilitaryTime('00:00 - 23:59')
        expect(mTime.isValid()).toBe(true)
    })
})
