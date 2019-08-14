export function createEnum(states) {
  const names = Object.entries(states).reduce((names, [key, value]) => {
    names[value] = key;
    return names;
  }, {});

  const result = { ...states };

  Object.defineProperty(result, '$getName', {
    value: value => names[value] || 'UNKNOWN'
  });

  return result;
}
