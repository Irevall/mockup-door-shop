export function createEnum(states) {
  const result = { ...states };

  Object.defineProperty(result, '$getName', {
    value: value => {
      const result = Object.values.find(value);
      return result || 'UNKNOWN';
    }
  });

  return result;
}
