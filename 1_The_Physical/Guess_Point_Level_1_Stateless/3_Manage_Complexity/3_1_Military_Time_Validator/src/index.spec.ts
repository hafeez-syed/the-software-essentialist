import MilitaryTime from './index'

describe('military time validator', () => {
    let mTime

    test('should return true for valid military time', () => {
        mTime = new MilitaryTime('00:00')
        expect(mTime.isValid()).toBe('yes')

        mTime = new MilitaryTime('23:59')
        expect(mTime.isValid()).toBe('yes')

        mTime = new MilitaryTime('12:00')
        expect(mTime.isValid()).toBe('yes')
    })

    test('should return false for invalid military time', () => {
        mTime = new MilitaryTime('24:00')
        expect(mTime.isValid()).toBe('no')

        mTime = new MilitaryTime('00:60')
        expect(mTime.isValid()).toBe('no')

        mTime = new MilitaryTime('25:60')
        expect(mTime.isValid()).toBe('no')
    })

    test('should return true for valid time range', () => {
        mTime = new MilitaryTime('01:12 - 14:32')
        expect(mTime.isValid()).toBe('yes')

        mTime = new MilitaryTime('22:00 - 23:12')
        expect(mTime.isValid()).toBe('yes')

        mTime = new MilitaryTime('00:00 - 23:59')
        expect(mTime.isValid()).toBe('yes')
    })

    test('should return false for invalid time range', () => {
        mTime = new MilitaryTime('01:12 - 00:32')
        expect(mTime.isValid()).toBe('no')

        mTime = new MilitaryTime('22:00 - 21:12')
        expect(mTime.isValid()).toBe('no')

        mTime = new MilitaryTime('00:01 - 00:00')
        expect(mTime.isValid()).toBe('no')

        mTime = new MilitaryTime('25:00 - 12:23')
        expect(mTime.isValid()).toBe('no')
    })   
})
