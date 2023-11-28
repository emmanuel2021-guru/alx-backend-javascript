export default function taskBlock(trueorfalse) {
  const task = false;
  const task2 = true;

  if (trueorfalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
