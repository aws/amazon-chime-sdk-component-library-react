import { useState } from 'react';
import { v4 } from 'uuid';

// ensure that this never changes on re-render by
// omitting a function to update state
export function useUniqueId() {
  const [uniqueId] = useState(() => v4());
  return uniqueId;
}

export default useUniqueId;