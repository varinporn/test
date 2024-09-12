const trackAttendance = require('./trackAttendance.js')

describe('Employee Attendance Tracker', () => {
  test('trackAttendance should correctly calculate attendance data', () => {
    const employees = [
      { name: 'Alice', attendance: [true, true, false, true, true] },
      { name: 'Bob', attendance: [true, true, true, true, true] },
      { name: 'Charlie', attendance: [false, true, false, true, false] }
    ]

    const result = trackAttendance(employees)
    expect(result).toEqual([
      { name: 'Alice', presentDays: 4, absentDays: 1 },
      { name: 'Bob', presentDays: 5, absentDays: 0 },
      { name: 'Charlie', presentDays: 2, absentDays: 3 }
    ])
  })

  test('trackAttendance should correctly calculate attendance data', () => {
    const employees = [
      { name: 'Alice', attendance: [false, false, false, false, false] }
    ]

    const result = trackAttendance(employees)
    expect(result).toEqual([{ name: 'Alice', presentDays: 0, absentDays: 5 }])
  })
  test('trackAttendance should correctly calculate attendance data', () => {
    const employees = [
      { name: 'Alice', attendance: [true, true, true, true, true] }
    ]

    const result = trackAttendance(employees)
    expect(result).toEqual([{ name: 'Alice', presentDays: 5, absentDays: 0 }])
  })

  test('trackAttendance should handle employees with no attendance', () => {
    const employees = []
    expect(() => trackAttendance(employees)).toThrow('No Attendance')
  })

  test('trackAttendance should handle employees with null missing value', () => {
    const employees = null
    expect(() => trackAttendance(employees)).toThrow('No Attendance')
  })
  test('trackAttendance should handle employees with undefined missing value', () => {
    const employees = undefined
    expect(() => trackAttendance(employees)).toThrow('No Attendance')
  })
})
