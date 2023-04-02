import MilitaryTime from './index'

describe('military time validator', () => {
    let mTime
    
    test('should return true for valid military time', () => {
        mTime = MilitaryTime('00:00')
        expect(mTime.isValid()).toBe(true)

        mTime = MilitaryTime('23:59')
        expect(mTime.isValid()).toBe(true)

        mTime = MilitaryTime('12:00')
        expect(mTime.isValid()).toBe(true)
    })
})
