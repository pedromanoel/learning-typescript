function functionNoType (value) {
  return value
}

function functionWithType (text: string) {
  return text
}

describe('function declaration in typescript', () => {
  it('allows declaration with no type', () => {
    expect(typeof functionNoType('No type')).toBe('string')
    expect(typeof functionNoType(100)).toBe('number')
  })

  it('uses type when declared', () => {
    expect(typeof functionWithType('With Type')).toBe('string')
    // functionWithType(10) Will fail to compile
  })
})
